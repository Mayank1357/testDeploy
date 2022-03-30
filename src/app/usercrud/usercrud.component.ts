import { Component, OnInit } from '@angular/core';

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

  constructor() { }
  
  ngOnInit(): void {
  }
  faUserPlus = faUserPlus;
  faUserSlash = faUserSlash;
  faUserEdit = faUserEdit;
}
