import { Component, EventEmitter, Output } from '@angular/core';

import { FormGroup, FormBuilder, Validators} from '@angular/forms';




@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  form: FormGroup;
  constructor(private _f: FormBuilder) {
    this.form = this._f.group({
      firstName: ['',Validators.required],
      lastName: '',
      email:'',
      number: ['',Validators.required],
    });
  }

  @Output() formData = new EventEmitter();

  onsubmit(){
    if(this.form.valid){
      console.log(this.form.value);
      const contact = this.form.value
      contact.editing = false;
      this.formData.emit(contact);
      this.form.reset();
    }
  }
  cancel(){
    this.form.reset();
  }

}
