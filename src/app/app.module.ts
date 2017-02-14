import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import  {CommonModule}from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";
import {DataTableModule, DropdownModule, SharedModule,DomHandler} from "primeng/primeng";
import {LookUpToolBar} from "./components/toolbar/lookuptoolbar.component";
import {HRTest} from "./hr/hr.component";
import {TextBox} from "./components/inputCompnent/textbox/textbox.component";
import {PatientComponent} from "./cms/patient/patient.component";
import {HttpSubscriber} from "./services/httpSubscriber";
import {HttpServices} from "./services/HttpServices";
import {FormScreenService} from "./screens/formscreen.service";
import {PatienService} from "./cms/patient/patient.service";
import {GridComponent} from "./components/gridComponent/grid.component";
import {ReceiveComponent} from "./cms/proccess/receive/receive.component";
import {ReceiveService} from "./cms/proccess/receive/receive.service";
import {ExaminationComponent} from "./cms/proccess/examination/examination.component";
import {ExaminationService} from "./cms/proccess/examination/examination.service";
import {OrgsComponent} from "./hr/orgs/orgs.component";
import {OrgsService} from "./hr/orgs/orgs.service";
import {SurgeryComponent} from "./cms/Surgery/Surgery.component";
import {SurgeryService} from "./cms/Surgery/Surgery.service";
import {ClinicComponent} from "./cms/clinic/clinic.component";
import {ClinicService} from "./cms/clinic/clinic.service";
import {MedicineComponent} from "./cms/medicine/medicine.component";
import {MedicineService} from "./cms/medicine/medicine.service";
import {HomeComponent} from "./cms/home/home.component";
import {HomeService} from "./cms/home/home.service";
import {PrescriptionComponent} from "./cms/prescription.component";
import {CmComponent} from "./cms/cm/cm.component";
import {AppComponent} from "./app.component";
import {EmptyComponent} from "./cms/empty/empty.component";
import {DiseaseComponent} from "./cms/disease/disease.component";
import {DiseaseService} from "./cms/disease/disease.service";
import {DropDownComponent} from "./components/inputCompnent/dropdown/dropdown.component";
import {I18N} from "./test/i18n.component";
const appRoutes: Routes = [

  { path: '', component: HomeComponent  },
  { path: 'cm', component: EmptyComponent  },
  { path: 'patient', component: PatientComponent },
  { path: 'medicine', component: MedicineComponent },
  { path: 'Surgery', component: SurgeryComponent },
  { path: 'receive', component: ReceiveComponent },
  { path: 'examination', component: ExaminationComponent },
  { path: 'clinic', component: ClinicComponent },
  {path:'disease',component:DiseaseComponent}
]

const serviceProvider=[
  HttpServices,
  HttpSubscriber,
  FormScreenService,
  PatienService,
  ReceiveService,
  ExaminationService,
  ClinicService,
  SurgeryService,
  OrgsService,
  MedicineService,
  HomeService,
  DiseaseService
];

const componentProvider=[
  OrgsComponent,
  PatientComponent,
  ReceiveComponent,
  ExaminationComponent,
  ClinicComponent,
  SurgeryComponent,
  CmComponent,
  PrescriptionComponent,
  GridComponent,
  MedicineComponent,
  HomeComponent,
  EmptyComponent,
  DiseaseComponent
]
@NgModule({
  declarations: [
    AppComponent,
    LookUpToolBar,
    HRTest,
    TextBox,
    DropDownComponent,I18N,
    ...componentProvider

  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, DataTableModule,SharedModule,DropdownModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [serviceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
