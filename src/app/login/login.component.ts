import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare function initial_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _router:Router) { }

  ngOnInit() {
    initial_plugins();
  }
  onSubmit(){
    this._router.navigate(['/dashboard']);
  }
}
