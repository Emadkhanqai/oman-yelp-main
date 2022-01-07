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
    this.singleListingsBox = this.dataFetched.filter(
      (x) => x.articleId == this.articleId
    );
    this.countIdOfCategory = this.singleListingsBox.length;
    console.log(this.singleListingsBox[0].gallery);
    this.singleListingsBox[0].gallery.forEach((element,index) => {
      // this.singleImageBox[index].img = element;
      console.log(element);
      console.log(index);
      this.singleImageBox.push(element);
    });
    console.log(this.singleImageBox);
    this.singleImageBox[0].img = this.singleListingsBox[0].gallery;
  }

  singleListingsBox;
  singleImageBox = [];

  galleryOptions: OwlOptions = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: false,
    margin: 30,
    items: 3,
    navText: [
      "<i class='flaticon-left-chevron'></i>",
      "<i class='flaticon-right-chevron'></i>",
    ],
    // responsive: {
    //   0: {
    //     items: 1,
    //   },
    //   576: {
    //     items: 2,
    //   },
    //   768: {
    //     items: 2,
    //   },
    //   992: {
    //     items: 2,
    //   },
    // },
  };



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
