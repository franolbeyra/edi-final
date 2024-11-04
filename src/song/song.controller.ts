import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SongService } from './song.service';
import { song } from './song.model';

@Controller('song')
export class SongController {
    constructor(private readonly songsService: SongService) {}

  @Get()
  getSong() {
    return this.songsService.getSong();
  }

  @Get('name/:name')
  getSongPorNombre(@Param('name') name: string) {
    return this.songsService.getSongPorNombre(name);
  }

  @Get('artist/:artist')
  getSongPorArtista(@Param('artist') artist: string) {
    return this.songsService.getSongPorArtista(artist);
  }

  @Post()
  postSong (@Body() newsong : song){
      return this.songsService.postSong( newsong)
  }

  @Put(':id')
  putsong ( @Body() nuevosDatos:song, @Param("id") id:string ): boolean {
    return this.songsService.putSong ( nuevosDatos, Number(id))
  }


  @Delete(':id')
  deleteSong(@Param('id') id: string): boolean {
    return this.songsService.deleteSong( Number(id));
  }
}
