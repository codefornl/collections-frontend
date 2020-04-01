import { Component, Input } from '@angular/core';
import { Cbase } from '../../../models';

@Component({
  selector: 'app-collection-detail',
  templateUrl: './detail.html',
  styleUrls: ['./detail.scss']
})

export class CollectionDetailComponent {
  @Input() item: Cbase;
  @Input() max: number = 120;

  getImageUrl (item: Cbase) {
    const baseUrl = "https://img.codefor.nl?url=";
    if (item.image) {
      return baseUrl + encodeURIComponent(item.image);
    }
    return baseUrl + encodeURIComponent('https://clarity.codefor.nl/img/One_black_Pixel.png');
  }

  urlify(text: string) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '">' + url + '</a>';
    })
  }
}
