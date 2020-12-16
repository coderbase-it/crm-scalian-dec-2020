import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextsModule } from '../texts/texts.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TableauLightComponent, BtnComponent, TotalPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TableauLightComponent,
    BtnComponent,
    TemplatesModule,
    IconsModule,
    TextsModule,
    TotalPipe
  ]
})
export class SharedModule { }
