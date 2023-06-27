import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActualityComponent } from './add-actuality.component';

describe('AddActualityComponent', () => {
  let component: AddActualityComponent;
  let fixture: ComponentFixture<AddActualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddActualityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
