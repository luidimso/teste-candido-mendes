import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Requerimento } from 'src/app/models/requerimento.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() show:boolean;
  @Input() requerimento:Requerimento;
  @Output() deleteEvent:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  sendResponse(deleteRequerimento:boolean) {
    let response:any = {
      modalDelete: false,
      deleteRequerimento: deleteRequerimento
    }
    this.deleteEvent.emit(response);
  }
}
