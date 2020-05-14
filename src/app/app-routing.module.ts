import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UsersPanelComponent } from './users-panel/users-panel.component';
import { BooksComponent } from './books/books.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path:'login', component: LoginComponent},
  { path:'register', component: RegisterComponent},
  // TODO create admin guard service
  { path: 'user-form', component: UserFormComponent, canActivate: [AuthGuardService]},
  { path: 'users', component: UsersPanelComponent, canActivate: [AuthGuardService]},
  { path: 'books', component: BooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
