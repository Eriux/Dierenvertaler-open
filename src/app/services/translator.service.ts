import { Injectable } from '@angular/core';
import { LabradorTranslator } from '../logic/translators/LabradorTranslator';
import { ParakeetTranslator } from '../logic/translators/ParakeetTranslator';
import { ParrotTranslator } from '../logic/translators/ParrotTranslator';
import { PoodleTranslator } from '../logic/translators/PoodleTranslator';
import { Translator } from '../logic/translators/Translator';
import { Language } from '../models/language';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  private _translators: Map<string, Translator>;

  constructor() {
    this._translators = new Map<string, Translator>();
    this._translators.set("labrador", new LabradorTranslator());
    this._translators.set("poodle", new PoodleTranslator());
    this._translators.set("parakeet", new ParakeetTranslator());
    this._translators.set("parrot", new ParrotTranslator());
  }

  /**
   * Translates the input text.
   *
   * @param text - The text to be translated.
   * @param language - The language to translate to.
   * @returns translated text.
   */
  translate(text: string, language: Language): string {
    let translator: Translator | undefined = this._translators.get(language.language);

    if (translator) {
      return translator.translate(text);
    } else {
      throw 'Invalid translator string, that translator does not exist.'
    }
  }

  /**
   * Checks if the given string matches the given language.
   *
   * @param text - The text to be checked.
   * @param language - The language it should match.
   * @returns True when the language matches false when it does not.
   */
  checkLanguage(text: string, language: Language): boolean {
    if (language.language === "human") {
      return true;
    }

    let translator: Translator | undefined = this._translators.get(language.language);

    if (translator) {
      return translator.isLanguage(text.trim().toLocaleLowerCase());
    }

    return false;
  }
}
