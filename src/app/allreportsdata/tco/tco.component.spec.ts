import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TcoComponent } from './tco.component';

describe('TcoComponent', () => {
  let component: TcoComponent;
  let fixture: ComponentFixture<TcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TcoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
