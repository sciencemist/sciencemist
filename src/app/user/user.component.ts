import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() nameUser;
  
  sayHello(){
    alert('Hola, Hola pajarito sin cola:  ' + this.nameUser);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
