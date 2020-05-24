import { Component, OnInit } from '@angular/core';
import { SujetoService } from '../../service/superpowerful.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-hero-search',
  templateUrl: './sujeto-search.component.html',
  styleUrls: ['./sujeto-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  
  sujeto: any[] = [];
  busqueda: string;
  constructor( private _sujetoService:SujetoService,
               private _activateRoute:ActivatedRoute,private _router: Router) { }

  ngOnInit(): void {
    this._activateRoute.params.subscribe( params=>{
      this.busqueda = params['busqueda'];
      this.sujeto = this._sujetoService.buscarSujeto(params['busqueda']);
    })
  }
}
