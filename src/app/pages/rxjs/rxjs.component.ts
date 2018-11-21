import { Component, OnInit, OnDestroy } from '@angular/core';
import { observable, Observable, Subscriber, Subscription} from 'rxjs';
import { retry, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html' 
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;
  constructor() { 
    this.suscripcion= this.regresaObservable().pipe(
                    /*   retry(2) */
                    )
                    .subscribe ( 
                      numero => console.log('Subs', numero),
                      error => console.error('Error en el observable', error),
                      () => console.log('El observador termino !!')
                    );
    
   }

  ngOnInit() {
  }
  ngOnDestroy(){
    this.suscripcion.unsubscribe();
    console.log('La pagina se cerró');
  }
  regresaObservable():Observable<any>{
    return new Observable( (observer : Subscriber<any>) =>{
      let contador = 0;
      let intervalo = setInterval(()=>{
        contador ++;
        const salida = {
          valor :contador
        };
        observer.next(salida);  
     /*    if (contador==5) {
          observer.complete();
          clearInterval(intervalo);
        } */
        /* if (contador==2) {
          clearInterval(intervalo);
          observer.error('Auxilio'); 
        } */
      },100)      
    }).pipe(
        map ( resp =>  resp.valor),
        filter( (valor, index ) =>{
            if ((valor % 2)===1){
              //impar
              return true ;
            }else{
              return false;
            }
            
        }) 
    );
  }
}
