import { Component, OnInit } from '@angular/core';
import { Blog } from '../Shared/Models/BlogClass';
import { AddBlogServiceService } from '../Shared/service/add-blog-service.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  countUp: number = 0;
  countDown: number = 0;
  messae!: Blog;
  blogs!: Blog[];
  constructor(private addBlogServiceService: AddBlogServiceService) {
    //Blogs Initialization
    this.blogs = [
      new Blog(
        1,
        'IT News',
        'Merhben Bilel',
        'The greatest advantage of Angular rests in the fact that, unlike React, it supports dependency injection. Therefore, Angular allows having different lifecycles for different stores',
        0,
        0,
        'Angular is a Javascript framework built using Typescript, while Reactjs is a Javascript library and built using JSX. Angular is mostly used to build complex enterprise-grade apps like single-page apps and progressive web apps, while React is used to build UI components in any app with frequently variable data.'
      ),
      new Blog(
        2,
        'the freedom revolution, awakened ancestral roots of a new generation, and a population moving as one',
        ' Bahareh Sahebi',
        'In many ways, Gen Z Iranians are a combination of the very best and the most important learning experiences of their previous generations. ',
        0,
        0,
        'They are marked by their perseverance and their refusal to use old modes of protective denial in order to navigate the impact of the paradoxes of life in, as their parents and grandparents did before them. They will continue to form a collective self through their agentic, adversarial approach to effecting change. For all these reasons, “The Women of Iran” are the right choice for Time Magazine’s 2022 Heroes of The Year.'
      ),
    ];
  }

  ngOnInit(): void {
    this.addBlogServiceService.updateApprovalMessage(this.blogs);
  }
  countUP() {
    this.countUp++;
  }
  countDOWN() {
    this.countDown++;
  }
}
