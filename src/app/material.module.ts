import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatPaginatorModule, MatPaginatorIntl} from '@angular/material';
import {MatNativeDateModule, MatCheckboxModule, MatProgressSpinnerModule, MatDialogModule} from '@angular/material';
import {MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule, MatSortModule} from '@angular/material';
import { MatPaginatorIntlFr } from './matPaginatorIntlFrClass';


@NgModule({
  imports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],

  exports: [
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlFr}
  ],
})
export class MaterialModule {

}
