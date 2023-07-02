import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { BlogsComponent } from './blogs/blogs/blogs.component';
import { PostComponent } from './blogs/post/post.component';
import { AdminBlogComponent } from './admin-blog/admin-blog.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "blog", component: BlogsComponent},
  {path: "blog/my-best-blog", component: PostComponent},
  {path: "admin/blog", component: AdminBlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
