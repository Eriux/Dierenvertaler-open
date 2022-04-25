import { Translator } from "./Translator";

export class ParakeetTranslator implements Translator {
  public translate(text: string): string {
    let vowels: RegExp = /[aeoiu]/g;
    let output: Array<string> = [];

    text.split(' ').forEach(s => {
      if (s.charAt(0).match(vowels)) {
        output.push("tjilp");
      } else {
        output.push("piep");
      }
    });

    return output.join(" ");
  }

  public isLanguage(text: string): boolean {
    let result = text.split(' ').filter(s => s != "tjilp" && s != "piep");

    if (result.length > 0) {
      return false;
    } else {
      return true;
    }
  }
}