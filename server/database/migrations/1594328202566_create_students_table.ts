import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateStudentsTables extends BaseSchema {
  protected tableName = 'students';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('name').notNullable();
      table.string('cpf', 11).unique().notNullable();
      table.date('birth_date').notNullable();
      table.string('registration',12).unique().notNullable();
      table.string('phone').notNullable();
      table.string('email').notNullable();
      table.string('institutional_email').notNullable();

      table.integer('school_id').notNullable();
      table.foreign('school_id')
        .references('id')
        .inTable('schools');

      table.integer('course_id').notNullable();
      table.foreign('course_id')
        .references('id')
        .inTable('courses');

      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
