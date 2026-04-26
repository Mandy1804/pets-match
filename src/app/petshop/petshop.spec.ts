import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Petshop } from './petshop';

describe('Petshop', () => {
  let component: Petshop;
  let fixture: ComponentFixture<Petshop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Petshop],
    }).compileComponents();

    fixture = TestBed.createComponent(Petshop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
