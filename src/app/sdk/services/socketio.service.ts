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
    const socketUrl = 'http://localhost:5100';
    this.socket = io(socketUrl);
    this.socket.on('connect', () => {
      console.log('socket connected');
    });
  }

  onEvent() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('event', (data: any) => {
        observer.next(data);
      });
    });
  }
}
