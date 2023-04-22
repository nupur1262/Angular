import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp-sending-output',
  templateUrl: './child-comp-sending-output.component.html',
  styleUrls: ['./child-comp-sending-output.component.scss']
})
export class ChildCompSendingOutputComponent {

  message : string = 'Message from child-comp-sending-output';
  @Output() outputEvent = new EventEmitter<string>();

  sendMessage(){
    //console.log("sendMessage is being called");
    this.outputEvent.emit(this.message);
  }
}
