import { ReportService } from './../report-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reportmaster',
  templateUrl: './reportmaster.component.html',
  styleUrls: ['./reportmaster.component.css']
})
export class ReportmasterComponent implements OnInit {

  reportData:any = [];
  searchValue:string;


  constructor(private reportservice:ReportService) { }

  ngOnInit() {
    this.getReportData();
  }

  getReportData(){
    this.reportservice.getReportData().subscribe(data=>{
      this.reportData = data;
    })
  }



  search(event) {
    const inputValue = event.target.value;
    this.reportservice.searchData(inputValue).subscribe(data=>{
          this.reportData = data;
    })
  }

  sortByDate(){
    this.reportservice.sortByDate().subscribe(data=>{
      this.reportData = data;
    })
  }

  sortByPrice(){
    this.reportservice.sortByCost().subscribe(data=>{
      this.reportData = data;
    })
  }

}


