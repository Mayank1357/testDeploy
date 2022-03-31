import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainreportpageComponent } from './mainreportpage.component';

describe('MainreportpageComponent', () => {
  let component: MainreportpageComponent;
  let fixture: ComponentFixture<MainreportpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainreportpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainreportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
