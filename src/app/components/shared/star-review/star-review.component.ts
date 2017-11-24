import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.css']
})
export class StarReviewComponent implements OnInit {
  public stars: any = [1,2,3,4,5];
  public rating: number = 0;
  public readOnly: boolean;
  @Input() value;
  @Input() starId;
  @Output() onSelect = new EventEmitter();
  constructor() { }

  ngOnInit() {
      if(this.value != undefined) {
          this.readOnly = true;
      }
  }

  onClick(value) {
      this.rating = value;
      this.onSelect.emit(value);
  }

}
