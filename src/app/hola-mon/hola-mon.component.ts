import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hola-mon',
  templateUrl: './hola-mon.component.html',
  styleUrls: ['./hola-mon.component.css']
})
export class HolaMonComponent implements OnInit {

    title = 'Tarari que te vi';
  constructor() { }

  ngOnInit(): void {
  }

}
