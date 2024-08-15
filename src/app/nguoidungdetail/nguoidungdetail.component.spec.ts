import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NguoidungdetailComponent } from './nguoidungdetail.component';

describe('NguoidungdetailComponent', () => {
  let component: NguoidungdetailComponent;
  let fixture: ComponentFixture<NguoidungdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NguoidungdetailComponent]
    });
    fixture = TestBed.createComponent(NguoidungdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
