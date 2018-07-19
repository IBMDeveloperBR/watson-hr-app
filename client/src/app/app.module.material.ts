import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule,MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule, MatTooltipModule, MatPaginatorModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule, MatTooltipModule, MatPaginatorModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule, MatTooltipModule, MatPaginatorModule],
})
export class MaterialModule { }