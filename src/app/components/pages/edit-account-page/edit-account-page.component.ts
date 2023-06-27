import { NgIf } from '@angular/common';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { AuthService } from 'src/app/authentif/auth.service';
import { ParcoursUniv } from 'src/app/authentif/ParcoursUniv';
import { RegisterPayload } from 'src/app/authentif/register-payload';
import { Candidate } from 'src/app/BackEnd/candidate';



@Component({
  selector: 'app-edit-account-page',
  templateUrl: './edit-account-page.component.html',
  styleUrls: ['./edit-account-page.component.scss']
})
export class EditAccountPageComponent implements OnInit {

  candidate=new RegisterPayload();
dataArray: ParcoursUniv[] = [];
parcoursIndex= [0];
dataArray1=[];
diplomes: string[]= [];
universityDiplomes: string[]= [];
anneeDiplomes: string[]= [];
currentUser: RegisterPayload;
cvForm: FormGroup;
registerPayload: RegisterPayload;
candidates: RegisterPayload[];
ngOnInit(){
  this.dataArray1.push(this.candidate);
}


  constructor(private authService: AuthService, private router: Router,
    private route: ActivatedRoute, private localStorageService: LocalStorageService) {
    this.currentUser= localStorageService.retrieve('user');
    }


    public getUsers():void {
      this.authService.getUsers().subscribe(
        (response: RegisterPayload[]) => {
          this.candidates = response.filter(
            user => user.role ==='candidate' && user.etat ==='valide')
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      )
    }

  saveCandidate(){
    console.log(this.currentUser);
this.authService.update(this.currentUser.id, this.currentUser).subscribe( data =>{
 //this.authService.getCursusByUser(this.currentUser.id);
console.log(data);
this.goToCandidateList();
},
error => console.log(error));
  }


  goToCandidateList(){
this.router.navigate(['/deposer-cv']);
  }








  
  onSubmit(){
  //  console.log(this.diplomes);
this.diplomes.forEach(aaa => {
 var index= this.diplomes.indexOf(aaa);
  this.currentUser.cursus.push(new ParcoursUniv(aaa, this.universityDiplomes[index], this.anneeDiplomes[index]));

  //console.log(this.authService.getCursusByUser(this.currentUser.id));
  this.getUsers();
});

//console.log(typeof(this.dataArray));
//this.currentUser.cursus= this.dataArray;
  console.log(this.currentUser.cursus);
 this.saveCandidate();


  }


  addValue(){
    this.parcoursIndex.push(this.parcoursIndex.length);
 // this.dataArray.push(new ParcoursUniv(diplome , universityDiplome, anneeDiplome));

    //this.dataArray1.push(obj);
  
  }
  
  removeValue(){  
    this.parcoursIndex.pop();
    }


    addValue1(){
      this.candidate = new RegisterPayload();
      this.dataArray1.push(this.candidate);
      
    
    }
    
    removeValue1(index){  
  
      this.dataArray.splice(index);
      
      }










}

function TypeOf(dataArray: ParcoursUniv[]): any {
  throw new Error('Function not implemented.');
}
