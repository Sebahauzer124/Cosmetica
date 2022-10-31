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
  nombre!:String;
apellido!:String;
dni!:String;
direccion!:String;
nacionalidad!:String;
provincia!:String;
localidad!:String;

  constructor(  private service :PersonaService,
    private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void{
    const persona = new Persona(this.nombre,this.apellido,this.dni,this.direccion, this.nacionalidad,this.provincia,this.localidad);
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
