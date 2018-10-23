import {Routes, RouterModule} from "@angular/router";
//Components
import { LoginComponent } from './login/login.component'; 
import { ErrorComponent } from "./shared/error/error.component"; 
import { RegisterComponent } from "./login/register.component";
 
const appRoutes: Routes = [    
   
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent} , 
    { path: '**', component:ErrorComponent }
   ];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});