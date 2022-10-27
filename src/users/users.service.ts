import { Body, Injectable, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { UpadateUserDTO } from './dto/updateUser.dto';

@Injectable()
export class UsersService {
    
    async create(): Promise<string> {
        return 'Usuário criado com sucesso!';
    }
    
    async findAll(): Promise<string> {
        return 'Lista de Usuários!';
    }

    async findOne(id: number): Promise<string> {
        return `Usuário ${id}`;
    }

    async update(id: number, req: UpadateUserDTO): Promise<string> {
        return `Usuário ${id} atualizado com sucesso!`;
      }
    
}
