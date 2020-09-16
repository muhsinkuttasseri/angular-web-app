import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId: number=123;
  ServerStatus: String='offline'

  constructor() { }

  ngOnInit(): void {
  }

}
