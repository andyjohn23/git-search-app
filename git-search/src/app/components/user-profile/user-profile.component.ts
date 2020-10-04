import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile :any[] = [];

  constructor(private userService:UserService) {
    this.userService.getProfile().subscribe(profile => {
      console.log(profile);
      this.profile = profile;
    });
   }

  ngOnInit(): void {
  }

}
