import {OnInit} from '@angular/core';
import {Page, NavController} from 'ionic-angular';
//import {PropertyDetailsPage} from '../property-details/property-details';
import {HceService} from '../../services/hce-service';

@Page({
    templateUrl: 'build/pages/hce-list/hce-list.html'
})
export class HceListPage {

    static get parameters() {
        return [[NavController], [HceService]];
    }

    constructor(nav, hceService) {
        this.nav = nav;
        this.hceService = hceService;
    }

    ngOnInit() {
        this.hceService.findAll().subscribe(hces => this.hces = hces);
    }

    itemTapped(event, hce) {
        // this.nav.push(PropertyDetailsPage, {
        //     property: property
        // });
    }

}