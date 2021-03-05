import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/core/services/menu.service';
/**
 * user interface need projection for header, nav, footer and icons
 */
@Component({
  selector: 'app-ui2',
  templateUrl: './ui2.component.html',
  styleUrls: ['./ui2.component.scss']
})
export class Ui2Component implements OnInit {
  /**
   * property used to open or close nav aside
   */
  public open!:boolean;
  constructor(private menuService:MenuService) {
  }

  ngOnInit(): void {
    this.menuService.open$.subscribe(
      (data)=>{
        this.open=data;
      }
    );
    document.documentElement.style.setProperty('--app-light', 'red')
  }

  /**
   * this method is called to reverse property open
   * @example
   * <app-icon-nav (click)="toggle()"></app-icon-nav>
   */
  public toggle(): void {
    this.menuService.toggle();
  }

}
