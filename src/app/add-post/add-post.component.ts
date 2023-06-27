import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AddPostService } from '../add-post.service';
import { AuthService } from '../authentif/auth.service';
import { RegisterPayload } from '../authentif/register-payload';
export class PostPayload {
    
  id: string;
  title : string;
  description : string;
  createdAt: string;
  username: string;
  content: string;  
  type:string;
  picByte: string;
  retrievedImage: string;
  
} 
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
    
  @Output()
  partAddedEvent = new EventEmitter();

  public selectedFile;
  currentUser: RegisterPayload;
  imgURL: any;
  brandList;
  addPostForm: FormGroup; 
  isSubmitted = false;
  unamePattern = "^[a-zA-Z]{4,32}$";
  pattern = "^[0-9]{4,16}$";
  localpattern = "^[a-zA-Z0-9 ]{4,16}$";
  postPayload: PostPayload;
  
  patternF = ".jpg,.jpeg,.png";
  //payss: Pays[];
  private _notificationsService: any;

  constructor(private http: HttpClient,private service: AddPostService,private localStorageService: LocalStorageService) {
     this.currentUser= localStorageService.retrieve('user');
     this.postPayload = {
      id: '',
title : '',
description : '',
createdAt: '',
username: '',
content: '',  
type: '',
picByte: '',
retrievedImage: ''
     }
  
    
   }

  ngOnInit(): void {
    
    // this.listCategories();
     
 
     this.addPostForm = new FormGroup({
       title: new FormControl('',
       Validators.required),
       description: new FormControl('',
       Validators.required),
      content: new FormControl('',
      Validators.required),
     type: new FormControl('',
     Validators.required),
   
     username: new FormControl(this.currentUser.email),
     upfile: new FormControl('',
     Validators.required)
     
   })
   
   }
 
   get title(){return this.addPostForm.get('title')}
   get description(){return this.addPostForm.get('description')}
   get username(){return this.addPostForm.get('username')}
   get content(){return this.addPostForm.get('content')}
   get upfile(){return this.addPostForm.get('upfile')}
   get type(){return this.addPostForm.get('type')}
 

   public onFileChanged(event) {
     console.log(event);
     this.selectedFile = event.target.files[0];
     //const width =  this.selectedFile.naturalWidth;
     //const height =  this.selectedFile.naturalHeight;
 
     let reader = new FileReader();
     reader.readAsDataURL(event.target.files[0]);
    /* if( width !== 300000 && height !== 3000000 ) {
      
       alert('Votrbbghghgg.');
    }else{ */
     //if(this.se)
      //check file is valid
    
 
     reader.onload = (event2) => {
       this.imgURL = reader.result;
     };
     
 
     
    
   }
 
    
   addPost(){
     this.isSubmitted = true;  
   
   
     if (this.addPostForm.invalid){
       alert('Votre formulaire est invalide.');
     }else{
     /*for image*/
     const uploadData = new FormData();
     uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
     this.selectedFile.imageName = this.selectedFile.name;
     
     this.postPayload.username= this.currentUser.email;
     this.postPayload.username= this.addPostForm.get('username').value;
     if(this.addPostForm.invalid){
      alert('Votre formulaire est invalide.');

     }else{  this.http.post('http://localhost:8080/api/posts/telechargeImage', uploadData, { observe: 'response' })
     .subscribe((response) => {
       if (response.status === 200) {
         
         this.service.addPost(this.addPostForm.value).subscribe(
           (response) => {
             this.partAddedEvent.emit();
             alert('Votre publication est enregistrée avec succès.');
             this.reset();
           }
         );
         console.log('Image uploaded successfully');
       } else {
         console.log('Image not uploaded successfully');
       }
     }
     )}
   ;}
     /*else if(this.emailPart == emilPart)*/
   
   }
 
   reset(){
     this.addPostForm.reset();
   }
 
 ///notification
 
 onSuccess(message){
   this._notificationsService.success('Success', message, {
     position: ['bottom', 'right'],
     timeOut: 2000,
     animate: 'fade',
     showProgressBar: true
   })
 }

}
