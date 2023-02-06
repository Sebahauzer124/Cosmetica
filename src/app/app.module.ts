import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonaComponent } from './Components/persona/persona.component';
import { NuevaPersonaComponent } from './Components/persona/nueva-persona/nueva-persona.component';
import { EditarPersonaComponent } from './Components/persona/editar-persona/editar-persona.component';
import { HomeComponent } from './Components/home/home.component';
import { EditarproductoComponent } from './Components/producto/editarproducto/editarproducto.component';
import { NuevoProductoComponent } from './Components/producto/nuevo-producto/nuevo-producto.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { interceptorProvider } from './Service/interceptor-service';
import { BannerComponent } from './Components/banner/banner.component';
import { HeaderComponent } from './Components/header/header.component';
import { LogosComponent } from './Components/logos/logos.component';
import { ObjetivosComponent } from './Components/objetivos/objetivos.component';



@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,

    NuevaPersonaComponent,
    EditarPersonaComponent,
    HomeComponent,
    EditarproductoComponent,
    NuevoProductoComponent,
    LoginComponent,
    ProductoComponent,
    BannerComponent,
    HeaderComponent,
    LogosComponent,
    ObjetivosComponent


 
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
   
  ],
  providers: [
    interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
