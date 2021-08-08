import * as io from 'socket.io-client';

import { Observable, Observer } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  socket: SocketIOClient.Socket;
  socketId: any;
  constructor() {
    console.log('constructer called');
    const socketUrl = 'http://192.168.18.26:3000';
    this.socket = io(socketUrl, {
      //   withCredentials: true,
      //   extraHeaders: {
      //     'my-custom-header': 'abcd',
      //   },
    });
    this.socket.on('connection', () => {
      console.log('socket connected');
    });
  }

  onEvent() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('events', (data: any) => {
        observer.next(data);
      });
    });
  }
}
