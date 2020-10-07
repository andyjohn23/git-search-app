import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = {
    name: '', html_url: '', login: '', avatar_url: '', public_repos: '', followers: '', following: '',
    created_at: ''
  };
  repositories: any[];
  userName: string;

  constructor(private userService: UserService) {
    this.userService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });

    this.userService.getUserRepo().subscribe(repositories => {
      console.log(repositories);
      this.repositories = repositories;
    });
  }

  search() {
    this.userService.userProfileUpdate(this.userName);
    this.userService.getUser().subscribe(user => {
      console.log(user);
      this.user = user;
    });
    this.userService.getUserRepo().subscribe(repositories => {
      console.log(repositories);
      this.repositories = repositories;
    });

  }

  ngOnInit(): void {
  }

}
