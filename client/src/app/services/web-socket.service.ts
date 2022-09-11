import { Injectable } from '@angular/core';
import * from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WebSocketService {

  socket: any;
  server: "http://localhost:3000";

  constructor() { 
    this.socket = io(this.server);
  }

  listen(eventName; String) {
    return new Observable((Subscriber) => {
      this.socket.on(eventName, (data) => {
        Subscriber.next(data);
      })
    }) 
  }

  emit(eventName: String, data: String) {
    this.socket.emit(eventName, data);
  }

}
