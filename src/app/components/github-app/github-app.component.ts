import { Component, OnInit } from '@angular/core';
import { GithubService } from './../../services/github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.scss'],
})
export class GithubAppComponent implements OnInit {
  public searchText!: string;
  public profileLoader: boolean = false;
  public validUser: boolean = true;
  public repoLoader: boolean = false;
  public userProfileData: any = {};
  public userProfileRepo: any[] = [];
  public errorMessage: string | undefined;
  public pageNumber: number = 0;

  constructor(private githubService: GithubService) {}

  ngOnInit(): void {}

  pageChangeCallback(pageNumber: any) {
    this.pageNumber = pageNumber;
    this.fetchRepos();
  }

  fetchRepos() {
    this.repoLoader = true;
    this.githubService
      .getUserRepositories(this.searchText, this.pageNumber)
      .subscribe(
        (data) => {
          this.userProfileRepo = data;
          this.repoLoader = false;
        },
        (err: any) => {
          this.userProfileRepo = [];
        }
      );
  }

  fetchUserProfile() {
    this.profileLoader = true;
    this.githubService.getUserProfile(this.searchText).subscribe(
      (data) => {
        this.userProfileData = data;
        this.profileLoader = false;
        this.validUser = true;
      },
      (err: any) => {
        this.userProfileData = {};
        this.validUser = false;
      }
    );
  }

  searchUser() {
    this.pageNumber = 1;
    // get user profile data
    this.fetchUserProfile();
    // get user profile repositories
    this.fetchRepos();
  }
}
