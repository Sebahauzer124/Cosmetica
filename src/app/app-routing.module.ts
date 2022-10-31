import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPersonaComponent } from './Components/persona/editar-persona/editar-persona.component';
import { NuevaPersonaComponent } from './Components/persona/nueva-persona/nueva-persona.component';
import { PersonaComponent } from './Components/persona/persona.component';

const routes: Routes = [
  { path: '', component: PersonaComponent },
  { path:'nuevapersona', component: NuevaPersonaComponent},
  { path: 'editarpersona/:id', component: EditarPersonaComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
