import { Injectable, OnInit } from '@angular/core';
import { AppComponent } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService implements OnInit{
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  constructor(private appComp : AppComponent) { 
  }

  updateUserLogin(userName : String){
    this.appComp.updateLoginId(userName);
  }

}
