import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { User } from 'src/app/Register/user';
import { AuthService } from '../auth.service';
import { LoginPayload } from '../login-payload';
import { RegisterPayload } from '../register-payload';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginPayload: LoginPayload;
  siteKey: string = "6LfltwkbAAAAAEG_xuXSPuAtxgxxvKi_jFxaNcjN";
  socicalUser: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;
  localpattern = "[^[a-zA-Z0-9]{6,16}$]";
user: RegisterPayload;
  isSubmitted = false;
    
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router,
    private socialService: SocialAuthService) {
   this.siteKey = '6LfltwkbAAAAAEG_xuXSPuAtxgxxvKi_jFxaNcjN';
  this.siteKey ='6LeVa84aAAAAAB4myWaDKDK5DJptQQjzSq_Ix2NP';

  this.loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(64),
     
    ])
  });
 
  
  this.loginPayload = {
    email: '',
    password: ''
  };
  }

  ngOnInit(): void {
    
  }

  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}
 

  onSubmit(){
    this.loginPayload.email = this.loginForm.get('email').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    if (this.loginForm.invalid){
      alert('Votre formulaire est invalide.');
    }else{
    this.authService.login(this.loginPayload).subscribe( data => {
      if(data) {
        console.log("login success");
        this.router.navigateByUrl(`/`);
      } else {
        console.log("login failed")
      }
    });
    }


  }


  
  //Social media

  signInWithGoogle(): void {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.router.navigateByUrl(`/`);
    console.log(data);
  

  //  localStorage.setItem('currentUser', JSON.stringify({ user: this.user, token: data.idToken }));
      

      }
    );
    }

  signInWithFB(): void {
    this.socialService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        console.log(data);

      }

    );
    }

  
 logOut(): void {
   this.socialService.signOut();
 }

  

}
