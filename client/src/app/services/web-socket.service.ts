import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {

  socket: any;
  server = "http://localhost:3000";

  constructor() { 
    this.socket = io(this.server);
  }

  listen(eventName: String) {
    return new Observable((Subscriber) => {
      this.socket.on(eventName, (data: any) => {
        Subscriber.next(data);
      })
    }) 
  }

  emit(eventName: String, data: any) {
    this.socket.emit(eventName, data);
  }

}
