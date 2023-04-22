import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { ChildCompSendingViewportComponent } from './child-comp-sending-viewport/child-comp-sending-viewport.component';
import { ChildCompSendingOutputComponent } from './child-comp-sending-output/child-comp-sending-output.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCompComponent,
    ChildCompSendingViewportComponent,
    ChildCompSendingOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
