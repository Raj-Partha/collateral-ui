import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid';
import { CollateralService } from '../collateral.service';
import { CollateralSummary } from '../CollateralSummary';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
private gridSummary = <GridOptions>{
  enableFilter: true,
  enableColResize: true,
  enableSorting: true,
  pagination: true,
  paginationPageSize: 25,
  animateRows: true,
  gridAutoHeight:true,
  enableStatusBar: true,
  enableColumnResize : true,
  defaultColDef: {
    enableValue: true,
  }
};

  private gridOptions = <GridOptions>{
    enableFilter: true,
    enableColResize: true,
    enableSorting: true,
    pagination: true,
    paginationPageSize: 25,
    animateRows: true,
    gridAutoHeight:true,
    enableStatusBar: true,
    enableColumnResize : true,
    defaultColDef: {
      enableValue: true,
    }
  };

  constructor( private collateralService : CollateralService) {
    this.gridOptions.columnDefs  = [
      {
        headerName: "Transaction Id",
        field: "transactionID",
        sort: 'desc'
      },
      {
        headerName: "Borrower",
        field: "borrower"
      },
      {
        headerName: "$ Collateral Value",
        field: "collateralValue"
      },
      {
        headerName: "Transaction Time",
        field: "createDateTime"
      }     
      
    ];
    this.gridSummary.columnDefs = [
      {
        headerName: "Borrower",
        field: "borrower"
      },
      {
        headerName: "$ Total Balance",
        field: "collateralValue"
      },
      {
        headerName: "Last transaction Time",
        field: "lastUpdatedTime"
      }
    ];
   }
  
  ngOnInit() {
    this.collateralService.getAllTransactions()
      .subscribe(data => {
        this.gridOptions.api.setRowData(data);
      });
      this.collateralService.getSummary().subscribe(data=>{
          this.gridSummary.api.setRowData(data);
      }
      );

  }

}
