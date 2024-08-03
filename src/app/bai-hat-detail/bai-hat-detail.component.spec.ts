import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiHatDetailComponent } from './bai-hat-detail.component';

describe('BaiHatDetailComponent', () => {
  let component: BaiHatDetailComponent;
  let fixture: ComponentFixture<BaiHatDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaiHatDetailComponent]
    });
    fixture = TestBed.createComponent(BaiHatDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
