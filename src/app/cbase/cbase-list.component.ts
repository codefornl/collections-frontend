import { Component, OnInit } from '@angular/core';
import { CbaseService } from '../cbase.service';
import { Cbase } from '../cbase';

@Component({
  selector: 'app-cbase-list',
  templateUrl: './cbase-list.component.html',
  styleUrls: ['./cbase-list.component.scss']
})
export class CbaseListComponent implements OnInit {
  cbases: Cbase[];
  constructor(private cbaseService: CbaseService) { }

  ngOnInit(){
    this.cbaseService.getCbases().subscribe(response => {
      if(response._embedded){
        this.cbases = response._embedded.cbase;
        console.log(this.cbases[0]);
      }
    })
  }

}
