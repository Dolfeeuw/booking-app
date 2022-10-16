import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaFormComponent } from './ba-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';

describe('BaFormComponent', () => {
  let component: BaFormComponent;
  let fixture: ComponentFixture<BaFormComponent>;
  let controller: ApolloTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaFormComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [ApolloTestingModule]
    })
    .compileComponents();
    controller = TestBed.inject(ApolloTestingController);

    fixture = TestBed.createComponent(BaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    afterEach(() => {
    controller.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
