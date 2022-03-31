import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tco',
  templateUrl: './tco.component.html',
  styleUrls: ['./tco.component.css']
})
export class TcoComponent implements OnInit {
  count:any;
  constructor(private http:HttpClient) { 
    this.http.get<any>('http://127.0.0.1:8000/api/retailerCount').subscribe(data => {
      this.count = data;
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
   
  

}
