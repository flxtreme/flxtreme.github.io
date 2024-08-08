import { Component } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  loading$!: Observable<boolean>;

  constructor( private utilityService: UtilityService ) {
    this.loading$ = this.utilityService.loading$;
  }
}
