import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userId: string;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', [
        Validators.required
      ]],
      password: ['', [
        Validators.required

      ]]
    });
  }

  get userName() {
    return this.loginForm.get('userName');
  }
  get password() {
    return this.loginForm.get('password');
  }

  login() {
    this.authService.login(this.loginForm.value)
      .subscribe(data => {
        this.authService.saveToken(data.access_token);
        this.authService.getUserInfo()
          .subscribe(data => {
            this.authService.getUserRole(data["sub"])
              .subscribe(role => {
                this.authService.saveRole(role["message"]);
              });
          })

          this.openSnackBar('Logged In!', 'Close', 'green-snackbar')
          this.router.navigate([""]);
      }, error =>{
        this.openSnackBar(error.error["error_description"], 'Close', 'red-snackbar')
      });
      
      

  }

  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [className]
    });
  }

}
