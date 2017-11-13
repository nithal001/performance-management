import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ColumnSetting } from '../../model/model';
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
      setTimeout(() => {
          this.router.navigate(['/employee-details', id])}, 100
      );
  }

}
