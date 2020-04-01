import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Usecase } from '../../../models';
import { ApiService } from '../../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usecase-item',
  templateUrl: './item.html',
  styleUrls: ['./item.scss']
})
export class UsecaseItemComponent implements OnInit {
  usecase: Usecase;
  constructor(
    private route: ActivatedRoute,
    private service: ApiService,
    private location: Location) { }

  ngOnInit() {
    const uid: string = this.route.snapshot.paramMap.get('uid');
    this.service.getUsecase(uid).subscribe(c => {
      this.usecase = c;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
