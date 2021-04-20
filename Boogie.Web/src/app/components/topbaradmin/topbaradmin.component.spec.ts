import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbaradminComponent } from './topbaradmin.component';

describe('TopbaradminComponent', () => {
  let component: TopbaradminComponent;
  let fixture: ComponentFixture<TopbaradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbaradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
