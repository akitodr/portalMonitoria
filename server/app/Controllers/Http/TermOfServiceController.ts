import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TermOfService from 'App/Models/TermOfService'

export default class TermOfServiceController {
  public async index () {
    return await TermOfService.all();
  }

  public async store ({request}: HttpContextContract) {
    const term = await TermOfService.create(request.post());
    return term;
  }

  public async show ({params}: HttpContextContract) {
    const { id } = params;
    const term = await TermOfService.findOrFail(id);
    return term;
  }

  public async update ({request, params}: HttpContextContract) {
    const { id } = params;
    const term = await TermOfService.findOrFail(id);
    
    term.merge(request.post());
    await term.save();
  }

  public async destroy ({params}: HttpContextContract) {
    const { id } = params;
    const term = await TermOfService.findOrFail(id);
    await term.delete();
  }
}
