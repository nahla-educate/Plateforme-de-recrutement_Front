import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocalStorageService } from 'ngx-webstorage';
import { RegisterPayload } from 'src/app/authentif/register-payload';
import { Notif } from 'src/app/components/common/header-style-one/notification';

import { NotifService } from 'src/app/notif.service';

@Component({
  selector: 'app-notification-detail',
  templateUrl: './notification-detail.component.html',
  styleUrls: ['./notification-detail.component.scss']
})
export class NotificationDetailComponent implements OnInit {
  currentUser: RegisterPayload;
  notifications:Notif = new Notif();
  notificationId: any;

  constructor( private notifService : NotifService,
    private route: ActivatedRoute,
    private localStorageService: LocalStorageService,) { 
      this.currentUser= localStorageService.retrieve('user');
    }

  ngOnInit(): void {
    this.notificationId = this.route.snapshot.params['id'];
    this.getNotificationById();

  }

  getNotificationById(){
    this.notifService.getNotifById(this.notificationId).subscribe(
      response => {
        this.notifications = response;
        console.log(this.notifications);   
   });
}

}
