import { DateTime } from 'luxon';
import { BaseModel, beforeSave, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm';
import School from './School';
import Course from './Course';

export default class Teacher extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public name: string;

  @column()
  public code: string;

  @column()
  public email: string;

  @column()
  public phone: string;

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
