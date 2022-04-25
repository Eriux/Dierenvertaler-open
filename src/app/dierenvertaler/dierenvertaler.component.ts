import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Language } from '../models/language';
import { LanguageService } from '../services/language.service';
import { TranslatorService } from '../services/translator.service';

@Component({
  selector: 'app-dierenvertaler',
  templateUrl: './dierenvertaler.component.html',
  styleUrls: ['./dierenvertaler.component.scss']
})
export class DierenvertalerComponent implements OnInit {

  translateForm: FormGroup;

  languages: Language[];
  sourceLanguages: Language[];
  targetLanguages: Language[];

  textIsValid: boolean;
  output: string;

  constructor(private formBuilder: FormBuilder, private translator: TranslatorService, private languageService: LanguageService) {
    this.translateForm = this.formBuilder.group({
      inputText: new FormControl('', [
        Validators.required
      ]),
      sourceLanguage: new FormControl('', [
        Validators.required
      ]),
      outputLanguage: new FormControl('')
    });

    this.sourceLanguages = [];
    this.targetLanguages = [];
    this.textIsValid = true;
    this.output = '';

    this.languages = this.languageService.languages;

    this.updateSourceLanguages();
    this.updateTargetLanguages(this.sourceLanguages[0]);
  }

  ngOnInit(): void {
    this.translateForm.get('sourceLanguage')?.valueChanges.subscribe(c => {
      this.updateTargetLanguages(c);
    });
  }

  onSubmit(formdata: any): void {
    this.output = '';

    if(this.translateForm.invalid) {
      return;
    }

    if(!this.translator.checkLanguage(formdata.inputText, formdata.sourceLanguage)) {
      this.textIsValid = false;
      return;
    }

    this.textIsValid = true;

    this.output = this.translator.translate(formdata.inputText, formdata.outputLanguage);
  }

  updateSourceLanguages() {
    this.sourceLanguages = this.languageService.translatableLanguages;
    this.translateForm.get('sourceLanguage')?.setValue(this.sourceLanguages[0]);
  }

  updateTargetLanguages(language: Language) {
    this.targetLanguages = this.languages.filter(l => language.translatesTo.includes(l.id));
  }

  get inputText() {
    return this.translateForm.get('inputText');
  }
  get sourceLanguage() {
    return this.translateForm.get('sourceLanguage');
  }
}
