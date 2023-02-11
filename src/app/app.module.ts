import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
import { BlogComponent } from './blog/blog.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AddBlogComponent,
    BlogDetailComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
