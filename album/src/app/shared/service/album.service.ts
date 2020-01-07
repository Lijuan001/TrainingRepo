import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../model/Album';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  albumUrl = environment.albumUrl;

  constructor(private httpClient: HttpClient) { }

  getAlbums(artistName: string): Observable<Album> {
    return this.httpClient
    .get(`${this.albumUrl}/search?term=${artistName}&media=music&attribute=artistTerm&limit=200&entity=album`)
    .pipe(res => res as Observable<Album>);
  }

}
