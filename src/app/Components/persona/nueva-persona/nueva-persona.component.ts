import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/Service/persona.service';
@Component({
  selector: 'app-nueva-persona',
  templateUrl: './nueva-persona.component.html',
  styleUrls: ['./nueva-persona.component.css']
})
export class NuevaPersonaComponent implements OnInit {

  persona!: Persona ;
  constructor(  private service :PersonaService,
    private activatedRouter : ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.detail(id).subscribe(
      data =>{
        this.persona = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )

  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.service.update(id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar el cliente");
        this.router.navigate(['']);
      }
    )
  }
  onCreate(): void{
    const persona = new Persona(this.persona.nombre, this.persona.apellido);
    this.service.save(persona).subscribe(
      data =>{
        alert("Cliente añadida correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("falló");
        this.router.navigate(['']);
      }
    )
  }

}
