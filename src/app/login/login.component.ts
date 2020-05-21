import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService as socialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userId: string;
  gmailIcon = faGoogle;

  constructor(private fb: FormBuilder, 
    private authService: AuthService, 
    private router: Router, 
    public snackBar: MatSnackBar,
    private socialAuthService: socialAuthService) { }

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
          this.router.navigate(["books"]);
      }, error =>{
        this.openSnackBar(error.error["error_description"], 'Close', 'red-snackbar')
      });     

  }

  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(x => {
        this.authService.getIdentityServerToken(x['idToken'])
        .subscribe(identityToken =>{
          this.authService.saveToken(identityToken);
          this.authService.getUserInfo()
            .subscribe(data => {
              this.authService.getUserRole(data["sub"])
                .subscribe(role => {
                  this.authService.saveRole(role["message"]);
                });
            })
  
            this.openSnackBar('Logged In!', 'Close', 'green-snackbar')
            this.router.navigate(["books"]);
        }, error =>{
          this.openSnackBar(error.error["error_description"], 'Close', 'red-snackbar')
        });
    });
  }

  

  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [className]
    });
  }

}
