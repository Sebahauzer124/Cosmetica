import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Models/Persona';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';

@Component({
  selector: 'app-nuevo-producto',
  templateUrl: './nuevo-producto.component.html',
  styleUrls: ['./nuevo-producto.component.css']
})
export class NuevoProductoComponent implements OnInit {

  id!:number;
    nombre!:String;
    descripcion!:String;
    imagen!:String;
    precio!:String;
    cantidad!:String;
    persona!:Persona;

  constructor(  private service :ProductoService,
    private router: Router) { }

  ngOnInit(): void {

  }

  onCreate(): void{
    const producto = new Producto(this.nombre,this.descripcion,this.imagen,this.precio, this.cantidad,this.persona);
    this.service.save(producto).subscribe(
      data =>{
        alert("Cliente añadida correctamente");
        this.router.navigate(['home']);
      }, err =>{
        alert("falló");
        this.router.navigate(['home']);
      }
    )
  }


}
