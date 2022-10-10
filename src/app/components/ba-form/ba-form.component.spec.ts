import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaFormComponent } from './ba-form.component';

describe('BaFormComponent', () => {
  let component: BaFormComponent;
  let fixture: ComponentFixture<BaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
