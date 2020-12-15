import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFullwidthComponent } from './template-fullwidth/template-fullwidth.component';
import { TemplateContainerComponent } from './template-container/template-container.component';



@NgModule({
  declarations: [TemplateFullwidthComponent, TemplateContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [TemplateFullwidthComponent, TemplateContainerComponent]
})
export class TemplatesModule { }
