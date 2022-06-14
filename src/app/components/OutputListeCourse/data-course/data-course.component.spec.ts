import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCourseComponent } from './data-course.component';

describe('DataCourseComponent', () => {
  let component: DataCourseComponent;
  let fixture: ComponentFixture<DataCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
