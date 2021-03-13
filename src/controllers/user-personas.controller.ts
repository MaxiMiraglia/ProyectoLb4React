import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  User,
  Personas,
} from '../models';
import {UserRepository} from '../repositories';

export class UserPersonasController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @get('/users/{id}/personas', {
    responses: {
      '200': {
        description: 'Personas belonging to User',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Personas)},
          },
        },
      },
    },
  })
  async getPersonas(
    @param.path.number('id') id: typeof User.prototype.id,
  ): Promise<Personas> {
    return this.userRepository.personas(id);
  }
}
