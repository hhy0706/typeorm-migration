import { Entity, PrimaryGeneratedColumn, Column, IsNull } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string
    @Column()
    lastName: string

    @Column({
        nullable:true
    })
    sex: boolean

    @Column({
        nullable: true
    })
    age: number

}
