import { Injectable } from '@angular/core';
import { MenuComponent } from './menu.component';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Users } from './Users';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getAllNodeInfo() {
    return this.http.get<Users[]>(environment.marketPlaceRESTEndPoint +'/login/get-all-users');
  }

  getAllBorrowers(){
    return this.http.get<Users[]>(environment.marketPlaceRESTEndPoint +'/login/get-all-borrowers');
  }
}
