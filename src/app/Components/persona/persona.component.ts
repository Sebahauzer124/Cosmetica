import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona';
import { PersonaService } from 'src/app/Service/persona.service';
import { TokenService } from 'src/app/Service/token-service.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {



  persona: Persona[] = [];

  isLogged =false;
  constructor(private service: PersonaService,
    private activatedRouter : ActivatedRoute,
    private router: Router,private tokenService : TokenService) { }

   
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.cargarPersonas();
    }
    else{
      this.isLogged=false;
    }
 
     
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
onLogOut():void{
  this.tokenService.logOut();
  window.location.reload();
}
login(){
this.router.navigate(['/login'])
}

}
