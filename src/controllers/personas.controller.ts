import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where
} from '@loopback/repository';
import {
  del, get,
  getModelSchemaRef, param,


  patch, post,




  put,

  requestBody
} from '@loopback/rest';
import {ServiceKeys as keys} from '../keys/service-keys';
import {Personas} from '../models';
import {PersonasRepository, UserRepository} from '../repositories';
import {EncryptDecrypt} from '../services/encrypt-decrypt.service';

export class PersonasController {
  constructor(
    @repository(PersonasRepository)
    public personasRepository: PersonasRepository,
    @repository(UserRepository)
    public userRepository: UserRepository,
  ) { }

  @post('/personas', {
    responses: {
      '200': {
        description: 'Personas model instance',
        content: {'application/json': {schema: getModelSchemaRef(Personas)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personas, {
            title: 'NewPersonas',

          }),
        },
      },
    })
    personas: Personas,
  ): Promise<Personas> {
    let p = await this.personasRepository.create(personas);
    let password1 = new EncryptDecrypt(keys.MD5).Encrypt(p.password);
    let password2 = new EncryptDecrypt(keys.MD5).Encrypt(password1);
    let u =
    {
      username: p.username,
      password: password2,
      personasId: p.id
    };

    let user = await this.userRepository.create(u);
    user.password = '';
    p.user = user;

    return p;
    /*let p = await this.personasRepository.create(personas);
    let u =
    {
      username: p.username,
      password: p.password,
      personasId: p.id
    };

    let user = await this.userRepository.create(u);
    user.password = '';
    p.user = user;

    return p;*/

  }

  @get('/personas/count', {
    responses: {
      '200': {
        description: 'Personas model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Personas) where?: Where<Personas>,
  ): Promise<Count> {
    return this.personasRepository.count(where);
  }

  @get('/personas', {
    responses: {
      '200': {
        description: 'Array of Personas model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Personas, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Personas) filter?: Filter<Personas>,
  ): Promise<Personas[]> {
    return this.personasRepository.find(filter);
  }

  @patch('/personas', {
    responses: {
      '200': {
        description: 'Personas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personas, {partial: true}),
        },
      },
    })
    personas: Personas,
    @param.where(Personas) where?: Where<Personas>,
  ): Promise<Count> {
    return this.personasRepository.updateAll(personas, where);
  }

  @get('/personas/{id}', {
    responses: {
      '200': {
        description: 'Personas model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Personas, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Personas, {exclude: 'where'}) filter?: FilterExcludingWhere<Personas>
  ): Promise<Personas> {
    return this.personasRepository.findById(id, filter);
  }

  @patch('/personas/{id}', {
    responses: {
      '204': {
        description: 'Personas PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Personas, {partial: true}),
        },
      },
    })
    personas: Personas,
  ): Promise<void> {
    await this.personasRepository.updateById(id, personas);
  }

  @put('/personas/{id}', {
    responses: {
      '204': {
        description: 'Personas PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personas: Personas,
  ): Promise<void> {

    let u = await this.userRepository.findOne({where: {personasId: personas.id}});

    if (u) {
      u.username = personas.username;
      await this.userRepository.replaceById(u.id, u);
    }
    await this.personasRepository.replaceById(id, personas);
  }

  @del('/personas/{id}', {
    responses: {
      '204': {
        description: 'Personas DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personasRepository.deleteById(id);
  }
}
