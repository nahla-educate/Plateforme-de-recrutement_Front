import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notif } from './components/common/header-style-one/notification';

const API_URL = environment.apiBaseUrl;
@Injectable({
  providedIn: 'root'
})
export class NotifService {
  constructor(private httpClient:HttpClient) { }
  private _listners = new Subject<any>();
  listen(): Observable<any>{
    return this._listners.asObservable();
  }
  filter(filterBy: string){
    this._listners.next(filterBy);
  }

  sendNotif(notif, userId) :Observable<any> {
    return this.httpClient.post<Notif>('http://localhost:8080/notification/sendNotification/'+userId, notif);
  }

  sendNotif1(notif, userId) :Observable<any> {
    return this.httpClient.post<Notif>('http://localhost:8080/notification/sendNotification1/'+userId, notif);
  }
  sendNotif2(notif, userId) :Observable<any> {
    return this.httpClient.post<Notif>('http://localhost:8080/notification/sendNotification2/'+userId, notif);
  }

  getNotif(userId) :Observable<any> {
    return this.httpClient.get<Notif>('http://localhost:8080/notification/'+userId);
  }

  updateNotif(notif) :Observable<any> {
    return this.httpClient.put<any>('http://localhost:8080/notification/updateNotification', notif);
  }

  getNombreNotificationNonLu(userId) :Observable<any> {
    return this.httpClient.get<Notif>('http://localhost:8080/notification/nombreNotification/'+userId);
  }

  getNotifById(notificationId) :Observable<any> {
    return this.httpClient.get<Notif>('http://localhost:8080/notification/getNotificationById/'+notificationId);
  }



}
