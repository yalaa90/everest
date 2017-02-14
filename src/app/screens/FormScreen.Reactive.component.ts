import {AbsFormScreen, ShowType} from './AbsFormScreen';
import {FormScreenService} from '../screens/formscreen.service';
import {Component, OnInit, AfterContentInit} from '@angular/core';

export abstract class FormScreenReactive extends AbsFormScreen implements AfterContentInit {
  public code:string;
  public name:string;


  constructor(private _formService:FormScreenService) {
    super();
  }

  public saveForm() {
    let url = this.url + "save";


    let model = this.formR.value;

    this._formService.save(url, model);
    this.newForm();
  }


  public newForm() {
    this.isList = false;
    this.formR.reset();

  }

  public deleteForm() {

    if (this.isList == false) {
      this.formR.reset();
    } else {
      if (this.id) {
        let url = this.url + this.id + "/delete";

        this._formService.deleteRecord(url);
        this.dataSource = this.dataSource.filter((i) =>i.id != this.id);
      }
    }
  }


  public changeShowType() {
    super.changeShowType();
    if (this.isList) this.fetchData();
  }

  public fetchData() {

    if (this.isList == false) {
      let url = this.url + this.id + "/show";

      this._formService.getOneModelR(url).subscribe(i=> {
        this.formR.patchValue(i);
      })

    }
    else {
      let url = this.url + "show";

      this._formService._httpServices.getHttpService(url, null).subscribe(
        res => this.dataSource = res);

    }

  }

  onRecordDbClick(grid:any) {

    this.id = grid.data.id;
    this.isList = false;
    this.fetchData();
  }

  public ngAfterContentInit() {
    this.fetchData();
  }

  onRecordSeleced(grid:any) {
    debugger;
    this.id = grid.id;
  }


}
