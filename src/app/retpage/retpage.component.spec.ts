import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetpageComponent } from './retpage.component';

describe('RetpageComponent', () => {
  let component: RetpageComponent;
  let fixture: ComponentFixture<RetpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
