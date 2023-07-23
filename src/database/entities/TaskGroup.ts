import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class TaskGroup {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string | undefined;

    @Column()
    description: string | undefined;

    @Column()
    tasks: number[] | undefined;

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

}