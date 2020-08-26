import { DateTime } from 'luxon';
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Student from 'App/Models/Student';

export default class StudentsSeederSeeder extends BaseSeeder {
  public async run() {
    const student = {
      name: 'Marina de Lara Bassa',
      birth_date: DateTime.fromJSDate(new Date(1992, 5, 19)),
      phone: '41995773133',
      email: 'lara.muller@workmail.com',
      institutionalEmail: 'marina.lara@pucpr.edu.br',
      schoolId: 8,
      courseId: 9,
    };

    for (let i = 0; i < 30; i++) {
      await Student.create({...student, cpf: `${i}`, registration: `${i}`});
    }
  }
}
