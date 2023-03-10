import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {
  @Input() config: any;
  @Input() count: any;
  // @Input() appearance: ""| "circle" | "line" = "" ;
  @Input() appearance: any ;

  constructor() { }

  ngOnInit(): void {
  }

}
