import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../../../core/search.service';
import { Products } from '../../footer/products';
import { PostService } from '../../../core/posts.service';
import { TransferService } from '../../../core/transfer.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'sellit-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss']

})

export class SearchComponent implements OnInit {
    public sub: Subscription;
    public searchFlag: boolean = false;
    public results: Object = null;

    public ddd: string = '112';

    constructor(
        private transferService: TransferService,
        private postService: PostService,
        private searchService: SearchService) {
        this.sub = this.transferService.getResults()
            .subscribe(
            (res) => {
                if (res.length === 0) {
                    this.searchFlag = false;
                } else {
                    this.searchFlag = true;
                }
            });

    }

    public search(term: string): void {
        this.transferService.setResults(term);
    }

    public ngOnInit() {
        this.searchService.search(this.searchValue())
            .subscribe((res) => {
                // console.log(res);
                this.results = res;
            });
    }

    public searchValue(): Observable<string> {
        return this.transferService.getResults();
    }

    // public deletePost() {
    //     this.postService.deletePost(this.ddd)
    //         .subscribe(
    //         (data) => {
    //             console.log(data);
    //         });
    // }
    // public deletePhoto() {
    //     this.postService.deletePhoto(this.ddd)
    //         .subscribe(
    //         (data) => {
    //             console.log(data);
    //         });
    // }
}
