import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './components/card/card.component';
import { PanelVoiceComponent } from './panel-voice/panel-voice.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PanelDrawingComponent } from './panel-drawing/panel-drawing.component';
import { TooltipComponent } from './components/tooltip/tooltip.component';
// import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CardComponent,
    PanelVoiceComponent,
    NavbarComponent,
    PanelDrawingComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
