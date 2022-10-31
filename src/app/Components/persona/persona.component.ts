import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/Service/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {



  persona: Persona[] = [];

  constructor(private service: PersonaService,
    private activatedRouter : ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.cargarPersonas();
     
    }
 
  

    cargarPersonas(): void {
      this.service.getPersonas().subscribe(
        data =>{
          this.persona = data;
        }
      )
    }

 



  delete(id: number){
    if( id != undefined){
      this.service.delete(id).subscribe(
        data => {
          this.cargarPersonas();
        }, err => {
          alert("No se pudo eliminar")
          console.log(err);
        }
      )
    
  }

}
}
