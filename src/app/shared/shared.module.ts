import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';



@NgModule({
  declarations: [TableauLightComponent, BtnComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TableauLightComponent,
    BtnComponent,
    TemplatesModule,
    IconsModule
  ]
})
export class SharedModule { }
