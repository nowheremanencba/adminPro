import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  
  titulo:string="";

  constructor(private router:Router,
              private title:Title,
              private meta:Meta) { 

    //1. Ejemplo de Observable: Obtiene el titulo de la pagina, filtrando y mapeando.
    //2. Ejemplo de cambiar el titulo de la pagina 
    this.getDataRoute().subscribe( data => {
        this.titulo = data.titulo;    // 1.
        title.setTitle('Admin Pro | '+ this.titulo);  // 2. 
        const metaTag:MetaDefinition {

        }
    }) 
  }

  ngOnInit() {
  }
  
  getDataRoute(){
    return this.router.events
    .pipe(
          filter(evento => evento instanceof ActivationEnd),
          filter( (evento: ActivationEnd) => evento.snapshot.firstChild===null),
          map ((evento:ActivationEnd) => evento.snapshot.data)
    )
  }
}
