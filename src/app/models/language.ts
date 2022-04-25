export class Language {
    private _id: number;
    private _language: string;
    private _displayName: string;
    private _translatesTo: number[];

    constructor(id: number, language: string, name: string, translatesTo: number[]) {
        this._id = id;
        this._language = language;
        this._displayName = name;
        this._translatesTo = translatesTo;
    }

    public get id(): number {
        return this._id;
    }
    
    public get language(): string {
        return this._language;
    }

    public get displayName(): string {
        return this._displayName;
    }

    public get translatesTo(): number[] {
        return this._translatesTo;
    }
}