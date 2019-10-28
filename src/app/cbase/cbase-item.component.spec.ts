import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbaseItemComponent } from './cbase-item.component';

describe('CbaseItemComponent', () => {
  let component: CbaseItemComponent;
  let fixture: ComponentFixture<CbaseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbaseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
