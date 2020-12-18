import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBandeauComponent } from './text-bandeau/text-bandeau.component';
import { TextPageComponent } from './text-page/text-page.component';
import { TextDialogInfoComponent } from './text-dialog-info/text-dialog-info.component';
import { TextDialogWarningComponent } from './text-dialog-warning/text-dialog-warning.component';
import { TextDialogErrorComponent } from './text-dialog-error/text-dialog-error.component';
import { TextDialogSuccessComponent } from './text-dialog-success/text-dialog-success.component';



@NgModule({
  declarations: [TextBandeauComponent, TextPageComponent, TextDialogInfoComponent, TextDialogWarningComponent, TextDialogErrorComponent, TextDialogSuccessComponent],
  imports: [
    CommonModule
  ],
  exports: [TextBandeauComponent, TextPageComponent, TextDialogInfoComponent, TextDialogWarningComponent, TextDialogErrorComponent, TextDialogSuccessComponent]
})
export class TextsModule { }
