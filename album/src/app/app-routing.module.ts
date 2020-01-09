import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneOpenpanelComponent } from './shared/component/one-openpanel/one-openpanel.component';
import { LoginComponent } from './login/login.component';
import { SearchbarComponent } from './album-header/searchbar/searchbar.component';


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: SearchbarComponent},
  {path: 'onepanel', component: OneOpenpanelComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
