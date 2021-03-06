import { Component, OnInit } from '@angular/core';
import { JsonService } from '../service/json.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  homes;
  responsiveOptions;

  constructor(private jsonService: JsonService) {

    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5,
          numScroll: 5
      },
      {
          breakpoint: '768px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '560px',
          numVisible: 3,
          numScroll: 3
      }
  ];
   }

  ngOnInit(): void {
    this.jsonService.getJson("../assets/homes.json").subscribe(result$ => {
      console.log(result$)
      this.homes = result$;
    })
  }

}
