import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../api.service';
import { Cbase } from '../../../models';

@Component({
  selector: 'app-collection-list',
  templateUrl: './list.html',
  styleUrls: ['./list.scss']
})
export class CollectionListComponent implements OnInit {
  items: Cbase[];
  constructor(private service: ApiService) { }

  ngOnInit(){
    this.service.getCbases().subscribe(response => {
      if(response._embedded){
        this.items = response._embedded.cbase;
      }
    })
  }

}
