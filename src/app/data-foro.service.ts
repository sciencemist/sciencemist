import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //permite hacer llamadas http desde angular
import { Post } from './Post';

@Injectable({
  providedIn: 'root'
})
export class DataForoService {

  constructor(private httpClient: HttpClient) { //Usare modullo http SOLO dentro de esta clase (por eso private)
    console.log("DENTRO DEL SERVICIO!!!!!");
  }

  getData() {
    //queremos retornar un arreglo de publicaciones
    return this.httpClient.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  }
}
