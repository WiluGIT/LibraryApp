import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['',[
        Validators.required
      ]],
      password: ['',[
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

  login(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value)
    .subscribe(data => console.log(data));
  }

}
