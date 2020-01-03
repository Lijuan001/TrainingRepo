import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchbarComponent } from './shared/searchbar/searchbar/searchbar.component';


const routes: Routes = [
  {path:'',component:SearchbarComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
