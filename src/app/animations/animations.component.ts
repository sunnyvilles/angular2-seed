import {Component} from '@angular/core';

@Component({
  selector: 'animations',
  styleUrls: ['./animations.component.css'],
  templateUrl: './animations.component.html'
})
export class AnimationsComponent {

	selectedPane = 'first';

	switchPanes(pane:string):void{
		this.selectedPane = pane ;
	}
}
