import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:User = {
    name: "Luidi Matheus",
    role: "Developer"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
