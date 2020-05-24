import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-villian-card',
  templateUrl: './villian-card.component.html',
  styleUrls: ['./villian-card.component.css']
})
export class VillianCardComponent implements OnInit {
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
