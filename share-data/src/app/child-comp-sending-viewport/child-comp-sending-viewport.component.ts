import { Component } from '@angular/core';

@Component({
  selector: 'app-child-comp-sending-viewport',
  templateUrl: './child-comp-sending-viewport.component.html',
  styleUrls: ['./child-comp-sending-viewport.component.scss']
})
export class ChildCompSendingViewportComponent {
  childMessage : string = "Message from from child-comp-sending-viewport";

}
