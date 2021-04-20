import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationadminComponent } from './navigationadmin.component';

describe('NavigationadminComponent', () => {
  let component: NavigationadminComponent;
  let fixture: ComponentFixture<NavigationadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigationadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
