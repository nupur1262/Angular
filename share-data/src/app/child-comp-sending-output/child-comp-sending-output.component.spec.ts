import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompSendingOutputComponent } from './child-comp-sending-output.component';

describe('ChildCompSendingOutputComponent', () => {
  let component: ChildCompSendingOutputComponent;
  let fixture: ComponentFixture<ChildCompSendingOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildCompSendingOutputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCompSendingOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
