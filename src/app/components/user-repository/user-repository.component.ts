import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-repository',
  templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.scss']
})
export class UserRepositoryComponent implements OnInit {

  p:number | undefined;
  @Input() list: any[] | undefined;
  @Input() totalRepos:  number | undefined;
  @Output() callback = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(e:any) {
    this.p = e;
    this.callback.emit(e);
  }

}
