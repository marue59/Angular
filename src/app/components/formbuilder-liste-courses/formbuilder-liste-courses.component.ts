import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { retry } from 'rxjs';
@Component({
  selector: 'app-formbuilder-liste-courses',
  templateUrl: './formbuilder-liste-courses.component.html',
  styleUrls: ['./formbuilder-liste-courses.component.scss']
})

export class FormbuilderListeCoursesComponent implements OnInit {

  // construction d'un objet
  article : FormGroup = this.formBuilder.group({
    designation: ["", Validators.required],
    prix: ["", Validators.required],
  })

  // déclare ma liste
  articles: any[] = [];

  // booleen qui permet de savoir si le form a deja été soumis ou non
  submitted: boolean = false;

  // injection de dépendance :
  // declarer une variable dans les para du constuct
  // lui dire tu es dependant de ca :
  constructor(private formBuilder: FormBuilder) {
  }

  get totalPrice(): number {
    return this.articles.reduce((total, article) => total + article.prix, 0)
  }

  get form() {
    return this.article.controls;
  }

  ngOnInit(): void {}

  private addArticle() : void {
    this.articles.push(this.article.value);
    this.article.reset();
    this.submitted = false;
  }

  // ce qu'il se passe quand je click sur la methode submit :
  public onSubmit(): boolean {
    this.submitted = true;

    if(this.article.invalid) {
        return false;
    } else {
      this.addArticle();
      return true;
    }
  }
}
