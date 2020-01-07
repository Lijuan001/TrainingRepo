import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumListComponent } from './album/album-list/album-list.component';
import { AlbumCardComponent } from './album/album-card/album-card.component';
import { AlbumHeaderComponent } from './shared/component/album-header/album-header.component';
import { AlbumSearchbarComponent } from './shared/component/album-searchbar/album-searchbar.component';
import { AlbumSignupButtonComponent } from './shared/component/album-signup-button/album-signup-button.component';
import { SignupModalComponent } from './modal/signup-modal/signup-modal.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumCardComponent,
    AlbumHeaderComponent,
    AlbumSearchbarComponent,
    AlbumSignupButtonComponent,
    SignupModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
