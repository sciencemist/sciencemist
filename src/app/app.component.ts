import { Component } from '@angular/core';
import { DataForoService } from './data-foro.service';
import { Post } from './Post';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sciencemistapp';
  users = ['Marta','Martina','Quim'];

  name : string = 'Pedro';
  age : number = 29;
  posts = [];
  

  constructor(private dataService: DataForoService){
    this.dataService.getData().subscribe(data => {
      console.log(data);
      this.posts = data;
    })
  }
  
  agregarUser(newUser){
    this.users.push(newUser.value);
    newUser.value="";
    return false;
  }

}
