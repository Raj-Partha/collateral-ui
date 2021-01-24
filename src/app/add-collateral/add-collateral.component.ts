import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { Users } from '../menu/Users';
import { CollateralService } from '../collateral.service';
import { Collateral } from '../Collateral';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-add-collateral',
  templateUrl: './add-collateral.component.html',
  styleUrls: ['./add-collateral.component.css']
})
export class AddCollateralComponent implements OnInit {
  private collateral : Collateral;
  private borrowers: String[]=[];
  private selectedValue : String;
  constructor(private menuService: MenuService, private collateralService : CollateralService, private cookieService: CookieService) {
    this.collateral = new Collateral();
    this.menuService.getAllBorrowers().toPromise().then(data => {
      data.forEach(it=>{
        console.log(it.shortName);
        this.borrowers.push(it.shortName);
      })
      console.log(this.borrowers + " dfaf");
    });

  }

  ngOnInit() {
  }
  addCollateral() {

    this.collateral.borrower = this.selectedValue;

    this.collateral.custodian=this.cookieService.get("coll-login-id");
    console.log("Adding collateral " +JSON.stringify(this.collateral))
    this.collateralService.addCollateral(this.collateral).subscribe(data => {
      this.collateral = data;
      alert("Added successfully. Transaction Id " + this.collateral.transactionID);
    });
  }
}
