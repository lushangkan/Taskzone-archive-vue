// @ts-ignore
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Setting {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    key: string;

    @Column('simple-json')
    value: { value: any };


}
