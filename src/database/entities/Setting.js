// @ts-ignore
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
@Entity()
export class Setting {
    @PrimaryGeneratedColumn()
    id;
    @Column()
    name;
    @Column()
    value;
}
