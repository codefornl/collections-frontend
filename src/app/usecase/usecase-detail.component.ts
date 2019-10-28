import { Component, OnInit, Input } from '@angular/core';
import { Usecase } from '../usecase';

@Component({
  selector: 'app-usecase-detail',
  templateUrl: './usecase-detail.component.html',
  styleUrls: ['./usecase-detail.component.scss']
})
export class UsecaseDetailComponent {
  @Input() parent: string;
  @Input() usecase: Usecase;
  @Input() detailed: boolean = false;
  constructor() { }
}
