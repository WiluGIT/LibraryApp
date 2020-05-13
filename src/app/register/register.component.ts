import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      userName:['', [
        Validators.required
      ]],
      email: ['',[
        Validators.required,
        Validators.email
      ]],
      password: ['',[
        Validators.required
        
      ]],
      confirmPassword: ['',[
        Validators.required
      ]]
    });
  }

  get userName() {
    return this.registerForm.get('userName');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  register(){
    console.log(this.registerForm.value);
    this.authService.register(this.registerForm.value)
    .subscribe(data => console.log(data));
  }

}
