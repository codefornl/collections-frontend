import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ApiService } from '../../../api.service';
import { ActivatedRoute } from '@angular/router';
import { Cbase } from '../../../models';

@Component({
  selector: 'app-collection-meta',
  templateUrl: './item.html',
  styleUrls: ['./item.scss']
})
export class CollectionItemComponent implements OnInit {

  item: Cbase;
  constructor(private route: ActivatedRoute,
    private service: ApiService,
    private location: Location) { }

  ngOnInit() {
    var id: string = this.route.snapshot.paramMap.get('id');
    this.service.getCbase(id).subscribe(c => this.item = c);
  }

  goBack(): void {
    this.location.back();
  }

}
