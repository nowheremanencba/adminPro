import { NgModule } from "@angular/core";
//Modulos
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from '@angular/forms';
//Componentes
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
//rutas
import { PAGES_ROUTES } from "./pages.routes";
//temporal
import { IncrementadorComponent } from "../components/incrementador/incrementador.component";
import { GraficoDonaComponent } from "../components/grafico-dona/grafico-dona.component";
 
 
@NgModule({
    declarations: [
    DashboardComponent,
    ProgressComponent,
    Graficas1Component, 
    PagesComponent,
    IncrementadorComponent,
    GraficoDonaComponent
    ],
    exports: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component,
      PagesComponent,
      IncrementadorComponent,
      GraficoDonaComponent
    ] ,
    imports:[
      SharedModule,
      PAGES_ROUTES,
      FormsModule,
      ChartsModule
    ]
  })
  export class PagesModule { }