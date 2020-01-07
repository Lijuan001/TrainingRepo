import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { Search } from '../../model/search';

@Component({
  selector: 'app-album-searchbar',
  templateUrl: './album-searchbar.component.html',
  styleUrls: ['./album-searchbar.component.scss']
})
export class AlbumSearchbarComponent implements OnInit {
  searchModel: Search = new Search('');
  @Output() searchField = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    }

  search() {
      console.log(this.searchModel);
    }

  }
