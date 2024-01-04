import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm:any;
  
  products:any;
  user:any;

  constructor(private fb:FormBuilder, private ps:UserService, private router:Router) {
    this.signupForm=this.fb.group({
      "id":[],
      "password":[],
      "name":[],
      "email":[],
      "phone":[],
      "address":[],
      "role":[]
    });
   }

  ngOnInit(): void {
  }
  fnAdd()
{
 var usr=this.signupForm.value;
//  var str=<any>localStorage.getItem("user"); 
//  var user=JSON.parse(str);
//   prd.user=user;
  console.log("we are sending product info as:")
  console.log(usr)
  this.ps.fnAddUser(usr).subscribe((data)=>{
    console.log("response while adding is :")
    console.log(data)
    alert("Registred Successfully")
   
      this.router.navigate(["login"]);
    
  });
 

}

}
