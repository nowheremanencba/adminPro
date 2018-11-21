import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
//routes
import { APP_ROUTES } from './app.routes';
//modules
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
//Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; 
import { RegisterComponent } from './login/register.component';
//services
import { ServiceModule } from './services/service.module'; 


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, 
    RegisterComponent 
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    SharedModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
