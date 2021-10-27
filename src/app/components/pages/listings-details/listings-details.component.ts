import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-listings-details',
  templateUrl: './listings-details.component.html',
  styleUrls: ['./listings-details.component.scss'],
})
export class ListingsDetailsComponent implements OnInit {
  categoryId;
  options: any;
  route: any;
  countIdOfCategory: any;

  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.singleListingsBox = this.singleListingsBox.filter(
      (x) => x.categoryId == this.categoryId
    );
    this.countIdOfCategory = this.singleListingsBox.length;
  }

  singleListingsBox = [
    {
      mainImg: [
        {
          img: 'assets/img/listings/listings7.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId:1,
      icon: 'flaticon-heart-1',
      location: 'New York, USA',
      title: 'Abeer Hospital',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',
      openORclose: 'Open Now',
      sponsored: true,
      extraClass: 'status-open',
      rating: [
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
        {
          icon: 'bx bxs-star',
        },
      ],
      ratingCount: '18',
    },
  ];

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
