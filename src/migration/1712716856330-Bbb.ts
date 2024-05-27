import { MigrationInterface, QueryRunner } from "typeorm";

export class Bbb1712716856330 implements MigrationInterface {
    name = 'Bbb1712716856330'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_d62835db8c0aec1d18a5a927549\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`department_id\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD \`name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`employee\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD \`name\` varchar(50) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD \`department_id\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_d62835db8c0aec1d18a5a927549\` FOREIGN KEY (\`department_id\`) REFERENCES \`department\`(\`id\`) ON DELETE SET NULL ON UPDATE SET NULL`);
    }

}
