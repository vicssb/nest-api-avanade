import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

    async authLogin(login:string, password:string){
        console.log('No service - Login: ', login);
        console.log('No service - Senha: ', password);
        return {login, password};

    }


}
