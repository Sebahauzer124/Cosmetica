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
import { EditarPersonaComponent } from './Components/persona/editar-persona/editar-persona.component';
import { LoginComponent } from './Components/login/login.component';
import { interceptorProvider } from './Service/interceptor-service.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    ProductoComponent,
    NuevaPersonaComponent,
    EditarPersonaComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
   
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
