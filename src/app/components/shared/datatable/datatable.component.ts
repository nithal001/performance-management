import { Component, OnInit, EventEmitter, Input, Output, OnChanges } from '@angular/core';
import { ColumnSetting } from '../../../model/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnChanges {
  @Input() dataSet;
  @Input() settings: ColumnSetting[];
  @Input() id;
  @Output() onClick = new EventEmitter();
  public columnMaps: ColumnSetting[];
  constructor(private router:Router) { }

  ngOnChanges() {
      if(this.settings) {
          this.columnMaps = this.settings;
      }
  }

  onRowClick(id: any) {
      if(id == undefined) {
         return false;
      }
      this.onClick.emit(id);
  }

}
