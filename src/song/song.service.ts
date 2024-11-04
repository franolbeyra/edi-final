import { Injectable } from '@nestjs/common';
import { song } from './song.model';

@Injectable()
export class SongService {
    songList : song[] = [];
  
  
   constructor(){
    const song : song = {
        id: 1,
        title: "La noche sin ti",
        artist: "Los Huayra",
    }
    this.songList.push(song);
  }

getSong (){
  return this.songList
}
getSongPorID (id:number){
  return this.songList.find( s => s.id === id);
}
getSongPorNombre (name: string){
  return this.songList.find( s => s.title === name);
}
getSongPorArtista (artist: string){;
  return this.songList.find( s => s.artist === artist);
}
postSong (nuevasong : song): string | undefined {;
  this.songList.push( nuevasong );
  return nuevasong.title;
}

 putSong(nuevosdatos:song, songToUpdateId:number ) : boolean {
  const songToUpdate : song = this.songList.find (s => s.id === songToUpdateId);
  if ( songToUpdate != undefined ){
    songToUpdate.title = nuevosdatos.title;
    songToUpdate.artist = nuevosdatos.artist;
    return true;
  } else
    return false;
 }

 deleteSong ( id:number ) : boolean {
  const indiceSongEliminar = this.songList.findIndex ( s => s.id === id );
  if (indiceSongEliminar == -1 )
    return false;
  this.songList.splice( indiceSongEliminar, 1);
  return true;
 }
}
