import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ColumnSetting } from '../../model/model';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnChanges {
  @Input() dataSet;
  @Input() settings: ColumnSetting[];
  @Input() id;
  public columnMaps: ColumnSetting[];
  constructor() { }

  ngOnChanges() {
      if(this.settings) {
          this.columnMaps = this.settings;
      }
  }

  onRowClick(id: any) {
      if(id == undefined) {
         return false;
      }
  }

}
