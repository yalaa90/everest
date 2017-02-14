import {Component, Input, Output,EventEmitter} from '@angular/core';
import {ABSCompnent} from '../ABSCompoenent';
export interface Columns {
    field?: string;
    header?: string;
    filter?: boolean ;

}

@Component({

    selector: 'grid',
    templateUrl:'grid.component.html'
})
export class GridComponent  {

    @Input() dataSource: any[];
    @Input() columns: Columns[];
    @Input() header: string;
    @Input() selectionMode: string;
    @Input() isList:boolean=true;

    @Output() recordClick = new EventEmitter();
    @Output() recordSelected = new EventEmitter();
    onRecordClick(record:any) {

        this.recordClick.emit(record);
    }

    onRecordSelected(record: any) {
        this.recordSelected.emit(record.data);
    }
    addRow(){
      this.dataSource.push({});
    }

}
