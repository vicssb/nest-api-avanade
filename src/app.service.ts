import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getLogin(): string {
    return 'Login do usuario!';
  }
  getRegister(): string {
    return 'Cadastro do usuario!';
  }
}
