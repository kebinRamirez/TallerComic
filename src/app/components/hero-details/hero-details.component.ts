import { Component, OnInit } from '@angular/core';
import { SujetoService ,Sujeto  } from '../../service/superpowerful.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styles: [
  ]
})
export class HeroDetailsComponent implements OnInit {

   sujeto:any = [];
   imgCasa:string;

  constructor(private _activeRoute: ActivatedRoute, private _sujetoService:SujetoService) {
   
    this._activeRoute.params.subscribe( params=>{
      //console.log(params['id']);
      this.sujeto = this._sujetoService.getSujeto(params['id']);
    })
   }
  ngOnInit(): void {
  }
  


}
