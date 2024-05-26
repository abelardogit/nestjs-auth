import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Hasher } from './utils/hasher.util';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;
    @Column({ length: 20 })
    name: string;
    @Column({ length: 100 })
    email: string;
    @Column({ length: 100 })
    password: string;
    @Column({ type: "boolean", default: false })
    active:boolean;
    @CreateDateColumn()
    createdOn: Date;

    constructor(private hasher: Hasher) {}

    async setHashedPassword(toBeHashed: string): Promise<void>
    {
        this.password = await this.hasher.hash(this.password)
    }
}