import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLoaiDetailComponent } from './the-loai-detail.component';

describe('TheLoaiDetailComponent', () => {
  let component: TheLoaiDetailComponent;
  let fixture: ComponentFixture<TheLoaiDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TheLoaiDetailComponent]
    });
    fixture = TestBed.createComponent(TheLoaiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
