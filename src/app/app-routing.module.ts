import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

import { LoginComponent } from './Components/login/login.component';
import { EditarPersonaComponent } from './Components/persona/editar-persona/editar-persona.component';
import { NuevaPersonaComponent } from './Components/persona/nueva-persona/nueva-persona.component';
import { PersonaComponent } from './Components/persona/persona.component';
import { EditarproductoComponent } from './Components/producto/editarproducto/editarproducto.component';
import { NuevoProductoComponent } from './Components/producto/nuevo-producto/nuevo-producto.component';
import { ProductoComponent } from './Components/producto/producto.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path:'nuevapersona', component: NuevaPersonaComponent},
  { path: 'editarpersona/:id', component: EditarPersonaComponent},
  { path: 'login', component: LoginComponent },
  { path: 'persona', component: PersonaComponent,
  data:{
    role:'ROLE_ADMIN'
  }
  },
  { path: 'home', component: HomeComponent },
  { path: 'editarproducto/:id', component: EditarproductoComponent },
  { path: 'nuevoproducto', component: NuevoProductoComponent },
 
  { path: 'productos', component:ProductoComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
