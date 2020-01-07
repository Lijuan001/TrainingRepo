import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneOpenpanelComponent } from './one-openpanel.component';

describe('OneOpenpanelComponent', () => {
  let component: OneOpenpanelComponent;
  let fixture: ComponentFixture<OneOpenpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneOpenpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneOpenpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
