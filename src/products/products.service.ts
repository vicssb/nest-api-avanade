import { Injectable } from '@nestjs/common';
import { UpadateProductDTO } from './dto/updateProduct.dto';

@Injectable()
export class ProductsService {

    async create(): Promise<string> {
        return 'Produto criado com sucesso!';
    }
    
    async findAll(): Promise<string> {
        return 'Lista de Produtos!';
    }

    async findOne(id: number): Promise<string> {
        return `Produto: ${id}`;
    }

    async update(id: number, req: UpadateProductDTO): Promise<string> {
        return `Produto ${id} atualizado com sucesso!`;
      }
    
}
