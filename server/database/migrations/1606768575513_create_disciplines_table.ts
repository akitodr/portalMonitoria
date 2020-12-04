import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateDisciplinesTables extends BaseSchema {
  protected tableName = 'disciplines';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('name').notNullable();
      table.string('code').notNullable();
      table.string('hours');

      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
