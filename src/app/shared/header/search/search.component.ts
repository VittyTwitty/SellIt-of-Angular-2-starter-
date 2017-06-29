import { Component } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { SearchService } from "../../../core/search.service";
import { Products } from "../../footer/products";
import { PostService } from "../../../core/posts.service";

@Component({
    selector: 'sellit-search',
    templateUrl: 'search.component.html',
    styleUrls: ['search.component.scss']

})

export class SearchComponent {
    ddd:string = '112';
    results: Object;
    searchTerm$ = new Subject<string>();

    constructor(private postService: PostService, private searchService: SearchService) {
        this.searchService.search(this.searchTerm$)
            .subscribe(res => {
                this.results = res;
                console.log(this.results)
            });
    }

    deletePost() {
        this.postService.deletePost(this.ddd)
            .subscribe(
            data => {
                console.log(data);
            })
    }
    deletePhoto() {
        this.postService.deletePhoto(this.ddd)
            .subscribe(
            data => {
                console.log(data);
            })
    }
}

