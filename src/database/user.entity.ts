import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserPost } from './user-post.entity';

@Entity({ name: 'user_auth' })
export class User {
    @PrimaryGeneratedColumn('identity', { name: 'user_id' })
    id: number;

    @Column({
        type: 'varchar',
        length: 120,
        nullable: false,
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 120,
        name: 'user_name',
        nullable: false,
    })
    userName: string;

    @Column({
        type: 'text',
        name: 'hash_pass',
        nullable: false,
    })
    password: string;

    @Column({
        type: 'timestamptz',
        name: 'created_at',
    })
    createdAt: Date;

    @Column({
        type: 'timestamptz',
        name: 'updated_at',
    })
    updatedAt: Date;

    @OneToMany(() => UserPost, (post) => post.author)
    articles: UserPost[];
}
