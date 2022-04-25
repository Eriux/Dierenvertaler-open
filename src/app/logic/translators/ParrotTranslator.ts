import { Translator } from "./Translator";

export class ParrotTranslator implements Translator {
  public translate(text: string): string {
    let output = text.split(/\r?\n/);
    output = output.filter(o => o).map(o => "Ik praat je na: " + o);
    return output.join("\n");
  }

  public isLanguage(text: string): boolean {
    return /^Ik praat je na:.*$/.test(text);
  }
}