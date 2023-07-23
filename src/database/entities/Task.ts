// @ts-ignore
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Task {

        @PrimaryGeneratedColumn()
        id!: number;

        @Column()
        name: string | undefined;

        @Column()
        description: string | undefined;

        @Column()
        color: string | undefined;

        @Column()
        icon: string | undefined;

        @Column()
        tags: number[] | undefined;

        @Column()
        createDate!: Date;

        @Column()
        deadLineDate: Date | undefined;

        @Column()
        doneDate: Date | undefined;
}