import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import type {RepeatCustom} from "@/task/RepeatCustom";
import type {RepeatMode} from "@/enum/RepeatMode";

@Entity()
export class DayTask {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    color: string;

    @Column()
    icon: string;

    @Column()
    tags: number[];

    @Column()
    createDate!: Date;

    @Column()
    deadLineDate: Date;

    @Column()
    doneDate: Date[];

    @Column()
    repeatMode: RepeatMode;

    @Column()
    repeatCustom: RepeatCustom;
}