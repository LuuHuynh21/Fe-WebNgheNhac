import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaitroComponent } from './vaitro.component';

describe('VaitroComponent', () => {
  let component: VaitroComponent;
  let fixture: ComponentFixture<VaitroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaitroComponent]
    });
    fixture = TestBed.createComponent(VaitroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
