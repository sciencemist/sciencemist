import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaMonComponent } from './hola-mon.component';

describe('HolaMonComponent', () => {
  let component: HolaMonComponent;
  let fixture: ComponentFixture<HolaMonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HolaMonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HolaMonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
