


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  responsiveOptions: any;
  images: any;
  home: any;

  activeIndex: number = 0;
  constructor(
    private sharedService: SharedService,
    private router: Router) {


      // Recieved parameters from item-list with info about home, images of the home, and index of the element clicked
    this.sharedService.observableImagesNotification.subscribe(result$ => {
      this.home = result$[0];
      this.images = result$[0].images;
      this.activeIndex = result$[1];
    });

    //If we want to onlyshow a few images in mobile or tablet we canchanges this values.
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 5
      },
      {
        breakpoint: '560px',
        numVisible: 5
      }
    ];
  }

  ngOnInit(): void {
  }
}
