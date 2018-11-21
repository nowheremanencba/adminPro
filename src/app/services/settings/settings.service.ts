import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes: Ajustes ={
    temaURL:"assets/css/colors/default.css",
    tema:"default"
  }
  
  constructor(@Inject(DOCUMENT) private _document) { 
    this.getAjustes();
  }
  
  guardarAjustes(){
      localStorage.setItem('ajustes', JSON.stringify(this.ajustes)) 
  }
  getAjustes(){
    if (localStorage.getItem('ajustes')) {
        this.ajustes= JSON.parse(localStorage.getItem('ajustes'));
        this.aplicarTema(this.ajustes.tema );
       // console.log("Cargando tema en local storage..");
    //}
    //else{
      //  console.log("Cargando tema por default..");
    }
  }
  aplicarTema(tema:string){
    let url='assets/css/colors/'+tema+'.css';
    this._document.getElementById('css_tema').setAttribute('href',url);
    this.ajustes.tema=tema;
    this.ajustes.temaURL=url;
    this.guardarAjustes();
  }
}

interface Ajustes {
  temaURL:string;
  tema:string;
}
