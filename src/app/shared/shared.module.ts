import { NgModule } from "@angular/core"; 
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
      CommonModule,
      RouterModule
    ],
    declarations: [
      BreadcrumbsComponent,
      ErrorComponent,
      HeaderComponent, 
      SidebarComponent
    ],
    exports: [
      BreadcrumbsComponent,
      ErrorComponent,
      HeaderComponent, 
      SidebarComponent 
    ] 
  })
  export class SharedModule { }