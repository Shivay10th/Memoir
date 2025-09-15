import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
    ApiCreatedResponse,
    ApiDefaultResponse,
    ApiExtraModels,
    ApiOkResponse,
    getSchemaPath,
    ApiResponse as SwaggerApiResponse,
} from '@nestjs/swagger';
import { SuccessResponseDto } from '../common/dto/success-response.dto';
import {
    ReferenceObject,
    SchemaObject,
} from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export const ApiSuccessResponse = (
    model?: Function,
    options?: {
        messageExample?: string;
        statusCode?: HttpStatus;
    },
) => {
    const extraModels: Function[] = [SuccessResponseDto];
    const { messageExample, statusCode = HttpStatus.OK } = options;
    let overrideProperties: Record<string, SchemaObject | ReferenceObject> = {};

    if (model) {
        overrideProperties.data = {
            $ref: getSchemaPath(model),
        };
        extraModels.push(model);
    }
    if (messageExample) {
        overrideProperties.message = {
            type: 'string',
            example: messageExample,
        };
    }

    const schema: SchemaObject & Partial<ReferenceObject> = {
        allOf: [
            {
                $ref: getSchemaPath(SuccessResponseDto),
            },
            {
                properties: overrideProperties,
            },
        ],
    };

    let ApiResponseDecorator: typeof ApiDefaultResponse;

    switch (statusCode) {
        case HttpStatus.CREATED: {
            ApiResponseDecorator = ApiCreatedResponse;
            break;
        }
        case HttpStatus.OK: {
            ApiResponseDecorator = ApiOkResponse;
        }
        default: {
            ApiResponseDecorator = (props) =>
                SwaggerApiResponse({ status: statusCode, ...props });
        }
    }

    return applyDecorators(
        ApiExtraModels(...extraModels),
        ApiResponseDecorator({ schema }),
    );
};
