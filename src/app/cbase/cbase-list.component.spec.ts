import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbaseListComponent } from './cbase-list.component';

describe('CbaseListComponent', () => {
  let component: CbaseListComponent;
  let fixture: ComponentFixture<CbaseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbaseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
