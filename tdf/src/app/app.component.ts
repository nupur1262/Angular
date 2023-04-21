import { Component } from '@angular/core';
import { User } from './user';
import { EnrollmentService } from './enrollment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdf';
  errorMsg = '';
  topics = ['Angular' , 'React' , 'Vue'];
  submitted = false;
  userModel = new User('Rob' , 'email@email.com' , 57234890 , '' , 'morning' , true);
  


  constructor(private _enrollmentService : EnrollmentService) {}
  onSubmit(userForm: any){
    console.log(userForm);
    // this.submitted=true;
    // console.log(this.userModel);
    // this._enrollmentService.enroll(this.userModel)
    //   .subscribe(
    //     // (data: any) => {
    //     //   console.log('Success', data),
    //     //     (error: any) => {
    //     //     //console.log('Error!', error);
    //     //     this.errorMsg = error.statusText;
    //     //     console.log(this.errorMsg);
    //     //   }
    //     // }

    //     data=>console.log('Success', data),
    //     error=>this.errorMsg=error.statusText
    //   )
  }
}
