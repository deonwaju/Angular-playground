import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

 allowNewServer = false;
 serverCreationStatus = "No server was created";
 serverName = 'TestServer';

 serverStatus = 'offline'
 serverId = 10


  constructor() { 
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
  }

  ngOnInit(): void {
  }

  getServerStatus() {
    this.serverStatus;
  }

  onCreateServer() {
    this.serverCreationStatus = "Server was created: server name is " + this.serverName;
  }

  onUpdateServerName(event: Event) { 
    this.serverName = (<HTMLInputElement>event.target).value;
  

  }


}
