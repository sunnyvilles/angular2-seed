import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

type PaneType = 'first' | 'second'| 'third'| 'fourth';

@Component({
  selector: 'slide-panels',
  styleUrls: [ './slide-panels.component.css' ],
  templateUrl: './slide-panels.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slide', [
      state('first', style({ transform: 'translateX(0)' })),
      state('second', style({ transform: 'translateX(-25%)' })),
      state('third', style({ transform: 'translateX(-50%)' })),
      state('fourth', style({ transform: 'translateX(-75%)' })),
      transition('* => *', animate(300))
    ])
  ]
})
export class SlidePanelsComponent {
  @Input() activePane: PaneType ;
}