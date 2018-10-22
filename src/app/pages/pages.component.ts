import { Component, OnInit } from '@angular/core';
declare function initial_plugins();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    initial_plugins();
  }

}
