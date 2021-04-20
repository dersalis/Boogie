import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutshopComponent } from './layoutshop.component';

describe('LayoutshopComponent', () => {
  let component: LayoutshopComponent;
  let fixture: ComponentFixture<LayoutshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
