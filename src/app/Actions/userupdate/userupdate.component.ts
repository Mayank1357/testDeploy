import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { UserupdateinsideComponent } from '../userupdateinside/userupdateinside.component';
@Component({
  selector: 'app-userupdate',
  templateUrl: './userupdate.component.html',
  styleUrls: ['./userupdate.component.css']
})
export class UserupdateComponent implements OnInit {

  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(){
    this.dialog.open(UserupdateinsideComponent);
  }
  faUserEdit = faUserEdit;

}
