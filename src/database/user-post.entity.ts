import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserPost {
    @PrimaryGeneratedColumn('identity', { name: 'user_post_id' })
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

    @Column({
        type: 'boolean',
        default: false,
    })
    published: boolean;

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

    @ManyToOne(() => User, (user) => user.articles)
    @JoinColumn({ name: 'author_id' })
    author: User;
}
