import { Component, OnInit } from '@angular/core';
import { SujetoService,Sujeto } from '../../service/superpowerful.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-villains',
  templateUrl: './villains.component.html',
  styleUrls: ['./villains.component.css']
})
export class VillainsComponent implements OnInit {

  // heros:any[]=[];
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
