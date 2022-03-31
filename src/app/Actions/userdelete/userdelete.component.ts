import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
import { UserminusinsideComponent } from '../userminusinside/userminusinside.component';


@Component({
  selector: 'app-userdelete',
  templateUrl: './userdelete.component.html',
  styleUrls: ['./userdelete.component.css']
})
export class UserdeleteComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  openDialog(){
    this.dialog.open(UserminusinsideComponent);
  }
  ngOnInit(): void {
  }
  faUserMinus =faUserMinus

}
