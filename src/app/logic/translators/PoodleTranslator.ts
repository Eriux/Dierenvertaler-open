import { Translator } from "./Translator";

export class PoodleTranslator implements Translator {
  public translate(text: string): string {
    let regex: RegExp = /\w+/g;
    return text.replace(regex, "woefie");
  }

  public isLanguage(text: string): boolean {
    let result = text.split(' ').filter(s => s != "woefie");

    if (result.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}