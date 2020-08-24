import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Requerimento } from 'src/app/models/requerimento.model';
import { Local } from 'src/app/models/local.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  @Input() show:boolean;
  @Input() requerimento:Requerimento;
  @Output() viewEvent:EventEmitter<any> = new EventEmitter<any>();
  locais:Local[] = [];
  local:Local = {
    setor: "",
    unidade: ""
  };

  constructor() { }

  ngOnInit() {
    for(let i=1; i<4; i++){
      let exemplo:Local = {
        setor: "Setor "+i,
        unidade: "Local "+i
      };
      this.locais.push(exemplo);
    }
  }

  sendResponse() {
    let response:any = {
      modalView: false
    }
    this.viewEvent.emit(response);
  }

}
