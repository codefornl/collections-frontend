import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseDetailComponent } from './usecase-detail.component';

describe('UsecaseDetailComponent', () => {
  let component: UsecaseDetailComponent;
  let fixture: ComponentFixture<UsecaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
