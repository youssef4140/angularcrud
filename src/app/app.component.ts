import { Component} from '@angular/core';

export interface FriendSchema {
  firstName: string;
  lastName: string;
  email:string;
  number: number;
  editing: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-contacts-app';
  
  friends: FriendSchema[] = [{
    "firstName": "ahmed",
    "lastName": "khaled",
    "email": "ahmed@gmail.com",
    "number": 7777777777,
    "editing": false,
  },
  {
    "firstName": "mohammed",
    "lastName": "ali",
    "email": "mohammed@gmail.com",
    "number": 8888888888,
    "editing": false,
  },
  {
    "firstName": "sara",
    "lastName": "abdelrahman",
    "email": "sara@gmail.com",
    "number": 9999999999,
    "editing": false,
  },
  {
    "firstName": "emad",
    "lastName": "hassan",
    "email": "emad@gmail.com",
    "number": 1111111111,
    "editing": false,
  },
  {
    "firstName": "salma",
    "lastName": "karim",
    "email": "salma@gmail.com",
    "number": 2222222222,
    "editing": false,
  },
  ];

  pushToFriends(data: FriendSchema){
    this.friends.push(data);
    console.log(this.friends)
  }
}
