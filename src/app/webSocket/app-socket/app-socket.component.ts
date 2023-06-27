import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
//import * as Stomp from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { RegisterPayload } from 'src/app/authentif/register-payload';

import Stomp from "stompjs"
import { Hello } from '../Hello';

@Component({
  selector: 'app-app-socket',
  templateUrl: './app-socket.component.html',
  styleUrls: ['./app-socket.component.scss']
})
export class AppSocketComponent implements OnInit {


  greetings: Hello[] = [];
  disabled = true;
  user: RegisterPayload;
  message: string;
  private stompClient = null;
  myDate:string;
  currentUser: RegisterPayload;
  
  
  constructor(private local: LocalStorageService) { 
    this.currentUser = this.local.retrieve('user');
  }

  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/twe-stomp-endpoint');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({}, function (frame) {
      _this.setConnected(true);
      console.log('Connected: ' + frame);

      _this.stompClient.subscribe('/topic/hi', function (hello) {
        _this.showGreeting(JSON.parse(hello.body));
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendName() {
    console.log(this.message)
    this.stompClient.send(
      '/twe/hello',
      {},
      JSON.stringify({ 'message': this.message, 
      'email': this.currentUser.email
    })
    );
  }

  showGreeting(hello: Hello) {
    this.greetings.push(hello);
  }


  ngOnInit(){
    
  }
}
