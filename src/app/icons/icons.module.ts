import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDeleteComponent } from './icon-delete/icon-delete.component';
import { IconEditComponent } from './icon-edit/icon-edit.component';
import { IconCloseComponent } from './icon-close/icon-close.component';
import { IconNavComponent } from './icon-nav/icon-nav.component';


@NgModule({
  declarations: [IconDeleteComponent, IconEditComponent, IconCloseComponent, IconNavComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconDeleteComponent, IconEditComponent, IconCloseComponent, IconNavComponent]
})
export class IconsModule { }
