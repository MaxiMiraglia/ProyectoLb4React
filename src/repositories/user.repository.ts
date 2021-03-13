import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {User, UserRelations, Personas} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {PersonasRepository} from './personas.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly personas: BelongsToAccessor<Personas, typeof User.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('PersonasRepository') protected personasRepositoryGetter: Getter<PersonasRepository>,
  ) {
    super(User, dataSource);
    this.personas = this.createBelongsToAccessorFor('personas', personasRepositoryGetter,);
    this.registerInclusionResolver('personas', this.personas.inclusionResolver);
  }
}
