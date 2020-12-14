import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtnComponent } from './components/btn/btn.component';
import { TableauLightComponent } from './components/tableau-light/tableau-light.component';



@NgModule({
  declarations: [TableauLightComponent, BtnComponent],
  imports: [
    CommonModule
  ],
  exports: [TableauLightComponent, BtnComponent]
})
export class SharedModule { }
