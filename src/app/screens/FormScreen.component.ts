import {AbsFormScreen,ShowType} from './AbsFormScreen';
import {FormScreenService} from '../screens/formscreen.service';

import {Component, OnInit, AfterContentInit} from '@angular/core';


export abstract class FormScreen extends AbsFormScreen implements AfterContentInit {
    public code: string;
    public name: string;



    constructor(private _formService: FormScreenService) {
        super();
    }

    public submitForm(form: any) {
        let url = this.url + "save";


        let model = this._formService.getFormModel(form);
        debugger;
        this._formService.save(url, model);
        this.newForm(form);



    }

    

    public newForm (form:any) {
      this.isList=false;
      form.reset();

    }
    public reset(form: any) {
        debugger;
        if (this.isList == false) {
            form.reset();
        } else {

                let url = this.url + this.id + "/delete";

                this._formService.deleteRecord(url);
              this.dataSource =this.dataSource.filter((i) =>i.id!=this.id);
        }
    }


    public changeShowType() {
         super.changeShowType();
        if (this.isList) this.fetchData();
    }

    public fetchData() {

        if (this.isList == false) {
            let url = this.url + this.id + "/show";

            this._formService.getOneModel(url, this);
        }
        else {
            let url = this.url + "show";

            this._formService._httpServices.getHttpService(url, null).subscribe(
                res => this.dataSource = res);

        }

    }

    onRecordDbClick(grid: any) {

        this.id = grid.data.id;
        this.isList = false;
        this.fetchData();
    }
    public ngAfterContentInit() {
        this.fetchData();
    }

    onRecordSeleced(grid: any) {
      debugger;
        this.id = grid.id;
    }


}
