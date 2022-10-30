import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevaPersonaComponent } from './Components/persona/nueva-persona/nueva-persona.component';
import { PersonaComponent } from './Components/persona/persona.component';

const routes: Routes = [
  { path: '', component: PersonaComponent },
  { path: 'nuevaexp', component: NuevaPersonaComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
