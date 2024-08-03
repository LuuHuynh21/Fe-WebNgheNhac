import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaihatComponent } from './baihat.component';

describe('BaihatComponent', () => {
  let component: BaihatComponent;
  let fixture: ComponentFixture<BaihatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaihatComponent]
    });
    fixture = TestBed.createComponent(BaihatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
