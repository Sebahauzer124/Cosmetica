import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './Components/persona/persona.component';
import { NuevaPersonaComponent } from './Components/persona/nueva-persona/nueva-persona.component';
import { EditarPersonaComponent } from './Components/persona/editar-persona/editar-persona.component';
import { LoginComponent } from './Components/login/login.component';
import { interceptorProvider } from './Service/interceptor-service.service';
import { HomeComponent } from './Components/home/home.component';
import { EditarproductoComponent } from './Components/producto/editarproducto/editarproducto.component';
import { NuevoProductoComponent } from './Components/producto/nuevo-producto/nuevo-producto.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,

    NuevaPersonaComponent,
    EditarPersonaComponent,
    LoginComponent,
    HomeComponent,
    EditarproductoComponent,
    NuevoProductoComponent,
 
  
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
