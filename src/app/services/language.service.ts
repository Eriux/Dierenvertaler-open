import { Injectable } from '@angular/core';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private _languages: Language[];

  constructor() {
    this._languages = [];

    this._languages.push(new Language(0, "human", "Mens", [1, 2, 3, 4]));
    this._languages.push(new Language(1, "labrador", "Labrador", [2, 4]));
    this._languages.push(new Language(2, "poodle", "Poedel", [1, 4]));
    this._languages.push(new Language(3, "parakeet", "Parkiet", [4]));
    this._languages.push(new Language(4, "parrot", "Papegaai", []));
  }
  
  public get languages() : Language[] {
    return this._languages;
  }

  public get translatableLanguages() : Language[] {
    return this._languages.filter(l => l.language !== "parrot");
  }
}
