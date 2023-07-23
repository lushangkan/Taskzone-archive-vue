import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class TaskGroup {
    @PrimaryGeneratedColumn()
    id;
    @Column()
    name;
    @Column()
    description;
    @Column()
    tasks;
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
}
