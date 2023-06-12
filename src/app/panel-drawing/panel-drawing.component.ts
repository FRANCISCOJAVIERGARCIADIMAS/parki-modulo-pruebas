import { Component } from '@angular/core';
import { PanelDrawingService } from './panel-drawing.service';

@Component({
  selector: 'app-panel-drawing',
  templateUrl: './panel-drawing.component.html',
  styleUrls: ['./panel-drawing.component.scss']
})
export class PanelDrawingComponent {

  constructor(private sDrawing: PanelDrawingService) { }

  res_eval_ondas = 87;
  res_eval_esp = 93;
  prom_res_eval = 0;

  title = ''
  msg = ''
  regla = ''
  type = ''

  config = {
    content: 'This is a basic Popup',
    allowHTML: true,
  }

  pronosticarDrawing(){
    this.prom_res_eval = (this.res_eval_ondas + this.res_eval_esp) / 2;
    console.log(this.prom_res_eval);
    const variables = { "prom_res_eval": this.prom_res_eval};
    this.sDrawing.drawingPredictMsg(variables).subscribe(response => {
      this.msg = response.result.msg;
      this.title = response.result.title;
      this.type = response.result.type;
      this.regla = response.condiciones;
      console.log("REGISTRO: ",response.registro);
    });
  }

}
