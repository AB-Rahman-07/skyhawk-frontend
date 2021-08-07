import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyEnforcerComponent } from './policy-enforcer.component';

describe('PolicyEnforcerComponent', () => {
  let component: PolicyEnforcerComponent;
  let fixture: ComponentFixture<PolicyEnforcerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyEnforcerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyEnforcerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
