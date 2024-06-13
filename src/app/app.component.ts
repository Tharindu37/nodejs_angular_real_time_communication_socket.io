import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import socketIo from 'socket.io-client';
import io from 'socket.io-client';
const socket = io('http://localhost:3000');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'real_time_communication';

  ngOnInit(): void {
    // const socket = socketIo('http://localhost:3000');
    // socket.on('hello', (data) => console.log(data));
    socket.on('data1', (res) => {
      console.log('Data 1', res);
    });

    socket.on('data2', (res) => {
      console.log('Data 2', res);
    });
  }
}
