import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlxtremeeComponent } from './flxtremee.component';

describe('FlxtremeeComponent', () => {
  let component: FlxtremeeComponent;
  let fixture: ComponentFixture<FlxtremeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlxtremeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlxtremeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
