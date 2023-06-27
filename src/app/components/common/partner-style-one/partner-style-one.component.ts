

import { Component, OnInit } from '@angular/core';
import { Partenaire } from 'src/app/devenir-partenaire/devenir-partenaire.component';
import { PartenaireService } from 'src/app/partenaire.service';

@Component({
  selector: 'app-partner-style-one',
  templateUrl: './partner-style-one.component.html',
  styleUrls: ['./partner-style-one.component.scss']
})
export class PartnerStyleOneComponent implements OnInit {


  paretenaire1: Array<Partenaire>;
  partenaires:Partenaire[];

  constructor(private service: PartenaireService) { }

  ngOnInit(): void {
    this.refreshData();
  }

  
  refreshData() {
    
    this.service.getPartenaires().subscribe(
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
  
      actualite2.retrievedImage = 'data:image/jpeg;base64,' + partenaire.picByte;
     
      actualite2.picByte=partenaire.picByte;
      this. partenaires.push(actualite2);
    }
  }



}

