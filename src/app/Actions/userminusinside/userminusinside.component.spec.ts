import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserminusinsideComponent } from './userminusinside.component';

describe('UserminusinsideComponent', () => {
  let component: UserminusinsideComponent;
  let fixture: ComponentFixture<UserminusinsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserminusinsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserminusinsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
