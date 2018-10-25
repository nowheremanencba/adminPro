import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html' 
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress:ElementRef;
  @Input() progreso:number= 50;
  @Input() leyenda:string ='Leyenda';
  @Output() cambioValor: EventEmitter <number> = new EventEmitter();

  constructor() {
    console.log(this.progreso); 
   }

  ngOnInit() {
    console.log(this.progreso); 
  }
  OnChanges(newValue:number){

    let elemHTML:any= document.getElementsByName('progreso')[0];

    console.log(newValue);
    
    if (newValue >= 100) {
      this.progreso = 100;
    }else if(newValue <=0){ 
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }

   /*  this.txtProgress.nativeElement.value=  this.progreso;
   
    this.progreso = newValue; */
    elemHTML.value = this.progreso; 
    this.cambioValor.emit(this.progreso);
  }

  cambiarValor(valor:number){
    if (valor >= 100 && valor > 0) {
      this.progreso=100;
      return;
    }  
    if (valor <= 0 && valor < 0) {
      this.progreso=0;
      return;
    }  
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }
}
