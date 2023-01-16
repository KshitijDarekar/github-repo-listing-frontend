import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  imagePath:string;

  constructor() {

   this.imagePath = "/assets/error.png"; 
   }


  ngOnInit(): void {
  }

}
