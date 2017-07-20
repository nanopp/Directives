import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component'
import { BasicHighlightDirective } from './directives/basic-highlight-directive';
import { BetterHighlightDirective } from './directives/better-highlight-directive';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        BasicHighlightDirective,
        BetterHighlightDirective
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ]
};
