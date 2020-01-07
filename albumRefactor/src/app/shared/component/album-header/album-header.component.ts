import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-album-header',
  templateUrl: './album-header.component.html',
  styleUrls: ['./album-header.component.scss']
})
export class AlbumHeaderComponent implements OnInit {
  @Output() searchField = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  search() {

  }

}
