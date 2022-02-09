import { Component, OnInit } from '@angular/core';
import {faPlaystation} from "@fortawesome/free-brands-svg-icons";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  icoPSN = faPlaystation;
  public sort: string | undefined;
  constructor() { }

  ngOnInit(): void {

  }

}
