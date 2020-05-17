import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private authService:AuthService, private router:Router) { }
  matcher = new MyErrorStateMatcher();

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
      confirmPassword: [''],
    }, {validators: this.checkPasswords});
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

    this.router.navigate([""]);
  }

  checkPasswords(group: FormGroup){
    let password = group.get('password').value;
    let confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : {notSame: true};
  }

}
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}