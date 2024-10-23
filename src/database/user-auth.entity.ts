import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserAuth {
    @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
    id: number;

    @Column({
        type: 'varchar',
        length: 120,
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 120,
    })
    email: string;

    @Column({
        type: 'text',
        name: 'hash_pass',
    })
    password: string;
}
