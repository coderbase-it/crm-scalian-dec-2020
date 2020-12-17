import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { TextsModule } from '../texts/texts.module';
import { BtnComponent } from './components/btn/btn.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauDarkComponent } from './components/tableau-dark/tableau-dark.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [TableauLightComponent, BtnComponent, TotalPipe, StateDirective, TableauDarkComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TableauLightComponent,
    BtnComponent,
    TemplatesModule,
    IconsModule,
    TextsModule,
    ReactiveFormsModule,
    TotalPipe,
    StateDirective,
    TableauDarkComponent
  ]
})
export class SharedModule { }
