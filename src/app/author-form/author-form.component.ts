import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MyErrorStateMatcher } from '../register/register.component';
import { AuthorService } from '../services/author.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {

  authorForm: FormGroup;
  constructor(
    private fb: FormBuilder, 
    private authorService:AuthorService,
    private snackBar:MatSnackBar) { }
  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.authorForm = this.fb.group({
      firstName: ['',[
        Validators.required
      ]],
      lastName: ['',[
        Validators.required
        
      ]]
    });
  }

  get firstName() {
    return this.authorForm.get('firstName');
  }
  get lastName() {
    return this.authorForm.get('lastName');
  }


  addAuthor(){
    this.authorService.addAuthor(this.authorForm.value)
    .subscribe(data => {
      if(data['status']===1){
        this.openSnackBar(data["message"], 'Close', 'red-snackbar')
      }else{
        this.openSnackBar('Author added successfully', 'Close', 'green-snackbar')
      }
    });
  }

  openSnackBar(message: string, action: string, className: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: [className]
    });
  }

}
