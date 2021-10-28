import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataListingService } from 'src/app/data-listing.service';

@Component({
  selector: 'app-listings-details',
  templateUrl: './listings-details.component.html',
  styleUrls: ['./listings-details.component.scss'],
})
export class ListingsDetailsComponent implements OnInit {
  articleId;
  options: any;

  countIdOfCategory: any;
  dataFetched;
  constructor(
    private route: ActivatedRoute,
    private scroller: ViewportScroller,
    private dataService: DataListingService
  ) {}

  ngOnInit(): void {
    this.articleId = this.route.snapshot.paramMap.get('id');
    this.dataFetched = this.dataService.singleListingsItem;
    this.singleListingsBox = this.dataFetched.filter((x) => x.articleId == this.articleId);
    this.countIdOfCategory = this.singleListingsBox.length;
  }

  singleListingsBox;

  galleryOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
      "<i class='flaticon-left-chevron'></i>",
      "<i class='flaticon-right-chevron'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      },
    },
  };

  singleImageBox = [
    {
      img: 'assets/img/gallery/gallery1.jpg',
    },
    {
      img: 'assets/img/gallery/gallery2.jpg',
    },
    {
      img: 'assets/img/gallery/gallery3.jpg',
    },
    {
      img: 'assets/img/gallery/gallery4.jpg',
    },
    {
      img: 'assets/img/gallery/gallery5.jpg',
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

  scrollTo(target) {
    this.scroller.scrollToAnchor(target);
  }
}
