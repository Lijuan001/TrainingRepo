import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSignupButtonComponent } from './album-signup-button.component';

describe('AlbumSignupButtonComponent', () => {
  let component: AlbumSignupButtonComponent;
  let fixture: ComponentFixture<AlbumSignupButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumSignupButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSignupButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
