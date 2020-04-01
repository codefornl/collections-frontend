import { Component, Input } from '@angular/core';
import { Usecase } from '../../../models';

@Component({
  selector: 'app-usecase-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.scss']
})
export class UsecaseDetailComponent {
  @Input() parent: string;
  @Input() usecase: Usecase;
  @Input() detailed = false;
  constructor() { }

  getImageUrl(item: Usecase) {
    const baseUrl = 'https://img.codefor.nl?url=';
    if (item.image) {
      return baseUrl + encodeURIComponent(item.image) + '&height=426&width=640';
    }
    return baseUrl + encodeURIComponent('https://clarity.codefor.nl/img/One_black_Pixel.png');
  }
}
