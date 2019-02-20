import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MyMaterialModule } from '../material.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SantiagoComponent } from './santiago/santiago.component';
import { BuenosAiresComponent } from './buenos-aires/buenos-aires.component';
import { LimaComponent } from './lima/lima.component';
import { SaoPauloComponent } from './sao-paulo/sao-paulo.component';

@NgModule({
  declarations: [
    AppComponent,
    SantiagoComponent,
    BuenosAiresComponent,
    LimaComponent,
    SaoPauloComponent
  ],
  imports: [
    MyMaterialModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
