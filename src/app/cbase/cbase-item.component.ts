import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { CbaseService } from '../cbase.service';
import { ActivatedRoute } from '@angular/router';
import { Cbase } from '../cbase';

@Component({
  selector: 'app-cbase-item',
  templateUrl: './cbase-item.component.html',
  styleUrls: ['./cbase-item.component.scss']
})
export class CbaseItemComponent implements OnInit {

  cbase: Cbase;
  constructor(private route: ActivatedRoute,
    private cbaseService: CbaseService,
    private location: Location) { }

  ngOnInit() {
    var id: string = this.route.snapshot.paramMap.get('id');
    this.cbaseService.getCbase(id).subscribe(c => this.cbase = c);
  }

  goBack(): void {
    this.location.back();
  }

}
