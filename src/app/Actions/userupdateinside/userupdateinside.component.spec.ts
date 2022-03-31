import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserupdateinsideComponent } from './userupdateinside.component';

describe('UserupdateinsideComponent', () => {
  let component: UserupdateinsideComponent;
  let fixture: ComponentFixture<UserupdateinsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserupdateinsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserupdateinsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
