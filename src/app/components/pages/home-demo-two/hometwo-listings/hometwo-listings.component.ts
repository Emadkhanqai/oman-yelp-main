import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataListingService } from 'src/app/data-listing.service';

@Component({
  selector: 'app-hometwo-listings',
  templateUrl: './hometwo-listings.component.html',
  styleUrls: ['./hometwo-listings.component.scss'],
})
export class HometwoListingsComponent implements OnInit {
  singleListingsBox;
  constructor( private dataService: DataListingService) {
    this.singleListingsBox = this.dataService.singleListingsItem.filter(x => x.featured == true);
  }

  ngOnInit(): void {}

  sectionTitle = [
    {
      title: 'Featured Listing',
      paragraph: '',
    },
  ];
  bottomButton = [
    {
      text: 'More Listings',
      link: 'listing-view',
    },
  ];
  customOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    autoplayHoverPause: true,
    autoplay: true,
    mouseDrag: false,
    items: 1,
    navText: [
      "<i class='flaticon-left-chevron'></i>",
      "<i class='flaticon-right-chevron'></i>",
    ],
  };
}
