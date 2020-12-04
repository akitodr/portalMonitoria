import { DateTime } from 'luxon';
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm';
import Discipline from './Discipline';

export default class Project extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public code: string;

  @hasMany(() => Discipline)
  public disciplines: HasMany<typeof Discipline>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
