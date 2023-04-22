import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompSendingViewportComponent } from './child-comp-sending-viewport.component';

describe('ChildCompSendingViewportComponent', () => {
  let component: ChildCompSendingViewportComponent;
  let fixture: ComponentFixture<ChildCompSendingViewportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompSendingViewportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCompSendingViewportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
