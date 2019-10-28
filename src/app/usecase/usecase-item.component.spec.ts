import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseItemComponent } from './usecase-item.component';

describe('UsecaseItemComponent', () => {
  let component: UsecaseItemComponent;
  let fixture: ComponentFixture<UsecaseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecaseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
