/**
 * Created by yahia on 2/1/2017.
 */
import {AbsFormScreen} from "./AbsFormScreen";
import {FormMDService} from "./formmd.service";
import {FormGroup} from "@angular/forms";
import {AfterContentInit} from '@angular/core';
export abstract class FormMDScreen extends AbsFormScreen implements AfterContentInit {

  constructor(private fmds:FormMDService) {
    super();

  }

  public ngAfterContentInit() {
    this.fetchData(this.isList);
  }

  public defaultDataSource = [];
  public defaultColumns = [];

  public saveForm() {

    let url = this.url + "save"
    let model = this.fmds.prepareFormModel(this.formModel);
    console.log(model);
    this.fmds.save(url, model).subscribe(i=> {
      this.id = i;
    });

  }

  public fetchData(isList:boolean) {
    if (isList == true)this.getAll();
    else this.getOneModel();
  }

  public newForm() {
    for (let item in this.formModel) {

      if (this.formModel[item] instanceof FormGroup) {
        this.formModel[item].reset();
      }
      if (this.formModel[item] instanceof Array) {
        this.formModel[item] = [];
      }
    }

  }

  public changeShowtype() {
    super.changeShowType();

  }

  getOneModel() {
    let url = this.url + this.id + "/show";

    this.fmds.getOneModel(url).subscribe(i=> {
      this.fmds.prepareModelToView(i, this.formModel);
    })
  }


  getAll() {
    let url = this.url + "list/show";
    this.fmds.getall(url).subscribe(i=> {
      this.dataSource = i;
    });
  }

  onRecordDbClick(grid: any) {

    this.id = grid.data.id;
    this.isList = false;
    this.fetchData(false);
  }

  onRecordSeleced(grid: any) {
    debugger;
    this.id = grid.id;
  }
}
