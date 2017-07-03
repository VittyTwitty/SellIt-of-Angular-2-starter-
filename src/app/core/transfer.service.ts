import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TransferService {
    private results: Object;
    private searchTerm = new Subject<Object>();

    public setResults(results: Object) {
        this.results = results;
        this.searchTerm.next(results);
    }
    public getResults(): Observable<String> {
        return  this.searchTerm.asObservable();
    }

}
