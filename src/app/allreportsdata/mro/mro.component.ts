import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
export interface PeriodicElement {
  
  count: number;
  
  monthname: string;
}



@Component({
  selector: 'app-mro',
  templateUrl: './mro.component.html',
  styleUrls: ['./mro.component.css']
})

export class MroComponent implements OnInit {
  users:PeriodicElement[];
  dataSource: any;
  constructor(private http: HttpClient) { 
    this.http.get<any>('http://127.0.0.1:8000/api/mro').subscribe(data => {
      this.dataSource = data;
    }) 
  }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['monthname','count'];
  // dataSource = this.users;
}
