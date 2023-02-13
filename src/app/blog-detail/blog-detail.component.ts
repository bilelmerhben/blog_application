import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Blog } from '../Shared/Models/BlogClass';
import { AddBlogServiceService } from '../Shared/service/add-blog-service.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css'],
})
export class BlogDetailComponent implements OnInit {
  blog!: Blog;
  blogs!: Blog[];
  id!: number;
  constructor(
    private addBlogServiceService: AddBlogServiceService,
    private activatedRoute: ActivatedRoute
  ) {
    //get the id of the blog
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = parseInt(params.get('id') || '');
    });
  }

  ngOnInit(): void {
    //filter the blog which match the id
    this.addBlogServiceService.currentApprovalStageMessage.subscribe(
      (val: Blog[]) => {
        if (val) {
          val.filter((e) => {
            e.id == this.id;
            this.blog = e;
          });
        }
      }
    );
  }
}
