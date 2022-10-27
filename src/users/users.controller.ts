import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUser.dto';
import { UpadateUserDTO } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService:UsersService){}

    @Post()
    create(@Body() reg: CreateUserDTO){
        return this.usersService.create();
    }

    @Get()
    findAll(){
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: number){
        return this.usersService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseUUIDPipe) id: number, @Body() req: UpadateUserDTO){
        return this.usersService.update(id, req);
    }
}
