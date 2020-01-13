import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TablesComponent } from './tables.component';
import { TableService } from './table.service';
import { TablesRoutingModule } from './tables-routing/tables-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule } from 'ng-angular8-datatable';

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule,
    HttpClientModule,
    DataTableModule,
    FormsModule
  ],
  providers: [ TableService],
  declarations: [ TablesComponent ]
})
export class TablesModule { }
