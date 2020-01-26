import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestMessageComponent } from './component/test-message/test-message.component';
import { UserComponent } from './component/user/user.component';
import { LoginComponent } from './component/login/login.component';
import { MyCounterComponent } from './my-counter/my-counter.component';


const routes: Routes = [
{path: '' , redirectTo: 'LoginComponent', pathMatch: 'full'},
{path: 'message', component: TestMessageComponent},
{path: 'users', component: UserComponent},
{path: 'login', component: LoginComponent},
{path: 'mycounter', component: MyCounterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
