import { DateTime } from 'luxon';
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm';
import Course from './Course';
import School from './School';

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public cpf: string;

  @column.date()
  public birthDate: DateTime;

  @column()
  public registration: string;

  @column()
  public phone: string;

  @column()
  public email: string;

  @column()
  public institutionalEmail: string;

  @column()
  public schoolId: number;

  @belongsTo(() => School)
  public school: BelongsTo<typeof School>;

  @column()
  public courseId: number;

  @belongsTo(() => Course)
  public course: BelongsTo<typeof Course>;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
