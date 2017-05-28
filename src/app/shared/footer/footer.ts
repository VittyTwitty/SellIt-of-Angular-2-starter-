import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
    selector: 'footer',
    templateUrl: 'footer.html',
    styleUrls: ['footer.scss']
})

export class Footer /*implements OnInit */{

  /*  public user: User;
    //public usersList: User[];


    constructor(private userService: UserService) {

    }

    public ngOnInit() {

        this.userService.getUsersList().subscribe((data) => {
            data.forEach( item => {
                console.log(item.photo_details);
            })
        });
    } */



}