import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildCompSendingViewportComponent } from './child-comp-sending-viewport/child-comp-sending-viewport.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
//Child to parent component with viewport
  messageFromChildComp1 !: string;
  @ViewChild(ChildCompSendingViewportComponent) comp !: ChildCompSendingViewportComponent   
  
  ngAfterViewInit(){
    console.log(this.comp);
    this.messageFromChildComp1 = this.comp.childMessage;
    //throw new Error('Method not implemented.');
    //console.log(this.messageFromChildComp1);
  }
  title = 'share-data';




  //Parent to child component
  parentVariable = "Message From Parent Component ";



//Child to parent component with output
messageFromChildComp2 !: string;
 messageIncoming(event : any){
  // console.log(event);
  this.messageFromChildComp2 = event; 
 }
}
