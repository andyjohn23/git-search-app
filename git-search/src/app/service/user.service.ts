import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName: string;

  constructor(private Http:HttpClient) {
      this.userName = "andyjohn23";
   }

   getUser(){
     return this.Http.get<any>("https://api.github.com/users/" + this.userName  
    );
   }

   getUserRepo(){
    return this.Http.get<any>("https://api.github.com/users/" + this.userName + '/repos?access_token='+environment.git_Id 
  );
  }

  userProfileUpdate(userName){
    this.userName = userName;
  }
}
