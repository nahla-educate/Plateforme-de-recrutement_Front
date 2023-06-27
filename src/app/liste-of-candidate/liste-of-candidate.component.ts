import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../authentif/auth.service';
import { RegisterPayload } from '../authentif/register-payload';
import { Notif } from '../components/common/header-style-one/notification';
import { NotifService } from '../notif.service';
import { User } from '../Register/user';


@Component({
  selector: 'app-liste-of-candidate',
  templateUrl: './liste-of-candidate.component.html',
  styleUrls: ['./liste-of-candidate.component.scss']
})


export class ListeOfCandidateComponent implements OnInit {


  userId: number;
  notifForm: Notif = new Notif();
  
  users: RegisterPayload[];

  user: RegisterPayload;

  count: 0;  
  



  constructor(private http: HttpClient, private authService: AuthService,
    private router: Router, private notifService: NotifService,
    private modalService: NgbModal, private fb: FormBuilder){ }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers():void {
    this.authService.getUsers().subscribe(
      (response: RegisterPayload[]) => {
        this.users = response.filter(
          user => user.role ==='candidate' && user.etat ==='valide');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }





  public searchCandidates(key1: string):void {

    const results1: RegisterPayload[] = [];
    for (const candidate of this.users){
      if(candidate.email.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1 
      || candidate.poste.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1
      ||candidate.adresse.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1
      ||candidate.experience.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1

      ){
        results1.push(candidate);
      }
    }
    
    this.users = results1;
    if(results1.length === 0 || !key1){
      this.getUsers();
      
    }
    
    }

   
    AllActualities(): void {

      this.authService.getUsers()
      .subscribe(
        response => {
          const { content , totalElements  } = response;
          this.user = response.content;
          this.count = totalElements;
          console.log(response);
        },
        error => {
          console.log(error);
        });
          }
      public isValid(){
      if(this.isValid){
        return true;
      } else {
        this.router.navigateByUrl('/up');
  
      }
      }


      // filter by checkbox aside
  

  
      getTunisUser() {
        this.authService.getUsers().subscribe(
          (response: RegisterPayload[]) => {
            this.users = response.filter(
              user =>  user.adresse==='Tunis');
          }
        )
      }
    
      getSousseUser() {
        this.authService.getUsers().subscribe(
          (response: RegisterPayload[]) => {
            this.users = response.filter(
              user =>  user.adresse==='Sousse')
          }
        )
      }
    
      getSfaxUser() {
        this.authService.getUsers().subscribe(
          (response: RegisterPayload[]) => {
            this.users = response.filter(
              user =>  user.adresse==='Sfax')
          }
        )
      }
    
      getGabesUser() {
        this.authService.getUsers().subscribe(
          (response: RegisterPayload[]) => {
            this.users = response.filter(
              user =>  user.adresse==='Gabes')
          }
        )
      }
    
      getTozeurUser() {
        this.authService.getUsers().subscribe(
          (response: RegisterPayload[]) => {
            this.users = response.filter(
              user =>  user.adresse==='Tozeur')
          }
        )
      }
    
      
    
      notif(userId){
        this.notifForm.value = "accept";
        console.log(userId)
        this.notifService.sendNotif(this.notifForm, userId).subscribe(
         (data) => {console.log(data);});
         alert("La demande de recrutement pour la candidate est evoyée.")
       }

       getFormById(userId : number){
        this.router.navigate(['form', userId]);
      }

       

}
