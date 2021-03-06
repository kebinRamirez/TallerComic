import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  @Input() sujetos:any= [];
  @Input() index :number;

  @Output() sujetoSelected: EventEmitter<number>;
  constructor(  ) { 
    this.sujetoSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }
  verSujeto(){
    this.sujetoSelected.emit(this.index);
  }

}
