import { Component, OnInit } from '@angular/core';
// importer les modules de formulaire //
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-liste-courses',
  templateUrl: './reactive-liste-courses.component.html',
  styleUrls: ['./reactive-liste-courses.component.scss']
})
export class ReactiveListeCoursesComponent implements OnInit {

  article: FormGroup;
  articles: any[] = [];

  constructor() {
  // declarer que notre attribut article est constitué de plusieurs champs
  this.article = new FormGroup ({
    // on lui passe un objet en parametre
    // differente instance de formControl
    // regrouper plusieurs instance dans un objet
    // on peut lui donner une valeur par defaut mais nous vide
      designation: new FormControl(''),
      prix: new FormControl('')
  })
  }

  // methodes :
  ngOnInit(): void {
  }

  /**
   * Permet d'ajouter un article à la liste des articles
   */
  addArticle() {
    this.articles.push(this.article.value);
    // remettre les champs a zero :
    this.article.reset();
  }

  /**
   *
   * faire un getter pour generer l'information
   * ajouter la logique pour additionner
   */
  get totalPrice():number {

    return this.articles.reduce((total, article) => total + article.prix, 0);
  /*
    let total = 0;
    for (let article of this.articles) {
      total += article.prix;
    }

    return total;*/
  }
}
