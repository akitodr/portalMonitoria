import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Campus from 'App/Models/Campus';

export default class CampusesController {
  public async index() {
    return await Campus.all();
  }

  public async store({ request }: HttpContextContract) {
    const campus = await Campus.create(request.post());
    return campus;
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params;
    const campus = await Campus.findOrFail(id);
    return campus;
  }

  public async update({ params, request }: HttpContextContract) {
    const { id } = params;
    const campus = await Campus.findOrFail(id);

    campus.merge(request.post());
    await campus.save();
  }

  public async destroy({ params }: HttpContextContract) {
    const { id } = params;
    const campus = await Campus.findOrFail(id);
    await campus.delete();
  }

  public async getSchools({ params }: HttpContextContract) {
    const campus = await Campus.findOrFail(params.id);
    await campus.preload('schools');
    return campus.schools;
  }
}
