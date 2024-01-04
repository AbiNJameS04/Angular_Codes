import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  UserForm:any;
  constructor(private fb:FormBuilder) {
    this.UserForm=this.fb.group({
      // "username":['',[Validators.minLength(3), Validators.maxLength(10)]],
      "username":'',
      "password":[],
      "cpassword":[''],
      "firstName":[],
      "lastName":[]
      }, { validators: this.cpvalidator });
    }

  ngOnInit(): void {
  }

  get f()
  {
    return this.UserForm.controls;
  }

  fnAdd()
  {
    // alert(JSON.stringify(this.signupForm.value))
    // alert(this.signupForm.controls.firstName.value)
    alert(this.UserForm.controls["lastName"].value);
    var obj=this.UserForm.value;
    alert(obj.firstName)
  }

  cpvalidator(form: FormGroup) {
    const password = this.UserForm.controls['password'].value;
    const confirmation = this.UserForm.controls['cpassword'].value;

    if (!password || !confirmation) { // if the password or confirmation has not been inserted ignore
      return null;
    }
    
    if (confirmation.length > 0 && confirmation !== password) {
      confirmation.setErrors({ notMatch: true }); // set the error in the confirmation input/control
    }

    return null; // always return null here since as you'd want the error displayed on the confirmation input
 }

}