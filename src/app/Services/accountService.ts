import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl: string = "http://localhost:38225/users/";

  constructor(private http: HttpClient) { }

  login(model: any){
    this.http.post(this.baseUrl + "login", model).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

  register(model: any){
    this.http.post(this.baseUrl + "register", model).subscribe(response => {
      console.log(response)
    }, error => {
      console.log(error)
    })
  }

}
