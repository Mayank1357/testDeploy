import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {

  }
  registerUser(data) {
    return this.http.post(environment.apiUrl + '/api/register/', data);
  }
  updateUser(data,id) {
    return this.http.put(environment.apiUrl + '/api/updateUser/' + id, data);
  }
  login(data) {
    return this.http.post(environment.apiUrl + '/api/login', data);
  }

  getData(){
    return this.http.get(environment.apiUrl + '/api/allretailerDetails');
  }
  deleteUser(id){
    return this.http.delete(environment.apiUrl + '/api/deleteUser/' + id);
  }
}
