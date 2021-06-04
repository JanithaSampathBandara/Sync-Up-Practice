import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './home/button/button.component';
import { LabelComponent } from './home/label/label.component';
import { HomeComponent } from './home/home.component';
import { TextFieldComponent } from './home/text-field/text-field.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    LabelComponent,
    HomeComponent,
    TextFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
