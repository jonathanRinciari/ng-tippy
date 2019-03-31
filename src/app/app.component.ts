import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  config = {
    content: "This is a Test!",
    theme: 'light',
    duration: [0, 1000],
    placement: 'bottom'
  };

  ngOnInit() {
  }
}
