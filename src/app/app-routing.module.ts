import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersPanelComponent } from './users-panel/users-panel.component';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorFormComponent } from './author-form/author-form.component';
import { BookFormComponent } from './book-form/book-form.component';
import { BorrowedBooksComponent } from './borrowed-books/borrowed-books.component';
import { AdminGuardService } from './services/admin-guard.service';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  { path: 'user-form', component: UserFormComponent, canActivate: [AdminGuardService]}, //ADMIN
  { path: 'users', component: UsersPanelComponent, canActivate: [AdminGuardService]}, //ADMIN
  { path: 'authors', component: AuthorsComponent, canActivate: [AdminGuardService]}, // ADMIN
  { path: 'author-form', component: AuthorFormComponent, canActivate: [AdminGuardService]}, // ADMIN
  { path: 'books', component: BooksComponent, canActivate: [AuthGuardService]}, // USER
  { path: 'book-form', component: BookFormComponent, canActivate: [AdminGuardService]}, // ADMIN
  { path: 'book-form/:id', component: BookFormComponent, canActivate: [AdminGuardService]}, // ADMIN
  { path: 'my-books/:id', component: BorrowedBooksComponent, canActivate: [AuthGuardService]}, // USER

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
