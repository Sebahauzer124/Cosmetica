import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Models/Producto';



@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  URL='https://artilugioscn.onrender.com/productos/';

  constructor(private http: HttpClient) { }


  public getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.URL+'traer');
    }

    public detail(id: number): Observable<Producto>{
      return this.http.get<Producto>(this.URL + `traer/${id}`);
    } 
  
    public save(producto: Producto): Observable<any>{
      return this.http.post<any>(this.URL + 'crear', producto);
    }
  
    public update(id: number, producto:Producto) :Observable<any>{
      return this.http.put<any>(this.URL + `editar/${id}`, producto);
    }
  
    public delete(id: number): Observable<any>{
      return this.http.delete<any>(this.URL + `borrar/${id}`);
    }
}