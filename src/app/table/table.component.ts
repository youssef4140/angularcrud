import { Component, Input, } from '@angular/core';
import { AppModule } from '../app.module';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';



export interface FriendSchema {
  firstName: string;
  lastName: string;
  email:string;
  number: number;
  editing: boolean;
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})



export class TableComponent  {
  searchText:any;

  @Input() friends: FriendSchema[] = [];
  

  DeleteContact(i: number){
    this.friends.splice(i, 1);
  }

  EditContact(i: number){
    this.friends[i].editing = !this.friends[i].editing
  }


  form: FormGroup;
  constructor(private _f: FormBuilder) {
    this.form = this._f.group({
      firstName: '',
      lastName: '',
      email:'',
      number: ['',Validators.required],
    });
  }


  editfirstname(i:number,event: any){
    // console.log(event.target.value)
    this.friends[i].firstName = event.target.value
  }
  editlastname(i:number,event: any){
    this.friends[i].lastName = event.target.value
  }
  editnumber(i:number,event: any){
    this.friends[i].number = event.target.value
  }
  editemail(i:number,event: any){
    this.friends[i].email = event.target.value
  }

  
}


