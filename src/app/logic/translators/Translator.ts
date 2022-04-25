export interface Translator {
    /**
     * Translates the input text.
     *
     * @param text - The input text to be translated.
     * @returns translated text.
     */
    translate(text: string): string;

    /**
     * Checks if the input text matches the language of this object.
     *
     * @param text - The input text to be checked.
     * @returns True when the language matches false when it does not.
     */
    isLanguage(text: string): boolean;
}