import { Component, OnInit } from '@angular/core';
import { JsonService } from '../service/json.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  homes;

  constructor(private jsonService: JsonService) { }

  ngOnInit(): void {
    this.jsonService.getJson("../assets/homes.json").subscribe(result$ => {
      console.log(result$)
      this.homes = result$;
    })
  }

}
