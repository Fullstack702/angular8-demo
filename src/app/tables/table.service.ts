import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit  } from '@angular/core';

const url = 'https://api.iextrading.com/1.0/tops/last?';
@Injectable()

export class TableService  {
    constructor(private http: HttpClient) {

    }

    getItem(symbols) {
        console.log("sym==>", symbols);
        let link = url + symbols;
        return this.http.get(link);
    }
}