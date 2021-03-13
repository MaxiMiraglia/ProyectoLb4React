import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Personas,
  User,
} from '../models';
import {PersonasRepository} from '../repositories';

export class PersonasUserController {
  constructor(
    @repository(PersonasRepository) protected personasRepository: PersonasRepository,
  ) { }

  @get('/personas/{id}/user', {
    responses: {
      '200': {
        description: 'Personas has one User',
        content: {
          'application/json': {
            schema: getModelSchemaRef(User),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<User>,
  ): Promise<User> {
    return this.personasRepository.user(id).get(filter);
  }

  @post('/personas/{id}/user', {
    responses: {
      '200': {
        description: 'Personas model instance',
        content: {'application/json': {schema: getModelSchemaRef(User)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Personas.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {
            title: 'NewUserInPersonas',
            exclude: ['id'],
            optional: ['personasId']
          }),
        },
      },
    }) user: Omit<User, 'id'>,
  ): Promise<User> {
    return this.personasRepository.user(id).create(user);
  }

  @patch('/personas/{id}/user', {
    responses: {
      '200': {
        description: 'Personas.User PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(User, {partial: true}),
        },
      },
    })
    user: Partial<User>,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.personasRepository.user(id).patch(user, where);
  }

  @del('/personas/{id}/user', {
    responses: {
      '200': {
        description: 'Personas.User DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(User)) where?: Where<User>,
  ): Promise<Count> {
    return this.personasRepository.user(id).delete(where);
  }
}
