import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-usercreate',
  templateUrl: './usercreate.component.html',
  styleUrls: ['./usercreate.component.css']
})
export class UsercreateComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  openDialog(){
    this.dialog.open(DialogExampleComponent);
  }
  ngOnInit(): void {
  }
  faUserPlus =faUserPlus
}
