import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  
 progreso1:number= 5;
 progreso2:number= 50;
  
  constructor() { }

  ngOnInit() {
  }
  actualizar(event:number){
    console.log('Evento', event);
  }

}
