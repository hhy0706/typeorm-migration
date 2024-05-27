import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn()
    id:string;
    
    @Column()
    name:string;
}