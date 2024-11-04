import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { User } from './user.model';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly usersService: UserService) {}


  @Post()
  addUser(
    @Body('nombre') nombre: string,
    @Body('email') email: string,
    @Body('edad') edad: number,
  ): User {
    return this.usersService.addUser(nombre, email, edad);
  }

  @Get()
  getAllUsers(): User[] {
    return this.usersService.getAllUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.getUserById(+id);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body('nombre') nombre: string,
    @Body('email') email: string,
    @Body('edad') edad: number,
  ): User {
    return this.usersService.updateUser(+id, nombre, email, edad);
  }

 
  @Delete(':id')
  deleteUser(@Param('id') id: string): void {
    this.usersService.deleteUser(+id);
  }
}
