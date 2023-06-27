

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterPayload} from '../register-payload';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';
import { ParcoursUniv } from '../ParcoursUniv';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 
  
  registerForm: FormGroup;
  registerPayload: RegisterPayload;
  siteKey: string = "6LfltwkbAAAAAEG_xuXSPuAtxgxxvKi_jFxaNcjN";
  socicalUser: SocialUser;
  userLogged: SocialUser;
  isLogged: boolean;
  isSubmitted = false;

 public show:boolean = false;

  
 
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router:Router,
    private socialService: SocialAuthService) {
 //  this.siteKey = '6LfltwkbAAAAAEG_xuXSPuAtxgxxvKi_jFxaNcjN';
   // this.siteKey ='6LeVa84aAAAAAB4myWaDKDK5DJptQQjzSq_Ix2NP';
    
    this.registerForm = this.formBuilder.group({
      id:null,
      recaptcha:  new FormControl('', [
        Validators.required
      ]),
      username: ['',
        Validators.required,
        Validators.minLength(8)
       
      ],
      imageUrl:'',
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      telephone:'',
      role: new FormControl('', [
        Validators.required
      ]),
      password:  new FormControl('', [
        Validators.required,
        Validators.minLength(8)
       // Validators.pattern('[A-Za-z0-9].{8,}')
      ]),
      confirmPassword:  new FormControl('', [
        Validators.required
      ]),
      created: '',
      etat:'Invalide',
      poste:  new FormControl('', [
        Validators.required
      ]),
      adresse:  new FormControl('', [
        Validators.required
      ]),
      experience:  new FormControl('', [
        Validators.required
      ]), 
      adresseCand:'',
      anneeUniiCand:'',
      apropos:'',
      files:'',
      certificationCand:'',
      cinCand:'',
      cv:'',
      dilomeCand:'',
      duree1:'',
      dureeProCand:'',
      emailCand:'',
      lm:'',
      nomCand:'',
      posteProCand:'',
      prenomCand:'',
      sitAmoureuse:'',
      societeProCand:'',
      societeStaCand:'',
      stageCand:'',
      telephoneCand:'',
      universiteCand:'',
      villeCand:'',
      paysCand:'',
      // diplome:'',
      // anneeDiplome:'',
      // universityDiplome:'',
      cursus: [] ,
      pays:'',
      postal: null,
      cpassword:''

      
    },
    { validators: this.MustMatch('password', 'confirmPassword')});
    this.registerPayload = {
      id: null,
      username: '',
      telephone:null,
      imageUrl:'',
      email: '',
      role: '',
      password: '',
      confirmPassword: '',
      etat:'',
      created: '',
      poste:'',
      adresse:'',
      experience:'',
      adresseCand:'',
     // anneeUniiCand:'',
      apropos:'',
      files:'',
      certificationCand:'',
      cinCand:'',
      cv:'',
    //  dilomeCand:'',
      duree1:'',
      dureeProCand:'',
      emailCand:'',
      lm:'',
      nomCand:'',
      posteProCand:'',
      prenomCand:'',
      sitAmoureuse:'',
      societeProCand:'',
      societeStaCand:'',
      stageCand:'',
      telephoneCand:'',
    //  universiteCand:'',
      villeCand:'',
      paysCand:'',
      pays:'',
      postal:null,
      cpassword:'',
      // diplome:'',
      // anneeDiplome:'',
      // universityDiplome:'',
     cursus: [],


    };
  }









  get username(){return this.registerForm.get('username')}
  get email(){return this.registerForm.get('email')}
  get password(){return this.registerForm.get('password')}
  get confirmPassword(){return this.registerForm.get('confirmPassword')}
  get poste(){return this.registerForm.get('poste')}
  get experience(){return this.registerForm.get('experience')}
  get adresse(){return this.registerForm.get('adresse')}
  get role(){return this.registerForm.get('role')}
  get recaptcha(){return this.registerForm.get('recaptcha')}

  toggle() {
    this.show = !this.show;


  }
  ngOnInit() {
    
    
    this.socialService.authState.subscribe(
      data => {
        this.userLogged = data ;
        this.isLogged = (this.userLogged != null);
      }
    );
  }
  MustMatch(controlName:string, matchingControlName:string){
    return(formGroup: FormGroup) =>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors.MustMatch){
        return
      }
      if(control.value !== matchingControl.value){
        matchingControl.setErrors({MustMatch:true});

      }else{
        matchingControl.setErrors(null);

      }
    }

  }
// check(){
//   if(this.role){
//     alert('check');
//   }
// }



  onSubmit() {

    this.registerPayload.username = this.registerForm.get('username').value;
    this.registerPayload.email = this.registerForm.get('email').value;
    this.registerPayload.role = this.registerForm.get('role').value;
//console.log(this.registerPayload.role);
    this.registerPayload.password = this.registerForm.get('password').value;
    this.registerPayload.confirmPassword = this.registerForm.get('confirmPassword').value;
    this.registerPayload.etat= this.registerForm.get('etat').value;
//     console.log(this.registerPayload.etat);
this.registerPayload.adresse= this.registerForm.get('adresse').value;
this.registerPayload.experience= this.registerForm.get('experience').value;
this.registerPayload.poste= this.registerForm.get('poste').value;
this.registerPayload.apropos= this.registerForm.get('apropos').value;
this.registerPayload.pays= this.registerForm.get('pays').value;
this.registerPayload.postal= this.registerForm.get('postal').value;
this.registerPayload.cpassword= this.registerForm.get('cpassword').value;




    

      /* tslint:disable:no-unused-variable */

    this.authService.register(this.registerPayload).subscribe(data => {
      console.log('register succes');
      //this.isSubmitted= true;
      this.router.navigateByUrl('/register-success');
      alert('Votre formulaire est enregistrée avec succés.');
    }, error => {
      console.log('register failed');

    });

  }



  //Social media

  signInWithGoogle(): void {
    this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
    console.log(data);
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


//   user: User= new User("","","",0,"","","");
// message:  any;


// public registerNow(){
//  let resp=this.userService.doRegistration(this.user);
//  resp.subscribe((data) => this.message=data);


}