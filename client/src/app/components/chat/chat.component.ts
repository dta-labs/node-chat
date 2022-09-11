import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  userChat = {
    name: '',
    text: ''
  };

  myMessages: any;
  eventName = "send-message";

  constructor(private actived : ActivatedRoute, private webService : WebSocketService) { }

  ngOnInit(): void {
    const id = this.actived.snapshot.params['id'];
    this.userChat.name = id;

    this.webService.listen('text-event').subscribe((data: any) => {
      this.myMessages = data;
    })
  }

  myMessage() {
    this.webService.emit(this.eventName, this.userChat.text);
    this.userChat.text = '';
  }

}
