import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/Models/Producto';
import { ProductoService } from 'src/app/Service/producto.service';
import { Persona } from 'src/app/Models/Persona';
@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {

  cantidad!:String;
  descripcion!:String;
  imagen!:String;
 nombre!:String;
 precio!:String;
 persona_id!:Persona;
 
   producto = new Producto(this.cantidad,this.descripcion,this.imagen,this.nombre, this.precio,this.persona_id);
   constructor(
     private service: ProductoService,
     private activatedRouter : ActivatedRoute,
     private router: Router
   ) { }
 
   ngOnInit(): void {
     const id = this.activatedRouter.snapshot.params['id'];
     this.service.detail(id).subscribe(
       data =>{
         this.producto = data;
       }, err =>{
          alert("Error al modificar");
          this.router.navigate(['home']);
       }
     )
   }
 
   onUpdate(): void{
   
     const id = this.activatedRouter.snapshot.params['id'];
     this.service.update(id, this.producto).subscribe(
       data => {
         this.router.navigate(['home']);
       }, err => {
         alert("Error al modificar la persona");
         this.router.navigate(['home']);
       }
     )
   }
 
 }

