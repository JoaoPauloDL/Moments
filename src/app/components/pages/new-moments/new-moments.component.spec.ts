import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewMomentsComponent } from './new-moments.component';

describe('NewMomentsComponent', () => {
  let component: NewMomentsComponent;
  let fixture: ComponentFixture<NewMomentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMomentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMomentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
