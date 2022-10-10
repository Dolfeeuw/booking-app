import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaInputComponent } from './ba-input.component';

describe('BaInputComponent', () => {
  let component: BaInputComponent;
  let fixture: ComponentFixture<BaInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
