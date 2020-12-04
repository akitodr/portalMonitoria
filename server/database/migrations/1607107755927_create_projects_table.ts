import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class CreateProjectsTables extends BaseSchema {
  protected tableName = 'projects';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      table.string('code');

      table.integer('discipline_id');
      table.foreign('discipline_id')
        .references('id')
        .inTable('disciplines')
        .onDelete('cascade');

      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
