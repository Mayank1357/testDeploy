import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/confirmed.validator';
import { DataService } from 'src/app/service/data.service';
import { ToastrService } from 'ngx-toastr'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-userupdateinside',
  templateUrl: './userupdateinside.component.html',
  styleUrls: ['./userupdateinside.component.css']
})
export class UserupdateinsideComponent implements OnInit {
  id:any;
  admin ="admin";
  form: FormGroup;
  submitted = false;
  data: any;
  constructor(private formBuilder: FormBuilder, private dataService: DataService, private toastr: ToastrService,private http: HttpClient) { }
  setid(e){
    this.id = e.target.value;
    console.log(this.id);
    
  }
  createForm() {
    this.form = this.formBuilder.group({
      name: [null, Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      
      user_type: [null, Validators.required]
    }, {
      
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }


    this.http.put<any>('http://127.0.0.1:8000/api/updateUser/' + this.id, this.form.value)
        .subscribe({
            next: data => {
              this.toastr.success(JSON.stringify('Successfully Updated Details'), JSON.stringify(200), {
                timeOut: 4000,
                progressBar: true
              });
            },
            error: error => {
              this.toastr.error(JSON.stringify('ID is Invalid'), JSON.stringify(404), {
                timeOut: 4000,
                progressBar: true
              });
            }

            
        });


    // this.dataService.updateUser(this.form.value,this.id).subscribe(res => {
    //   this.data = res;
    //   // console.log(res);
    //   if (this.data.status === 200) {

    //     this.toastr.success(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
    //       timeOut: 2000,
    //       progressBar: true
    //     });
    //   } else {
    //     this.toastr.error(JSON.stringify(this.data.message), JSON.stringify(this.data.code), {
    //       timeOut: 2000,
    //       progressBar: true
    //     });
    //   }
    //   this.submitted = false;
    //   this.form.get('name').reset();
    //   this.form.get('email').reset();
    //   this.form.get('password').reset();
      


    // });
    this.submitted = false;
      this.form.get('name').reset();
      this.form.get('email').reset();
      this.form.get('password').reset();
  }

}
