export interface ServiceGenericResponse<T> {
    data: T | null;
    message?: string;
}
