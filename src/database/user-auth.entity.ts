import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserPost } from './user-post.entity';

@Entity()
export class UserAuth {
    @PrimaryGeneratedColumn('uuid', { name: 'user_id' })
    id: number;

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

    @OneToMany(() => UserPost, (post) => post.author)
    articles: UserPost[];
}
