import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JsonService } from '../service/json.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  homes;
  responsiveOptions;

  constructor(private jsonService: JsonService,
    private sharedService: SharedService,
    private router: Router) {
    //Here We change the number of elements that we want to show
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
    //We call to our service and receive the information of the houses
    this.jsonService.getJson("../assets/homes.json").subscribe(result$ => {
      console.log(result$)
      this.homes = result$;
    })
  }

  /* Function to open our gallery
  home: Info about the home clicked
  image: image has been clicked */
  goToGallery(home, image) {
    let index = home.images.indexOf(image)
    if (index != -1) {
      //We go first to our route "gallery" and when gallery observable is listening, we send the info about the house. 
      this.router.navigate(['/gallery'])
      setTimeout(() => {
        this.sharedService.sharedImagesNotification.next([home, index]);
      });
    }

  }
}
