import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FormBuilder } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private fb : FormBuilder,
              private _registrationService: RegistrationService){}
  
  title = 'reactive-forms';




  registrationForm = this.fb.group({
    userName:[''],
    password:[''],
    ConfirmPassword:[''],
    address: this.fb.group({
      city:[''],
      state:[''],
      postalCode:['']
    })
  });
  
  
  
  // registrationForm = new FormGroup({
  //   userName : new FormControl(''),
  //   password : new FormControl(''),
  //   ConfirmPassword : new FormControl(''),
  //   address : new FormGroup({
  //     city : new FormControl(''),
  //     state : new FormControl(''),
  //     postalCode : new FormControl('')
  //   })
  // });

  loadApiData(){
    // this.registrationForm.setValue({
    //   userName : 'abcd',
    // password :'abcd',
    // ConfirmPassword : 'abcd',
    // address : {
    //   city : 'city',
    //   state : 'state',
    //   postalCode : '9876543'
    // }
    // });


    // this.registrationForm.patchValue({
    //   userName : 'abcd',
    // password :'abcd',
    // ConfirmPassword : 'abcd',
    // // address : {
    // //   city : 'city',
    // //   state : 'state',
    // //   postalCode : '9876543'
    // // }
    // });
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this._registrationService.register(this.registrationForm.value)
    .subscribe(
      Response=>console.log(Response),
    error=>console.error(error));
  }
}
