import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import ProjectStudent from 'App/Models/ProjectStudent';

export default class ProjectStudentsController {
  public async index() {
    return await ProjectStudent.all();
  }

  public async store({ request }: HttpContextContract) {
    const projectStudent = await ProjectStudent.create(request.post());
    return projectStudent;
  }

  public async show({ params }: HttpContextContract) {
    const student = await ProjectStudent.findOrFail(params.id);
    await student.preload('disciplines');
    return {...student.toJSON(), disciplines: student.disciplines.map(_ => _.id)};
  }

  public async update({ params, request }: HttpContextContract) {
    const { id } = params;
    const projectStudent = await ProjectStudent.findOrFail(id);
    projectStudent.merge(request.post());
    const { disciplines } = request.post();
    if(disciplines) {
      await projectStudent.related('disciplines').sync(disciplines);
    }
    await projectStudent.save();
    return projectStudent;
  }

  public async destroy({ params }: HttpContextContract) {
    const { id } = params;
    const projectStudent = await ProjectStudent.findOrFail(id);
    await projectStudent.delete();
  }
}
