import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss'],
})
export class FormCourseComponent implements OnInit {
  @Output()
  onAddArticle: EventEmitter<any> = new EventEmitter();

  article: FormGroup = this.fb.group({
    designation: ['', Validators.required],
    prix: ['', Validators.required],
  });

  submitted: boolean = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  private resetForm(): void {
    this.article.reset();
    this.submitted = false;
  }

  public onSubmit(): void {
    this.submitted = true;

    if (this.article.valid) {
      this.onAddArticle.emit(this.article.value);
      this.resetForm();
    } else {
      throw new Error('ERROR');
    }
  }

  get form() {
    return this.article.controls;
  }
}
