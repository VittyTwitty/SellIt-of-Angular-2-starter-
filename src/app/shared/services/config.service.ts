import { Injectable } from "@angular/core";

@Injectable()

export class ConfigService {
    public static localSrc  = 'http://fe-kurs.light-it.loc:38000/api/';
    public homeSrc = 'http://fe-kurs.light-it.net:38000/api/';

    public  static mediaSrc: string = 'http://fe-kurs.light-it.net:38000';
}