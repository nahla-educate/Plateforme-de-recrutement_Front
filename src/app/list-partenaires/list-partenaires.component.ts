

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Partenaire } from '../devenir-partenaire/devenir-partenaire.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PartenaireService } from '../partenaire.service';

@Component({
  selector: 'app-list-partenaires',
  templateUrl: './list-partenaires.component.html',
  styleUrls: ['./list-partenaires.component.scss']
})
export class ListPartenairesComponent implements OnInit {
  paretenaire1: Array<Partenaire>;
  partenaires:Partenaire[];
  private deleteId: number;
  private valideId: number;
  //private partenaire: Partenaire;
  partenaire:Partenaire = new Partenaire();
  etatPart: string;
  //etat: string;
  constructor(private service: PartenaireService, private modalService: NgbModal,private http: HttpClient) { }

  ngOnInit(): void {
    this.refreshData();
  }
  Valide(c: Partenaire){
    console.log(this.valideId)
    console.log(this.partenaire)
    this.service.ValidePart(this.partenaire , this.valideId).subscribe(
      response => {
        console.log(response);
//       this.service.PartValid(c, this.valideId);
        this.etatPart="ok";

      //  alert("Partenaire avec id"+c.id+" est accepté ");  
    
      },
      error => {
        console.log(error);
        this.etatPart="no";
        alert('error')

      });   
  
} 

public search(key1: string):void {

  const results1: Partenaire[] = [];
  for (const candidate of this.partenaires){
    if(
     candidate.emailPart.toLowerCase().indexOf(key1.toLocaleLowerCase()) !== -1

    ){
      results1.push(candidate);
    }
  }
  
  this.partenaires = results1;
  if(results1.length === 0 || !key1){
    this.refreshData();
    
  }
  
  }
  refreshData() {
    
    this.service.getPartenairesAll().subscribe(
      response => {
        this.handleSuccessfulResponse(response)
        
   });
    
  }
  handleSuccessfulResponse(response) {
    this. partenaires = new Array<Partenaire>();
    this.paretenaire1 = response;
    for (const partenaire of this.paretenaire1) {
    
      const actualite2 = new Partenaire();
      actualite2.id = partenaire.id;
      actualite2.firstNamePart = partenaire.firstNamePart;
      actualite2.lastNamePart = partenaire.lastNamePart;
      actualite2.emailPart = partenaire.emailPart;
      actualite2.nameSociety = partenaire.nameSociety;
      actualite2.enclassement = partenaire.enclassement;
      actualite2.numeroTelephone = partenaire.numeroTelephone;
      actualite2.localisation = partenaire.localisation;
      actualite2.etat = partenaire.etat;
      actualite2.retrievedImage = 'data:image/jpeg;base64,' + partenaire.picByte;
     
      actualite2.picByte=partenaire.picByte;
      this. partenaires.push(actualite2);
    }
  }

  openDetails(targetModal, partenaire:Partenaire){
    this.modalService.open(targetModal, {
      centered: true,
      backdrop: 'static',
      size: 'lg'

    });
    document.getElementById('firstNamePart').setAttribute('value', partenaire.firstNamePart);
    document.getElementById('lastNamePart').setAttribute('value', partenaire.lastNamePart);
    document.getElementById('emailPart').setAttribute('value', partenaire.emailPart);
    document.getElementById('enclassement').setAttribute('value', partenaire.enclassement);
    document.getElementById('localisation').setAttribute('value', partenaire.localisation);
    document.getElementById('nameSociety').setAttribute('value', partenaire.nameSociety);
    
    
  }
  openDelete(targetModal, partenaire: Partenaire) {
    this.deleteId = partenaire.id;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }
  onDelete(){
    const deleteUrl = 'http://localhost:8080/part/partenaires/' + this.deleteId + '/delete';
    this.http.delete(deleteUrl).subscribe((result) => {
      this.ngOnInit();
      this.modalService.dismissAll();

    });
  }


  openValide(targetModal, partenaire: Partenaire) {
    this.valideId = partenaire.id;
    this.partenaire = partenaire;
    this.modalService.open(targetModal, {
      backdrop: 'static',
      size: 'lg'
    });
  }
  onValide(){
    // const deleteUrl = 'http://localhost:8080/validePart/' + this.valideId;
    // this.http.PostDetailsComponent(deleteUrl).subscribe((result) => {
    //   this.ngOnInit();
    //   this.modalService.dismissAll();

    // });
  }



  /*valide(){
    this.service.ValidePart(this.partenaire,this.valideId).subscribe( (response) => {
      this.ngOnInit();
     
    }
  );

  }*/


}
