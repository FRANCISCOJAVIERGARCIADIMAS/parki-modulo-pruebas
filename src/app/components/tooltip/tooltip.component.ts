import { Component, Input, SimpleChanges,  } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent{
@Input() name!: string;
@Input() description!: string;


config = {
  content: ''
};

ngOnChanges(changes: SimpleChanges) {
  if (changes['description']) {
    this.config.content = this.description;
  }
  console.log("HOLA",this.config);
}

}
