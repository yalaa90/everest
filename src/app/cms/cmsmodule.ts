import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import {TextBox} from '../components/inputCompnent/textbox/textbox.component';
import {PatientComponent} from './patient/patient.component';
@NgModule({
    imports: [FormsModule, BrowserModule],
    declarations: [PatientComponent],
    bootstrap:[]
})
export class CMSModule {

}