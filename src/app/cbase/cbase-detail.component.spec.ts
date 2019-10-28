import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbaseDetailComponent } from './cbase-detail.component';

describe('CbaseDetailComponent', () => {
  let component: CbaseDetailComponent;
  let fixture: ComponentFixture<CbaseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbaseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbaseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
