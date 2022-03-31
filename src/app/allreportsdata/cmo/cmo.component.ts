import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

import { HttpClient } from '@angular/common/http';

export interface UserData {
  party_code: number;
  first_name: string;
  last_name: string;
  email: string;
  dob: any;
  contact: string;
  address: string;
  refpoints: number;
  created_at: any;
  updated_at: any;
}
@Component({
  selector: 'app-cmo',
  templateUrl: './cmo.component.html',
  styleUrls: ['./cmo.component.css']
})
export class CmoComponent implements AfterViewInit {

  users:UserData[];
  displayedColumns: string[] = ['party_code', 'first_name', 'last_name', 'email', 'dob','contact',  'refpoints'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {
    this.http.get<any>('http://127.0.0.1:8000/api/cmo').subscribe(data => {
       
        
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        
    })
    
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
