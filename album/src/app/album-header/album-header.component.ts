import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-album-header',
  templateUrl: './album-header.component.html',
  styleUrls: ['./album-header.component.scss']
})
export class AlbumHeaderComponent implements OnInit {
  @Output() search = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  emitSearch(val) {
    this.search.emit(val);
  }

}
