import { ReportService } from './../report-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'reportmaster',
  templateUrl: './reportmaster.component.html',
  styleUrls: ['./reportmaster.component.css']
})
export class ReportmasterComponent implements OnInit {

  reportData:any;

  constructor(private reportservice:ReportService) { }

  ngOnInit() {
    this.getReportData();
  }

  getReportData(){
    this.reportservice.getReportData().subscribe(data=>{
      this.reportData = data;
    })
  }

}
