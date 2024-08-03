import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopalbumComponent } from './topalbum.component';

describe('TopalbumComponent', () => {
  let component: TopalbumComponent;
  let fixture: ComponentFixture<TopalbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopalbumComponent]
    });
    fixture = TestBed.createComponent(TopalbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
