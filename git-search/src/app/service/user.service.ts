import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName: string;

  constructor(private Http:HttpClient) {
      this.userName = "andyjohn23";
   }

   getUser(): Observable<any>{
     return this.Http.get("https://api.github.com/users/" + this.userName + '?access_token='+environment.git_Id);
   }

   getUserRepo(): Observable<any>{
    return this.Http.get("https://api.github.com/users/" + this.userName + '/repos?access_token='+environment.git_Id);
  }

  userProfileUpdate(userName){
    this.userName = userName;
  }
}
