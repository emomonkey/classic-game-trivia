import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  maxscore: string = "";
  constructor() { }

  ngOnInit(): void {
    this.maxscore = JSON.parse(localStorage.getItem("maxscore") || '{"",0}') ;
  }

}
