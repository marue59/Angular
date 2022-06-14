import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-course',
  templateUrl: './data-course.component.html',
  styleUrls: ['./data-course.component.scss'],
})
export class DataCourseComponent implements OnInit {
  courses: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  addArticle(article: any) {
    this.courses.push(article);
  }

  get total() {
    return this.courses.reduce((total, article) => total + article.prix, 0);
  }
}
