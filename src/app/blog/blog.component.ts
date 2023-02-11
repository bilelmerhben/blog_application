import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  countUp: number = 0;
  countDown: number = 0;
  constructor() {}

  ngOnInit(): void {}
  countUP() {
    this.countUp++;
    console.log(this.countUp);
  }
  countDOWN() {
    this.countDown++;

    console.log(this.countDown);
  }
}
