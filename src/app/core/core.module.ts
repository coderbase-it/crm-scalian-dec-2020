import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { TextsModule } from '../texts/texts.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    LoginModule,
    UiModule,
    IconsModule,
    TextsModule
  ]
})
export class CoreModule { }
