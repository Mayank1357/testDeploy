import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-usercrud',
  templateUrl: './usercrud.component.html',
  styleUrls: ['./usercrud.component.css']
})
export class UsercrudComponent implements OnInit {

  token:any;
  userData:any;
  email:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    this.userData = jwt_decode(this.token);
    this.email = this.userData.email;
    console.log(this.token);
    console.log(this.userData);
    
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  faUserPlus = faUserPlus;
  faUserSlash = faUserSlash;
  faUserEdit = faUserEdit;
}
