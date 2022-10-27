import { Body, Controller, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateProductDTO } from './dto/createProduct.dto';
import { UpadateProductDTO } from './dto/updateProduct.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService){}
   
        @Post()
        create(@Body() reg: CreateProductDTO) {
            return this.productsService.create();
        }
    
        @Get()
        findAll(){
            return this.productsService.findAll();
        }
    
        @Get(':id')
        findOne(@Param('id', ParseUUIDPipe) id: number){
            return this.productsService.findOne(id);
        }
    
        @Patch(':id')
        update(@Param('id', ParseUUIDPipe) id: number, @Body() req: UpadateProductDTO){
            return this.productsService.update(id, req);
        }
    
}
    