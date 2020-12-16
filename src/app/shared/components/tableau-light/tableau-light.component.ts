import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-tableau-light',
  templateUrl: './tableau-light.component.html',
  styleUrls: ['./tableau-light.component.scss']
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
