import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../../shared/service/album.service';
import { Album } from '../../shared/model/Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  @Input() albumList;
  constructor() { }

  ngOnInit() {
  }

}
