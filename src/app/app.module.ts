import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TriviaComponent } from './trivia/trivia.component';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
