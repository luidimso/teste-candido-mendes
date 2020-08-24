import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Requerimento } from 'src/app/models/requerimento.model';
import { ToastComponent } from '@syncfusion/ej2-angular-notifications';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {

  @Input() show:boolean;
  @Input() requerimento:Requerimento;
  @Output() deleteEvent:EventEmitter<any> = new EventEmitter<any>();
  @ViewChild('toast') toats:ToastComponent;

  constructor() { }

  ngOnInit(): void {
  }

  sendResponse(deleteRequerimento:boolean) {
    let response:any = {
      modalDelete: false,
      deleteRequerimento: deleteRequerimento
    }
    this.deleteEvent.emit(response);
    if(deleteRequerimento){
      this.toats.show();
    }
  }
}
