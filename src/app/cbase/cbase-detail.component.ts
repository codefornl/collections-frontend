import { Component, Input } from '@angular/core';
import { Cbase } from '../cbase';

@Component({
  selector: 'app-cbase-detail',
  templateUrl: './cbase-detail.component.html',
  styleUrls: ['./cbase-detail.component.scss']
})

export class CbaseDetailComponent {
  @Input() cbase: Cbase;
  @Input() max: number = 120;
}
