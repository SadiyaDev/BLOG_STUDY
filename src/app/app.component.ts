import { Component, OnInit } from '@angular/core';
import { UserService} from './user.service';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
import { LoginComponent } from './twoservice/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  peoples = [];

  constructor(private _pService:UserService,private _Service:LoginComponent){
    _Service.ngOnInit();
  }
  
  ngOnInit(){
    this._pService.getUsers().subscribe(resPeopleData =>this.peoples= resPeopleData);
    
  }

  
}
