import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'star-review',
  templateUrl: './star-review.component.html',
  styleUrls: ['./star-review.component.css']
})
export class StarReviewComponent implements OnInit {
  public stars: any = [1,2,3,4,5];
  public rating: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onClick(value) {
      this.rating = value;
  }

}
