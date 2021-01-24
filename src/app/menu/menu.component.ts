import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MenuService } from './menu.service';
import { Router } from '@angular/router';
import { Users } from './Users';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private loggedIn: boolean;
  private users: Users[];
  private selectedMenu = [];
  private loginUser: Users;
  private selectedUser: Users;
  private loggedInUserName ='';
  menu = [
   
    { 'name': 'Add Collateral', 'link': 'add-coll', 'menu-type': 'Lender', 'subMenuPresent':false },
    { 'name': 'Transaction Details', 'link': 'transactions', 'menu-type': 'Lender' ,'subMenuPresent':false},
   
    { 'name': 'Enterprise', 'link': 'default', 'menu-type': 'None' ,'subMenuPresent':false},
    { 'name': 'Support', 'link': 'default', 'menu-type': 'None' ,'subMenuPresent':false},
    { 'name': 'Pricing', 'link': 'default', 'menu-type': 'None' ,'subMenuPresent':false}
  ];


  constructor(private router: Router, private cookieService: CookieService, private menuService: MenuService) {
    this.loggedInUserName=this.cookieService.get("coll-login-id");
    this.menuService.getAllNodeInfo().toPromise().then(data => {
      this.users = data;
    });
    this.getMenu();

  }

  ngOnInit() {
  }

  isLoggedCheckFromCookie() {
    return this.cookieService.get("coll-login-id");
  }
  public getMenu() {
    console.log("calling getMenu ----------------")

    const menu: any[] = [];

    while (this.selectedMenu.length > 0) {
      this.selectedMenu.pop();
    }

    var rolesForUser = this.cookieService.get('coll-login-types').split(",");
    const filteredResults: any[] = [];
    const userName = this.cookieService.get("coll-login-id")
    rolesForUser.forEach(it => {
      this.menu.forEach(result => {
        if (result["menu-type"] == it || !userName && result["menu-type"] == 'None') {
          this.selectedMenu.push(result);
        }
      })
    });
    
    if(!userName){
      this.selectedMenu.push();
    }
    console.log("completed getMenu ----------------")
  }

  

  public onOptionsSelected(event) {
    this.selectedUser = this.users.filter(x => x.id == event)[0];
    console.log("dfafa " + JSON.stringify(this.selectedUser)); //option value will be sent as event
  }
  public logout() {
    this.cookieService.delete("coll-login-id")
    this.cookieService.delete("coll-login-types")
    this.router.navigate(['']);
    this.loggedIn = false;
    this.selectedUser = null;
    this.loginUser = null;
    this.loggedInUserName ='';
    this.getMenu();

  }
  public login() {
    if (!this.loggedIn && this.selectedUser) {
      this.loginUser = this.selectedUser;
      this.loggedInUserName = this.loginUser.shortName;
      this.cookieService.set("coll-login-id", this.loginUser.shortName)
      this.cookieService.set("coll-login-types", this.loginUser.roles.join())
      this.loggedIn = true;
      this.router.navigate(['/landing-page']);
      this.getMenu();


    }
  }

}
