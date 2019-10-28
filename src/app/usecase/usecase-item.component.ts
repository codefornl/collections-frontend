import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Usecase } from '../usecase';
import { CbaseService } from '../cbase.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usecase-item',
  templateUrl: './usecase-item.component.html',
  styleUrls: ['./usecase-item.component.scss']
})
export class UsecaseItemComponent implements OnInit {
  usecase: Usecase;
  constructor(private route: ActivatedRoute,
    private cbaseService: CbaseService,
    private location: Location) { }

  ngOnInit() {
    //var id: string = this.route.snapshot.paramMap.get('id');
    var uid: string = this.route.snapshot.paramMap.get('uid');
    this.cbaseService.getUsecase(uid).subscribe(c => {
      this.usecase = c;
      console.log(this.usecase)
    });
  }

  goBack(): void {
    this.location.back();
  }

}
