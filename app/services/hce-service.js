import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/Rx';

/*
    Prettify objects returned from Salesforce. This is optional, but it allows us to keep the templates independent
    from the Salesforce specific naming convention. This could also be done Salesforce-side by creating a custom REST service.
 */
let prettifyHce = (hce) => {
    let prettyHce = {
        id: hce.id,
        name: hce.name,
        type: hce.gsd_hcetype__c
    };
    return prettyHce;
};

@Injectable()
export class HceService {

    static get parameters() {
        return [Http];
    }

    constructor(http) {
        this.http = http;
    }

    findAll() {
        return this.http.get('/hce').map(response => response.json().map(prettifyHce));
    }

    findById(id) {
        return this.http.get('/hce/' + id).map(response => prettifyHce(response.json()));
    }

    like(hce) {
    }

}