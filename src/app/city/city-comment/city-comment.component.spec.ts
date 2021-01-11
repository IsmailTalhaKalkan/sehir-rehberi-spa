import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCommentComponent } from './city-comment.component';

describe('CityCommentComponent', () => {
  let component: CityCommentComponent;
  let fixture: ComponentFixture<CityCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
