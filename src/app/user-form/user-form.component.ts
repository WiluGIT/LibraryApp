import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from '../register/register.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder, private authService:AuthService, public snackBar:MatSnackBar) { }
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.userForm = this.fb.group({
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
    return this.userForm.get('userName');
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }

  addUser(){
    this.authService.register(this.userForm.value)
    .subscribe(data => {
      if(data['status']===1){
        this.openSnackBar(data["message"], 'Close', 'red-snackbar')
      }else{
        this.openSnackBar('User added successfully', 'Close', 'green-snackbar')
      }
    });
  }

  checkPasswords(group: FormGroup){
    let password = group.get('password').value;
    let confirmPassword = group.get('confirmPassword').value;

    return password === confirmPassword ? null : {notSame: true};
  }

  
  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [className]
    });
  }

}
