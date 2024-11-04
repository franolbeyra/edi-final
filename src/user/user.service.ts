import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {
    private users: User[] = [];
    private currentId = 1;
  
   
    addUser(nombre: string, email: string, edad: number): User {
      const user = new User(this.currentId++, nombre, email, edad);
      this.users.push(user);
      return user;
    }
  

    getAllUsers(): User[] {
      return this.users;
    }
  
    getUserById(id: number): User {
      const user = this.users.find((u) => u.id === id);
      if (!user) {
        throw new NotFoundException('Usuario no encontrado');
      }
      return user;
    }
  

    updateUser(id: number, nombre: string, email: string, edad: number): User {
      const user = this.getUserById(id);
      user.nombre = nombre;
      user.email = email;
      user.edad = edad;
      return user;
    }
 
    deleteUser(id: number): void {
      const index = this.users.findIndex((u) => u.id === id);
      if (index === -1) {
        throw new NotFoundException('Usuario no encontrado');
      }
      this.users.splice(index, 1);
    }
}
