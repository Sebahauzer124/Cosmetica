import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductoService } from 'src/app/Service/producto.service';
import { TokenService } from 'src/app/Service/token.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {




  isLogged =false;
  constructor(private service: ProductoService,
    private activatedRouter : ActivatedRoute,
    private router: Router,
    private tokenService: TokenService) { }

   
    ngOnInit(): void {
      if(this.tokenService.getToken()){
        this.isLogged=true;
      }else{
        this.isLogged = false;
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






