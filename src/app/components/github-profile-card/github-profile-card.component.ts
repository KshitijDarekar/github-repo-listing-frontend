import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-github-profile-card',
  templateUrl: './github-profile-card.component.html',
  styleUrls: ['./github-profile-card.component.scss']
})
export class GithubProfileCardComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
