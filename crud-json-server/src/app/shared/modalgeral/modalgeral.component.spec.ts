import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalgeralComponent } from './modalgeral.component';

describe('ModalgeralComponent', () => {
  let component: ModalgeralComponent;
  let fixture: ComponentFixture<ModalgeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalgeralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalgeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
