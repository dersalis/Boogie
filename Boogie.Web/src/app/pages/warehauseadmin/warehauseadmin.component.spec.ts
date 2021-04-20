import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehauseadminComponent } from './warehauseadmin.component';

describe('WarehauseadminComponent', () => {
  let component: WarehauseadminComponent;
  let fixture: ComponentFixture<WarehauseadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehauseadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehauseadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
