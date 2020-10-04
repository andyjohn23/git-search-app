import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private profileName: string;
  private clientId: 'f44e1ba53d6a4acdf48d';
  private clientSecret:'fbb4ede57e725110a45dd7ff316663891ccfbd3d';

  constructor(private Http:HttpClient) {
      console.log('service is ready');
      this.profileName = "andyjohn23";
   }

   getProfile(): Observable<any>{
     return this.Http.get<any>("https://api.github.com/users/" + this.profileName + "?client_id=" + 
     this.clientId + "client_secret" + this.clientSecret);
   }
}
