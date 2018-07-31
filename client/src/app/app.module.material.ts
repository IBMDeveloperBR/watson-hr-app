import {MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule,MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule, MatTooltipModule, MatPaginatorModule, MatStepperModule, MatTableModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule, MatTooltipModule, MatPaginatorModule, MatStepperModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTabsModule, MatSelectModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule, MatCardModule, MatSliderModule, MatExpansionModule, MatDialogModule, MatInputModule, MatTooltipModule, MatPaginatorModule, MatStepperModule, MatTableModule],
})
export class MaterialModule { }