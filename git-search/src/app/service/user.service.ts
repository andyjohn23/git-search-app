import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName: string;
  private git_Id = environment.git_Id;
  private secretCode =environment.secretCode;

  constructor(private Http:HttpClient) {
      this.userName = "andyjohn23";
   }

   getUser(): Observable<any>{
     return this.Http.get<any>("https://api.github.com/users/" + this.userName + '?client_id=' + this.git_Id + '&client_secret=' 
     + this.secretCode);
   }

   getUserRepo(): Observable<any>{
    return this.Http.get<any>("https://api.github.com/users/" + this.userName + '/repos?client_id=' + this.git_Id + '&client_secret=' 
    + this.secretCode);
  }

  userProfileUpdate(userName){
    this.userName = userName;
  }
}
