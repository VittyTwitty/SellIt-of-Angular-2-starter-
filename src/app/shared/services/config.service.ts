import { Injectable } from '@angular/core';

@Injectable()

export class ConfigService {

    public mainSrc = 'http://fe-kurs.light-it.net:38000/api/';

    public static mediaSrc: string = 'http://fe-kurs.light-it.net:38000';
}
