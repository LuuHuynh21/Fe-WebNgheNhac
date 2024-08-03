import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbaihatComponent } from './topbaihat.component';

describe('TopbaihatComponent', () => {
  let component: TopbaihatComponent;
  let fixture: ComponentFixture<TopbaihatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopbaihatComponent]
    });
    fixture = TestBed.createComponent(TopbaihatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
