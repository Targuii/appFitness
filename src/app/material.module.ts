import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {MatNativeDateModule, MatCheckboxModule, MatProgressSpinnerModule, MatDialogModule} from '@angular/material';
import {MatSidenavModule, MatToolbarModule, MatListModule, MatTabsModule, MatCardModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';


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
    MatDialogModule
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
    MatDialogModule
  ],
})
export class MaterialModule {

}
