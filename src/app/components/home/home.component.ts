import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Requerimento } from 'src/app/models/requerimento.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:User = {
    name: "Luidi Matheus",
    role: "Developer"
  };
  requerimento:Requerimento = {
    descricao: "",
    input: ""
  };
  requerimentos:Requerimento[] = [];

  constructor() { }

  ngOnInit() {
    for(let i=1; i<4; i++){
      let exemplo:Requerimento = {
        descricao: "Exemplo "+i,
        input: "Teste "+i
      };
      this.requerimentos.push(exemplo);
    }
  }

  add(){
    let exemplo:Requerimento = new Requerimento(this.requerimento.descricao, this.requerimento.input);
    this.requerimentos.unshift(exemplo);
    this.requerimento.descricao = "";
    this.requerimento.input = "";
  }
}
