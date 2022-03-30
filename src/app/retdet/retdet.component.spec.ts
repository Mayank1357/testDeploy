import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetdetComponent } from './retdet.component';

describe('RetdetComponent', () => {
  let component: RetdetComponent;
  let fixture: ComponentFixture<RetdetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetdetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetdetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
