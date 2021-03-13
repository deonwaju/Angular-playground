import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-component',
  templateUrl: './practice-component.component.html',
  styleUrls: ['./practice-component.component.css']
})
export class PracticeComponentComponent implements OnInit {

  myPlayGroundName = ''
  userNameStatus= "No username was entered"
  allowNewUserName = false
  userNameCreated = false

  constructor() { 
    setTimeout(() => {
      this.allowNewUserName = true
    }, 3000
    );
  }

  ngOnInit(): void {
  }

  onEnterUserName() {
    this.userNameCreated = true;
    this.userNameStatus = "Username is set as: " + this.myPlayGroundName;
  }

  onUpdateUserName(event: Event) {
    this.myPlayGroundName = (<HTMLInputElement>event.target).value;
        console.log(event);
  }

  getColor(){
    
  }


}
