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
  
  friends: FriendSchema[] = [];

  pushToFriends(data: FriendSchema){
    this.friends.push(data);
    console.log(this.friends)
  }
}
