import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateProjectStudentTables extends BaseSchema {
  protected tableName = 'project_student';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.integer('project_id').notNullable();
      table.foreign('project_id')
        .references('id')
        .inTable('projects');

      table.integer('student_id').notNullable();
      table.foreign('student_id')
        .references('id')
        .inTable('student');

      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
