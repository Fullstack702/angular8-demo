import { Component, OnInit } from '@angular/core';
import {TableService} from './table.service';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})

export class TablesComponent implements OnInit {
  
  results: any = [];
  temp: any = [];
  symbols: any;
  searchValue: any;
  constructor(private service: TableService) {
    this.temp = [{"symbol":"SNAP","price":17.415,"size":100,"time":1578689980139},{"symbol":"FB","price":218.04,"size":100,"time":1578689997033},{"symbol":"AIG","price":52.02,"size":100,"time":1578689988010}];
  }


  convertTimeStamp(timestampStr){

    let utc = moment.unix(timestampStr/1000).tz("UTC");
    let dateStr = utc.format("MM/DD/YYYY hh/mm/ss");
    return dateStr;
  } 

  deleteItem(index) {
    this.results.splice(index, 1);
    console.log(this.results);
    return this.results;
  }

  searchItem() {
    let param = ''
    if(this.searchValue)
       param = "symbols=" + this.searchValue.trim();
    
    this.service.getItem(param)
              .subscribe(data => {
                this.results = data;
    });
  }
  ngOnInit() {
    
  }

}
