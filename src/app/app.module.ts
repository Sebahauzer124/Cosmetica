import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './Components/persona/persona.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { NuevaPersonaComponent } from './Components/persona/nueva-persona/nueva-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ProductoComponent,
    NuevaPersonaComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
