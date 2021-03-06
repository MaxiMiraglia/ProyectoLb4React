import {repository} from '@loopback/repository';
import {HttpErrors, post, requestBody} from '@loopback/rest';
import {UserRepository} from '../repositories';
import {AuthService} from '../services/auth.services';

// import {inject} from '@loopback/core';

class Credentials {
  username: string;
  password: string;
}

export class UsersController {

  authService: AuthService;

  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository) {
    this.authService = new AuthService(this.userRepository);
  }


  @post('/login', {
    responses: {
      '200': {
        description: 'Login for users'
      }
    }
  })

  async login(

    @requestBody() credentials: Credentials

  ): Promise<Object> {
    let user = await this.authService.Identify(credentials.username, credentials.password);
    if (user) {
      let tk = await this.authService.GenerateToken(user);
      return {
        data: user,
        token: tk
      }
    }
    else {
      throw new HttpErrors[401]("User or password invalid.");
    }
  }
}
