import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NghesiComponent } from './nghesi.component';

describe('NghesiComponent', () => {
  let component: NghesiComponent;
  let fixture: ComponentFixture<NghesiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NghesiComponent]
    });
    fixture = TestBed.createComponent(NghesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
