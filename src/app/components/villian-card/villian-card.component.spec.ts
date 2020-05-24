import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VillianCardComponent } from './villian-card.component';

describe('VillianCardComponent', () => {
  let component: VillianCardComponent;
  let fixture: ComponentFixture<VillianCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillianCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VillianCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
