import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { BsDropdownModule } from 'ngx-bootstrap';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { TableDetailsDirective } from './table-details.directive';
import { TableKeyValueComponent } from './table-key-value/table-key-value.component';
import { TableComponent } from './table/table.component';

@NgModule({
  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsModule,
    BsDropdownModule,
    PipesModule,
    ComponentsModule,
    RouterModule
  ],
  declarations: [
    TableComponent,
    TableDetailsDirective,
    TableKeyValueComponent
  ],
  exports: [
    TableComponent,
    NgxDatatableModule,
    TableKeyValueComponent
  ]
})
export class DataTableModule { }
