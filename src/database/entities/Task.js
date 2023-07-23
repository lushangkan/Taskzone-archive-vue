// @ts-ignore
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id;
    @Column()
    name;
    @Column()
    description;
    @Column()
    color;
    @Column()
    icon;
    @Column()
    tags;
    @Column()
    createDate;
    @Column()
    deadLineDate;
    @Column()
    doneDate;
}
