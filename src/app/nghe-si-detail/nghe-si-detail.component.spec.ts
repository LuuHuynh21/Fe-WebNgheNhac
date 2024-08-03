import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgheSiDetailComponent } from './nghe-si-detail.component';

describe('NgheSiDetailComponent', () => {
  let component: NgheSiDetailComponent;
  let fixture: ComponentFixture<NgheSiDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgheSiDetailComponent]
    });
    fixture = TestBed.createComponent(NgheSiDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
