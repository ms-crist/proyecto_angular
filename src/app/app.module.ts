import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { EventoComponent } from './pages/home/component/evento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(es);
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    ContrasenaPipe,
    EventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarHttpClientModule
  ],
  providers: [ContrasenaPipe,
    { provide: LOCALE_ID, useValue: "es-ES" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

