import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
import { TokenService } from 'src/app/Service/token.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

 

  producto: Producto[] = [];

  isLogged =false;
  constructor(private service: ProductoService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
    ) { }

   
  ngOnInit(): void {
    this.cargarProductos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
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

}
