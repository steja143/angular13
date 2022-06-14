import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TejaComponent } from './teja.component';

describe('TejaComponent', () => {
  let component: TejaComponent;
  let fixture: ComponentFixture<TejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TejaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
