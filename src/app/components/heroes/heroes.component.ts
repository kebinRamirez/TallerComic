import { Component, OnInit } from '@angular/core';
import { SujetoService,Sujeto } from '../../service/superpowerful.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {
  
  // hero:any[]=[];
  sujeto:Sujeto[]=[];
  constructor( private _sujetoService: SujetoService, private _router: Router) { 
  }

  ngOnInit(): void {
    this.sujeto = this._sujetoService.getSujetos();
    console.log(this.sujeto);
  }
  
  verSujeto(id:number){
    this._router.navigate(['/detalles',id]);
  }


}
