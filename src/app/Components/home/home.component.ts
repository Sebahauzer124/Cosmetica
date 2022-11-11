import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
import { TokenService } from 'src/app/Service/token-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  producto: Producto[] = [];

  isLogged =false;
  constructor(private service: ProductoService,
    private activatedRouter : ActivatedRoute,
    private router: Router,private tokenService : TokenService) { }

   
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged=true;
      this.cargarProductos();
    }
    else{
      this.isLogged=false;
    }
 
     
    }
 
  

    cargarProductos(): void {
      this.service.getProductos().subscribe(
        data =>{
          this.producto = data;
        }
      )
    }

 



  delete(id: number){
    if( id != undefined){
      this.service.delete(id).subscribe(
        data => {
          this.cargarProductos();
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
