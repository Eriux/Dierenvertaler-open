import { Translator } from "./Translator";

export class LabradorTranslator implements Translator {
  public translate(text: string): string {
    let regex: RegExp = /\w+/g;
    return text.replace(regex, "woef");
  }

  public isLanguage(text: string): boolean {
    let result = text.split(' ').filter(s => s != "woef");

    if (result.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}