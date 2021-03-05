import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() state: any;
  @HostBinding('class') tdClassName!: string;
  constructor() {
  }
  ngOnChanges(): void {
    this.tdClassName = `state-${this.state.toLowerCase()}`;
  }

}
