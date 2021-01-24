import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  private loginUser : string;
  constructor(private cookieService : CookieService) { 
   
  }

  ngOnInit() {
    this.loginUser = this.cookieService.get("coll-login-id");
  }

}
