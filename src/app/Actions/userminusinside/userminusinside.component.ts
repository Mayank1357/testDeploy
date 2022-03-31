import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userminusinside',
  templateUrl: './userminusinside.component.html',
  styleUrls: ['./userminusinside.component.css']
})
export class UserminusinsideComponent implements OnInit {
  id:any=12;
  status:any;
  errorMessage: any;
  constructor(private dataService: DataService, private toastr: ToastrService,private http: HttpClient) { }
  
  ngOnInit(): void {
  }
  setid(e){
    this.id = e.target.value;
    console.log(this.id);
    
  }
  del(){
    console.log("aa");
    
    this.http.delete('http://127.0.0.1:8000/api/deleteUser/' + this.id)
        .subscribe({
            next: data => {
                this.status = 'Delete successful';
                this.toastr.success(JSON.stringify('Succesfully Deleted'), JSON.stringify('200'), {
                  timeOut: 2000,
                  progressBar: true
                });
            },
            error: error => {
                this.errorMessage = error.message;
                console.error('There was an error!', error);
                this.toastr.error(JSON.stringify('No user with this ID Found'), JSON.stringify('404'), {
                  timeOut: 2000,
                  progressBar: true
                });
            }
        });
  }

}
