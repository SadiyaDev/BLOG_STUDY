import { HttpModule } from '@angular/http';
import { Injectable } from '@angular/core';
import {Http ,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { OnInit } from '@angular/core';

@Injectable()
export class UserService implements OnInit {
private _url :string = "assets/userdata.json"
  constructor(private _http:Http) { 
    
  }
  ngOnInit(){
    console.log("userservice ngOninit");
   
  }
  getUsers(){
    console.log("userservice getusers");
    //mapping the json data into the servive
    return this._http.get(this._url)
     .map((response:Response) => response.json());
  }

}
