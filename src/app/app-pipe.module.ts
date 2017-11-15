import { NgModule } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform (values) {
    if (values) {
      return values.reverse();
    }
  }
}

@NgModule({
  imports: [],
  exports: [ReversePipe],
  declarations: [ReversePipe]
})
export class AppPipeModule { }
