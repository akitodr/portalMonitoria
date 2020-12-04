import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateTeachersTables extends BaseSchema {
  protected tableName = 'teachers';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('name').notNullable();
      table.string('code').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.integer('school_id');
      table.foreign('school_id')
        .references('id')
        .inTable('schools');

      table.integer('course_id');
      table.foreign('course_id')
        .references('id')
        .inTable('courses');
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
