import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'share-data-task';

  postTitle : string = "Message from comp"; 
  Link : string = "";
  postLink : string = "";

}
