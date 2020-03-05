import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

const SHARED_MODULES = [
  CommonModule
];

const SHARED_COMPONENTS = [];

const ENTRY_COMPONENTS = [];

const SHARED_DIRECTIVES = [];

const SHARED_PIPES = [];

const ANGULAR_MATERIAL_MODULES = [
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatTabsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatInputModule,
  MatListModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
];


@NgModule({
  imports: [
    ANGULAR_MATERIAL_MODULES,
    SHARED_MODULES,
  ],
  declarations: [
    ENTRY_COMPONENTS,
    SHARED_COMPONENTS,
    SHARED_DIRECTIVES,
    SHARED_PIPES,
  ],
  entryComponents: [
    ENTRY_COMPONENTS,
  ],
  exports: [
    ANGULAR_MATERIAL_MODULES,
    SHARED_MODULES,
    SHARED_COMPONENTS,
    SHARED_DIRECTIVES,
    SHARED_PIPES,
  ]
})
export class SharedModule { }

