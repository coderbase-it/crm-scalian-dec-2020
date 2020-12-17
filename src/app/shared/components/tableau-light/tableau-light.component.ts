import { Component, Input, OnChanges, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TableauLightComponent implements OnInit, OnChanges {
  @Input() headers!: string[];
  constructor() {
  }

  ngOnChanges(): void {
    console.log(this.headers);
  }
  ngOnInit(): void {
  }

}
