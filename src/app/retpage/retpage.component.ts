import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-retpage',
  templateUrl: './retpage.component.html',
  styleUrls: ['./retpage.component.css']
})
export class RetpageComponent implements OnInit {

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

}
