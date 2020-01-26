import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-test-message',
  templateUrl: './test-message.component.html',
  styleUrls: ['./test-message.component.scss']
})
export class TestMessageComponent implements OnInit {
  messages: any[] = [];
  subscription: Subscription;

  constructor() { }

  ngOnInit() {
  }

}
