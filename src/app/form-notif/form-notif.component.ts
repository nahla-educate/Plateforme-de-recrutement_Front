import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddPostService } from '../add-post.service';
import { RegisterPayload } from '../authentif/register-payload';
import { Notif } from '../components/common/header-style-one/notification';
import { NotifService } from '../notif.service';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-form-notif',
  templateUrl: './form-notif.component.html',
  styleUrls: ['./form-notif.component.scss']
})
export class FormNotifComponent implements OnInit {

  @Output()
  partAddedEvent = new EventEmitter();

  public selectedFile;
  currentUser: RegisterPayload;
  imgURL: any;
  brandList;
  addNotifForm: FormGroup; 
  isSubmitted = false;
  unamePattern = "^[a-zA-Z]{4,32}$";
  pattern = "^[0-9]{4,16}$";
  localpattern = "^[a-zA-Z0-9 ]{4,16}$";
  notif: Notif = new Notif();
  createdDate = new Date();
  patternF = ".jpg,.jpeg,.png";
  //payss: Pays[];
  userId : number;
  private _notificationsService: any;

  constructor(private http: HttpClient,
    private formBuilder: FormBuilder, private router: Router,
    private service: AddPostService,
    private notifService : NotifService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService) {
     this.currentUser= localStorageService.retrieve('user');
    
  
    
   }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    console.log(this.userId)
    
    // this.listCategories();
     
 /*
     this.addNotifForm = new FormGroup({
       poste: new FormControl(''),
       society: new FormControl(''),
       dateDebut: new FormControl(''), 
     username: new FormControl(this.currentUser.email),
    
     
   });*/
   this.addNotifForm = this.formBuilder.group({
    poste: new FormControl('',
    Validators.required),
    society: new FormControl('', Validators.required),
    dateDebut: new FormControl('', Validators.required),
  });
   
   }
 
   get poste(){return this.addNotifForm.get('poste')}
   get society(){return this.addNotifForm.get('society')}
   //get username(){return this.addNotifForm.get('username')}
   get dateDebut(){return this.addNotifForm.get('dateDebut')}
 

    
   addPost(){
     this.isSubmitted = true;  
     this.notif.username = this.currentUser.email;
     this.notif.poste = this.addNotifForm.value.poste;
     this.notif.society = this.addNotifForm.value.society;
     this.notif.statut = false;
     this.notif.createdDate = this.createdDate;
     this.notif.dateDebut = this.addNotifForm.value.dateDebut;
     console.log(this.notif)
 if(this.addNotifForm.invalid){
   
  alert('Votre formulaire est invalid.');
 }else{this.notifService.sendNotif(this.notif, this.userId).subscribe(data =>{
       console.log("success");
       
       alert('Votre demande a été envoyé avec succès.');
       this.router.navigate(['loc'])
     })}
     
   
     
    
   /*
   
     if (this.addNotifForm.invalid){
       alert('Votre formulaire est invalide.');
     }else{
   
     this.notif.username= this.currentUser.email;
     this.notif.username= this.addNotifForm.get('username').value;
   
     
         
    //      this.service.addPost(this.addNotifForm.value).subscribe(
    //        (response) => {
    //          this.partAddedEvent.emit();
    //          alert('Votre publication est enregistrée avec succès.');
           
    //        }
    //      );
    //      console.log('Image uploaded successfully');
     
    //  }
    //  );}
   
   }
 
*/
  }

}
