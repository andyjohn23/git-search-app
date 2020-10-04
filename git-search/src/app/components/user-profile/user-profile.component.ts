import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: any[] = [];

  constructor(private userService:UserService) {
    this.userService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
   }

  ngOnInit(): void {
  }

}
