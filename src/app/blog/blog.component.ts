import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  countUp: number = 0;
  countDown: number = 0;
  blogs = [
    {
      id: 1,
      title: 'My first blog',
      author: 'Merhben Bilel',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem',
    },
    {
      id: 2,
      title: 'My second blog',
      author: 'Mohamed',
      content: 'content2',
    },
    {
      id: 3,
      title: 'My third blog',
      author: 'Sami',
      content: 'content3',
    },
  ];
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
