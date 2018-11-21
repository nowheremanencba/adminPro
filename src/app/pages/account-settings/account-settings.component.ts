import { Component, OnInit, inject, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { forEach } from '@angular/router/src/utils/collection';
import { SettingsService } from '../../services/service.index';
  
@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _ajustes :SettingsService) { }

  ngOnInit() {
   this.colocarCheck();
  }
  cambiarColor(color:string, linkObject:any){ 
    
    this.aplicarCheck(linkObject);
    this._ajustes.aplicarTema(color);
  }
  aplicarCheck(linkObject:any){
    let selectores :any = document.getElementsByClassName('selector');
    for(let ref of selectores){
      ref.classList.remove('working');
    }
    linkObject.classList.add('working');
  }
  colocarCheck(){
    let tema = this._ajustes.ajustes.tema;

    let selectores :any = document.getElementsByClassName('selector');

    for(let ref of selectores){ 
      if (ref.getAttribute('data-theme') == tema){
        ref.classList.add('working');
        break;
      } 
    }
  }
}
