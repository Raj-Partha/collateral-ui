import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Collateral } from './Collateral';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { HttpClientModule, HttpParams } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CollateralSummary } from './CollateralSummary';

@Injectable({
  providedIn: 'root'
})
export class CollateralService {

  constructor(private http:HttpClient) { }

  getAllTransactions(){
    return this.http.get<Collateral[]>(environment.marketPlaceRESTEndPoint + 'collateral/transactions');
  }

  addCollateral(request){
    console.log("--------" +JSON.stringify(request) +"  "+environment.marketPlaceRESTEndPoint + 'collateral/add');
     return this.http.put<Collateral>(environment.marketPlaceRESTEndPoint + 'collateral/add', request);
  }

  getSummary(){
    return this.http.get<CollateralSummary[]>(environment.marketPlaceRESTEndPoint + 'collateral/summary');
  }

}
