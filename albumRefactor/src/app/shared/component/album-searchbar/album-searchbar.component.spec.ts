import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSearchbarComponent } from './album-searchbar.component';

describe('AlbumSearchbarComponent', () => {
  let component: AlbumSearchbarComponent;
  let fixture: ComponentFixture<AlbumSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
