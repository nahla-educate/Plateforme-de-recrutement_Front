import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/authentif/auth.service';
import { RegisterPayload } from 'src/app/authentif/register-payload';
import { RegisterPageComponent } from 'src/app/loginFolder/register-page/register-page';
import { NotifService } from 'src/app/notif.service';
import * as moment from 'moment';
import { Notif } from './notification';

@Component({
  selector: 'app-header-style-one',
  templateUrl: './header-style-one.component.html',
  styleUrls: ['./header-style-one.component.scss']
})
export class HeaderStyleOneComponent implements OnInit {
    //users: Observable<Array<userPayload>>;
  users: Observable<Array<RegisterPageComponent>>;
  currentUser: RegisterPayload;
  show:boolean= true;

  diffDate: any;
  userId: number;
  notif1: Array<Notif>;
  notifications:Notif[];
  notification:Notif;
  a: Notif;
  currentTime: any;
  myVar: any;
  color="red";
  err= false;
  nombreNotification : any;
 // currentTime = moment().format('LLLL');
  //createdDate = moment().format('LLLL');
  private isButtonVisible = true;
  url : string | ArrayBuffer = '';
  base64Data: any;
  

  constructor(
    public authService: AuthService,
    private route: ActivatedRoute,
    private notifService: NotifService,
    private router: Router,
    private localStorageService: LocalStorageService,
    private formBuilder: FormBuilder
    
    ) {

    this.currentUser= localStorageService.retrieve('user');
    this.notifService.listen().subscribe((m:any)=>{
      console.log(m);
      this.getNotification();
      this.nombreNotificationNonLu();
    })
 

    

    }
    lu() {
      this.show = !this.show;
  
  
    }
    // upDateColor(){
    //   this.color="black";
    //   // if(count != 0){
    //   //   this.err=true;}
      
    // }
 
  ngOnInit(): void {
  //  this.getCurrentUser();
  this.getNotification();
  this.nombreNotificationNonLu();
  this.currentTime = moment().format('LLLL');
  //this.a.createdDate = moment().format('LLLL');
 // this.currentTime.diff(createdDate, 'minutes');
 //this.diffDate = moment(this.notification.createdDate).diff(moment(), 'minutes');

  }
  isHide: boolean = false;

  toggleFunction() {
  
    this.isHide = !this.isHide; // toggle the notification 
  }

  calculDate(dataDate){
    //console.log(dataDate.createdDate)
    let start = new Date().getTime()
    let end = new Date(dataDate.createdDate).getTime()

    let time = start - end

    let diffDay = Math.floor(time / 86400000); //calcul de jour
    let diffHour = Math.floor((time % 86400000) / 3600000); //calcul heures
    let diffMinute = Math.floor(((time % 86400000) % 3600000) / 60000); // calcul min

    // console.log('jour',diffDay);
    // console.log('heure',diffHour);
    // console.log('minute',diffMinute);

    if (diffDay >= 1){
      return "il y a " + diffDay;

    }
    else if(diffHour >= 1){
      return "il y a " + diffHour;
    }
    else{
      return "il y a" + diffMinute;

    }


    
  }

  hourTime(key){
    let start = new Date().getTime()
    let end = new Date(key.createdDate).getTime()

    let time = start - end

     let diffDay = Math.floor(time / 86400000); //calcul de jour
    let diffHour = Math.floor((time % 86400000) / 3600000); //calcul heures
     let diffMinute = Math.floor(((time % 86400000) % 3600000) / 60000); // calcul min

    // // console.log('jour',diffDay);
    // // console.log('heure',diffHour);
    // // console.log('minute',diffMinute);

     if (diffDay >= 1){
     return "jour";

     }else if(diffHour >= 1){
      return "heure";
     }
     else{
      return "seconde";

     }
    
  }


// diff(){
//  moment(this.notification.createdDate).diff(moment(), 'minutes');
// }


  getNotification(){
      this.notifService.getNotif(this.currentUser.id).subscribe(
        response => {
          console.log('notif');
         // this.diffDate = moment(this.notification.createdDate).diff(moment(), 'minutes');
          
        this.notif(response);
   
        
          
     });
  }

     myFunction() {
    this.myVar = setInterval(this.getNotification, 3000);
  }


notif(response){
  this.notifications = new Array<Notif>();
  this.notif1 = response;
  for (const notif of this.notif1) {
  
    const notification = new Notif();
    notification.id = notif.id;
    notification.value = notif.value;
    notification.createdDate = notif.createdDate;
   notification.statut = notif.statut;
   notification.candidat = notif.candidat;
   notification.poste = notif.poste;
   notification.society = notif.society;
   notification.username = notif.username;
    this.notifications.push(notification);
  }
}
updateNotification(notification){
  console.log(notification);
  
  this.notifService.updateNotif(notification).subscribe(data =>{
    console.log("success");
    this.notifService.filter('update Notification');
    this.router.navigate(['notification-detail', notification.id])
  })
}

nombreNotificationNonLu(){
  this.notifService.getNombreNotificationNonLu(this.currentUser.id).subscribe(data =>{
    this.nombreNotification = data;
    //this.color="red";
    if(this.nombreNotification == 0){
      this.nombreNotification = null;
     // this.color="black";
    }
    console.log(this.nombreNotification);
  })
}
clearNombre(){
  this.nombreNotification = null;
}
/* difference between date1 and date2 in days (date2 - date1) */
/* date1 and date 2 are already javascript date objects */
// dateDifference(createdDate, currentTime) {
//   const _MS_PER_DAY = 1000 * 60 * 60 * 24;

//   // Discard the time and time-zone information.
//   const utc1 = Date.UTC(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
//   const utc2 = Date.UTC(createdDate.getFullYear(), createdDate.getMonth(), createdDate.getDate());

//   return Math.floor((utc2 - utc1) / _MS_PER_DAY);
// }





  // getCurrentUser(){
  //   this.authService.getCurrentUser().subscribe(data => {
  //     console.log('getting Current user ');
  //   }, error => {

  //     console.log('oups');
  //   });

  // }
  getUsers(): void {
    this.authService.getUsers()
      .subscribe(
        data => {
          this.currentUser = data;
          console.log(data);
          this.url = this.currentUser.imageUrl;
          console.log(this.url);
          this.base64Data = this.currentUser.imageUrl;
          this.url = 'data:image/jpeg;base64,' + this.base64Data;

        },
        error => {
          console.log(error);
        });
  }



  

  toApn(){
    document.getElementById("apn").scrollIntoView({behavior: "smooth", inline: "nearest" , block: 'center'});
  }

  toAction(){
    document.getElementById("action").scrollIntoView({behavior: "smooth", inline: "nearest" , block: 'center'});
  }
  
  toStat(){
    document.getElementById("stat").scrollIntoView({behavior: "smooth", inline: "nearest" , block: 'nearest'});
  }
  
  toTemoi(){
    document.getElementById("temoi").scrollIntoView({behavior: "smooth", inline: "nearest" , block: 'nearest'});
  }
  
  toTeam(){
    document.getElementById("team").scrollIntoView({behavior: "smooth", inline: "nearest" , block: 'center'});
  }
  
  toPartenaire(){
    document.getElementById("partenaire").scrollIntoView({behavior: "smooth", inline: "nearest",block: 'center' });
  }
  
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior: "smooth", inline: "nearest",block: 'center' });
  }
  

  toFormation(){
    document.getElementById("formation").scrollIntoView({behavior: "smooth", inline: "nearest",block: 'center' });
  }

  toWebinaire(){

  document.getElementById("webinaire").scrollIntoView({behavior: "smooth", inline: "nearest", block: 'center'});
  }



  toCalendrier(){
    document.getElementById("calendrier").scrollIntoView({behavior: "smooth", inline: "nearest", block: 'center'});


  }


  logout(){
    this.authService.logout();
  }

 


}
