import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongController } from './song/song.controller';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { SongService } from './song/song.service';

@Module({
  imports: [],
  controllers: [AppController, SongController, UserController],
  providers: [AppService, UserService, SongService],
})
export class AppModule {}
