import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class DayTask {
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
    @Column()
    repeatMode;
    @Column()
    repeatCustom;
}
