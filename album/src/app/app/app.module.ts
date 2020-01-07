import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './shared/component/searchbar/searchbar/searchbar.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumCardComponent } from './album/album-card/album-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { OneOpenpanelComponent } from './shared/component/one-openpanel/one-openpanel.component';
import { SignupComponent } from './shared/modal/signupModel/signup.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    AlbumListComponent,
    AlbumCardComponent,
    OneOpenpanelComponent,
    SignupComponent,
    LoginComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule

  ],
  entryComponents: [SignupComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
