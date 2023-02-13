import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AddBlogComponent } from './add-blog/add-blog.component';

const routes: Routes = [
  { path: '', component: BlogComponent },
  { path: 'blogDetail/:id', component: BlogDetailComponent },
  { path: 'addBlog', component: AddBlogComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
