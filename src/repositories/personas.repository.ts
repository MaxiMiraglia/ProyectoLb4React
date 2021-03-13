import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {Personas, PersonasRelations, User} from '../models';
import {MysqlDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';

export class PersonasRepository extends DefaultCrudRepository<
  Personas,
  typeof Personas.prototype.id,
  PersonasRelations
> {

  public readonly user: HasOneRepositoryFactory<User, typeof Personas.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('UserRepository') protected userRepositoryGetter: Getter<UserRepository>,
  ) {
    super(Personas, dataSource);
    this.user = this.createHasOneRepositoryFactoryFor('user', userRepositoryGetter);
    this.registerInclusionResolver('user', this.user.inclusionResolver);
  }
}
