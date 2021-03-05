import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { MenuService } from 'src/app/core/services/menu.service';

@Component({
  selector: 'app-page-stats',
  templateUrl: './page-stats.component.html',
  styleUrls: ['./page-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageStatsComponent implements OnInit {
  statut!: string;
  mydata: any = -1;
  constructor(
    private menuService: MenuService,
    private chageRef: ChangeDetectorRef
  ) {
    interval(1000)
      .pipe(
        tap((data) => console.log(data)),
        take(10)
      )
      .subscribe((data) => {
        this.mydata = data;
        this.chageRef.detectChanges();
      });
  }

  ngOnInit(): void {
    this.menuService.open$.subscribe((data) => {
      this.statut = data ? 'ouvert' : 'fermé';
    });
  }

  toggle() {
    this.menuService.toggle();
  }

  hello() {
    console.log('hello');
  }
}
