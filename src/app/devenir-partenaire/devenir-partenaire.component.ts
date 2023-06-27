import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PartenaireService } from '../partenaire.service';


export class Partenaire {
  
  id: number;
  firstNamePart : string;
  lastNamePart : string;
  etat: string;
  emailPart: string;
  nameSociety: string; 
  enclassement: string; 
  numeroTelephone: string;
  localisation: string;  
  pays:string;
  picByte: string;
  retrievedImage: string;
  
} 
@Component({
  selector: 'app-devenir-partenaire',
  templateUrl: './devenir-partenaire.component.html',
  styleUrls: ['./devenir-partenaire.component.scss']
})
export class DevenirPartenaireComponent implements OnInit {
  
  @Output()
  partAddedEvent = new EventEmitter();

  public selectedFile;
  imgURL: any;
  brandList;
  brandForm: FormGroup; 
  isSubmitted = false;
  unamePattern = "^[a-zA-Z]{4,32}$";
  pattern = "^[0-9]{4,16}$";
  localpattern = "^[a-zA-Z0-9 ]{4,16}$";
  
  patternF = ".jpg,.jpeg,.png";
  //payss: Pays[];
  private _notificationsService: any;

  constructor(private http: HttpClient,private service: PartenaireService, private router: Router) { }

  ngOnInit(): void {
    
    // this.listCategories();
     
 
     this.brandForm = new FormGroup({
       firstNamePart: new FormControl('', [
         Validators.required,
         Validators.minLength(4),
         Validators.pattern(this.unamePattern)
       ]),
       lastNamePart: new FormControl('', [
       Validators.required,
       Validators.minLength(4),
       Validators.pattern(this.unamePattern)
      
     ]),
     emailPart: new FormControl('', [
       Validators.required,
       Validators.email
     ]),
     nameSociety: new FormControl('', [
       Validators.required,
       Validators.minLength(4),
       Validators.pattern(this.unamePattern)
     ]),
     enclassement: new FormControl('', [
       Validators.required,
       Validators.minLength(4),
       Validators.pattern(this.unamePattern)
     ]),
     numero: new FormControl('', [
       Validators.required,
       Validators.minLength(8),
       Validators.maxLength(20),
       Validators.pattern(this.pattern)
     ]),
     localisation: new FormControl('', [
       Validators.required,
       Validators.minLength(4),
       Validators.maxLength(64),
       Validators.pattern(this.localpattern)
     ]),
     pays: new FormControl('', [
       Validators.required,
       Validators.minLength(4),
       Validators.maxLength(64),
       Validators.pattern(this.localpattern)
     ]),
     upfile: new FormControl('', [
       Validators.required
      // Validators.pattern(this.patternF)
                                 
       
     ])
     
   })
   
   }
 
   get lastNamePart(){return this.brandForm.get('lastNamePart')}
   get firstNamePart(){return this.brandForm.get('firstNamePart')}
   get emailPart(){return this.brandForm.get('emailPart')}
   get nameSociety(){return this.brandForm.get('nameSociety')}
   get enclassement(){return this.brandForm.get('enclassement')}
   get numero(){return this.brandForm.get('numero')}
   get localisation(){return this.brandForm.get('localisation')}
   get pays(){return this.brandForm.get('pays')}
   get upfile(){return this.brandForm.get('upfile')}
 
   validateFile(name: String) {
     var ext = name.substring(name.lastIndexOf('.') + 1);
     if (ext.toLowerCase() == 'png' || ext.toLowerCase() == 'jpg') {
         return true;
     }
     else {
         return false;
     }
 }
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
      if (!this.validateFile(this.selectedFile.name)) {
       alert('Le format de votre image est invalide');
       this.reset();
       return false;
   }
 
     reader.onload = (event2) => {
       this.imgURL = reader.result;
     };
     
 
     
    
   }
 
    
   onSubmit(){
     this.isSubmitted = true;  
     if (this.brandForm.invalid){
       alert('Votre formulaire est invalide.');
     }else{
     /*for image*/
     const uploadData = new FormData();
     uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
     this.selectedFile.imageName = this.selectedFile.name;
     
   
     this.http.post('http://localhost:8080/part/telecharge', uploadData, { observe: 'response' })
     .subscribe((response) => {
       if (response.status === 200) {
         
         this.service.addPart(this.brandForm.value).subscribe(
           (response) => {
             this.partAddedEvent.emit();
             alert('Votre formulaire a été enregistré avec succès.');
             this.router.navigate(['/'])
             this.reset();
           }
         );
         console.log('Image uploaded successfully');
         //this.router.navigate(['items'];
       } else {
         console.log('Image not uploaded successfully');
       }
     }
     );}
     /*else if(this.emailPart == emilPart)*/
   
   }
 
   reset(){
     this.brandForm.reset();
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
 
 Valide(c: Partenaire){
  
     this.service.ValidePart(c , c.id).subscribe(
       response => {
         console.log(response);
        // this.service.CandiMe(c, c.id);
   //this.etatCandidate="ok";
 
         alert("candidate avec id"+c.id+" est accepté ")
       },
       error => {
         console.log(error);
        // this.etatCandidate="no";
         
 
       });
   
 }
 
 
 
 
 
 
 
 
 
   /**city */
   // Choose city using select dropdown
   // changeCity(e) {
   //   this.pays.setValue(e.target.value, {
   //     onlySelf: true
   //   })
   // }
 
 
   // listCategories(){
   //   this.service.getPays().subscribe(
   //     data => this.payss = data
   //   );
   // }
}
