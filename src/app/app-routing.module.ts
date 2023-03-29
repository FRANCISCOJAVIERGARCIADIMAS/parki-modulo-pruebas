import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PanelVoiceComponent } from './panel-voice/panel-voice.component';
import { PanelDrawingComponent } from './panel-drawing/panel-drawing.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'panelVoice', component: PanelVoiceComponent },
  { path: 'panelDrawing', component: PanelDrawingComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
