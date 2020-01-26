import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayUserComponent } from './component/display-user/display-user.component';
import { HeaderComponent } from './component/header/header.component';
import { UserCardComponent } from './component/user-card/user-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoModalComponent } from './modal/todo-modal/todo-modal.component';
import { ModalComponent } from './modal/components/modal/modal.component';
import { ChangeColorDirective } from './directive/change-color.directive';
import { TestMessageComponent } from './component/test-message/test-message.component';
import { HightlightDirective } from './directive/hightlight.directive';
import { AppNotDirective } from './directive/app-not.directive';
import { ReverseStrPipe } from './pipe/reverse-str.pipe';
import { LoginComponent } from './component/login/login.component';
import { UserComponent } from './component/user/user.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './commponent/register/register.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayUserComponent,
    HeaderComponent,
    UserCardComponent,
    TodoModalComponent,
    ModalComponent,
    ChangeColorDirective,
    TestMessageComponent,
    HightlightDirective,
    AppNotDirective,
    ReverseStrPipe,
    LoginComponent,
    UserComponent,
    RegisterComponent,
    MyCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    /* StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }) */
    StoreModule.forRoot({ count: counterReducer})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
