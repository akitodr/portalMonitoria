import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Student from 'App/Models/Student';
import { DateTime } from 'luxon';

export default class StudentsController {
  public async index({ request }: HttpContextContract) {
    const page = request.input('page', 1);
    const perPage = request.input('perPage', 10);
    const { term } = request.get();

    const query = Student.query();

    if(term) {
      query.where('name', '~*', `.*${term}.*`);
      // .orWhere('cpf', '~*', `.*${term}.*`)
      // .orWhere('registration', '~*', `.*${term}.*`)
      // .orWhere('email', '~*', `.*${term}.*`);
    }

    return await query.paginate(page, perPage);
  }

  public async store({ request }: HttpContextContract) {
    const birthDate = DateTime.fromISO(request.post().birth_date);
    const student = await Student.create({ ...request.post(), birthDate });
    return student;
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params;
    const student = await Student.findOrFail(id);
    await student.preload('school');
    await student.preload('course');
    return student;
  }

  public async update({ params, request }: HttpContextContract) {
    const { id } = params;
    const student = await Student.findOrFail(id);
    student.merge(request.post());
    await student.save();
  }

  public async destroy({ params }: HttpContextContract) {
    const { id } = params;
    const student = await Student.findOrFail(id);
    await student.delete();
  }
}
