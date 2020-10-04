import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {
   repositories: any[] = [];

  constructor(private Http: UserService) { 
      this.Http.getUserRepo().subscribe(repositories => {
        console.log(repositories);
        this.repositories = repositories;
      })

  }

  ngOnInit(): void {
  }

}
