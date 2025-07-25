import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { UserAuth } from './user-auth.entity';

@Entity()
export class UserPost {
    @PrimaryGeneratedColumn('uuid', { name: 'user_post_id' })
    id: number;

    @Column({
        type: 'varchar',
        length: 300,
    })
    title: string;

    @Column({
        type: 'text',
        name: 'content',
    })
    content: string;

    @ManyToOne(() => UserAuth, (user) => user.articles)
    @JoinColumn({ name: 'author_id' })
    author: UserAuth;
}
