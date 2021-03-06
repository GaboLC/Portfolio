import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Own
import { MaterialModule } from "./material/material.module";
import { TypeAnimationComponent } from "./type-animation/type-animation.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { TimelineComponent } from "./timeline/timeline.component";
import { ProyectsComponent } from './proyects/proyects.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeAnimationComponent,
    AboutMeComponent,
    TimelineComponent,
    ProyectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
