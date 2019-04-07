import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }

  getReportData(){
    let url = "http://5ca8d03ac91d3d0014d7cfb4.mockapi.io/api/reportListing/reports/";
    return this.http.get(url).pipe(map(data=>{
      return data;
    }))
  }

  searchData(searchValue){
    let url = "http://5ca8d03ac91d3d0014d7cfb4.mockapi.io/api/reportListing/reports/?search="+searchValue;
    return this.http.get(url).pipe(map(data=>{
      return data;
    }))
  }

  sortByDate(){
      console.log("date");
      let url = "http://5ca8d03ac91d3d0014d7cfb4.mockapi.io/api/reportListing/reports/?sortBy=publisheddate&order=desc";
      return this.http.get(url).pipe(map(data=>{
        console.log(data);
        return data;
      }))
  }

  sortByCost(){
    let url = "http://5ca8d03ac91d3d0014d7cfb4.mockapi.io/api/reportListing/reports/?sortBy=cost&order=desc";
      return this.http.get(url).pipe(map(data=>{
        return data;
      }))
  }


}
