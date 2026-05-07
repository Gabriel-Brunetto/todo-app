import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm'

@Entity('tasks')
export class Task{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({unique: true})
    title: string;

    @Column({default: false})
    done: boolean;

    @CreateDateColumn()
    createAt: Date;
}