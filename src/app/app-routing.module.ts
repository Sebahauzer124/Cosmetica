import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { EditarPersonaComponent } from './Components/persona/editar-persona/editar-persona.component';
import { NuevaPersonaComponent } from './Components/persona/nueva-persona/nueva-persona.component';
import { PersonaComponent } from './Components/persona/persona.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path:'nuevapersona', component: NuevaPersonaComponent},
  { path: 'editarpersona/:id', component: EditarPersonaComponent},
  { path: 'persona', component: PersonaComponent },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
