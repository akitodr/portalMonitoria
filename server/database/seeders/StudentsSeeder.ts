import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import ImportStudents from '../../app/Utils/ImportStudents';
import path from 'path';

export default class StudentsSeederSeeder extends BaseSeeder {
  public async run() {
    //ImportStudents(path.join('files/Oficio nº 10_2020_Monitorias 2020-2.xlsx'));
  }
}
