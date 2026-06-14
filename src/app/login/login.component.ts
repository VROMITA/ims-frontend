import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private http:HttpClient, private router:Router ) {}

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })


  onLogin(){

    this.http.post('http://localhost:8080/auth/login', {

      username: this.loginForm.value.username?.trim(),
      password: this.loginForm.value.password
      },
      { responseType: 'text'})
      .subscribe(response => {
      console.log(response);
      localStorage.setItem('token', response);
      this.router.navigate(['/incidents']);
    })

  }

}
