import { Component } from '@angular/core';
import { AlbumService } from './shared/service/album.service';
import { Album } from './shared/model/Album';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  albumList: Album[] = [];
  title = 'album3';

  constructor(private albumService: AlbumService) {}

  getAlbums(val: string) {
    console.log('app componnet: ' + val);
    this.albumService.getAlbums(val)
    .subscribe(data => {
      this.albumList.push(data);
      console.log(this.albumList);
    });
  }
}
