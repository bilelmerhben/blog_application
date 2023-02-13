import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Blog } from '../Shared/Models/BlogClass';
import { AddBlogServiceService } from '../Shared/service/add-blog-service.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
})
export class AddBlogComponent implements OnInit {
  blog!: FormGroup;

  blogs!: Blog[];
  constructor(
    private _formBuilder: FormBuilder,
    private addBlogServiceService: AddBlogServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.blog = this._formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      content: ['', Validators.required],
      information: ['', Validators.required],
    });
  }
  addBlog() {
    this.addBlogServiceService.currentApprovalStageMessage.subscribe(
      (val: Blog[]) => {
        if (val) {
          this.blogs = val;
          this.blogs.push(
            new Blog(
              Math.floor(Math.random() * 100),
              this.blog.value.title,
              this.blog.value.author,
              this.blog.value.content,
              0,
              0,
              this.blog.value.information
            )
          );
        }
      }
    );
    this.router.navigateByUrl('/');
  }
}
