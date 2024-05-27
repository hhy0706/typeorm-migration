import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Employee } from "./entity/Employee";
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "guang",
    database: "student",
    synchronize: false,
    connectorPackage:'mysql2',
    logging: true,
    entities: [User,Employee],
    poolSize: 10,
    // 地址注意 migration单词注意
    migrations: ['./src/migration/**.ts'],
    subscribers: [],
    // extra: {
    //     authPlugin: 'sha256_password'
    // }
})
