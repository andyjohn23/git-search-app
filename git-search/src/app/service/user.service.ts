import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName: string;
  private gitApi=environment.githubApi;

  constructor(private Http:HttpClient) {
      console.log('service is ready');
      this.userName = "andyjohn23";
   }

   getUser(): Observable<any>{
     return this.Http.get<any>("https://api.github.com/users/" + this.userName + "?api_key="
      + this.gitApi);
   }

   getUserRepo(): Observable<any>{
    return this.Http.get<any>("https://api.github.com/users/" + this.userName + "/repos?api_key="
     + this.gitApi);

   }
}
