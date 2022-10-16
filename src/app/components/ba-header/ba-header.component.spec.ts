import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaHeaderComponent } from './ba-header.component';


describe('BaHeaderComponent', () => {
  let component: BaHeaderComponent;
  let fixture: ComponentFixture<BaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
