import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNotifComponent } from './form-notif.component';

describe('FormNotifComponent', () => {
  let component: FormNotifComponent;
  let fixture: ComponentFixture<FormNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNotifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
