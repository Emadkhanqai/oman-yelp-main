import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vertical-listings-left-sidebar',
  templateUrl: './vertical-listings-left-sidebar.component.html',
  styleUrls: ['./vertical-listings-left-sidebar.component.scss'],
})
export class VerticalListingsLeftSidebarComponent implements OnInit {
  private categoryId;
  public countIdOfCategory;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.resetOption = [this.options[0]];
    this.categoryId = this.route.snapshot.paramMap.get('id');
    this.singleListingsItem =   this.singleListingsItem.filter((x) => x.categoryId == this.categoryId);
    this.countIdOfCategory = this.singleListingsItem.length;
  }

  pageTitleContent = [
    {
      title: 'Find Popular Places',
    },
  ];

  // Category Select
  singleSelect: any = [];
  multiSelect: any = [];
  stringArray: any = [];
  objectsArray: any = [];
  resetOption: any;
  config = {
    displayKey: 'name',
    search: true,
  };
  options = [
    // Type here your category name
    {
      name: 'Healthcare',
    },
    {
      name: 'Hotel',
    },
    {
      name: 'Educational Institutions',
    },
    {
      name: 'Travel and Leisure',
    },
    {
      name: 'Events',
    },
    {
      name: 'Shopping',
    },
    {
      name: 'Fitness, Beauty and Spa',
    },
  ];

  searchChange($event) {
    console.log($event);
  }

  reset() {
    this.resetOption = [];
  }

  // Ordering Select
  options2 = [
    {
      name: 'Recommended',
    },
    {
      name: 'Default',
    },
    {
      name: 'Popularity',
    },
    {
      name: 'Latest',
    },
    {
      name: 'Price: low to high',
    },
    {
      name: 'Price: high to low',
    },
  ];

  // All Listings
  singleListingsItem = [
    {
      mainImg: 'assets/img/listings/listings9.jpg',
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
    {
      mainImg: 'assets/img/listings/listings9.jpg',
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId:2,
      icon: 'flaticon-heart-1',
      location: 'New York, USA',
      title: 'Al Hayat International Hospital',
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
    {
      mainImg: 'assets/img/listings/listings9.jpg',
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId:3,
      icon: 'flaticon-heart-1',
      location: 'New York, USA',
      title: 'Al Nahdha Hospital',
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
    {
      mainImg: 'assets/img/listings/listings9.jpg',
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId:4,
      icon: 'flaticon-heart-1',
      location: 'New York, USA',
      title: 'Aster Al Raffah Hospital',
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
    {
      mainImg: 'assets/img/listings/listings9.jpg',
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId:5,
      icon: 'flaticon-heart-1',
      location: 'New York, USA',
      title: 'Apollo Hospital',
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
    {
      mainImg: 'assets/img/listings/listings9.jpg',
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId:6,
      icon: 'flaticon-heart-1',
      location: 'New York, USA',
      title: 'Armed Forces Hospital',
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
    {
      mainImg: 'assets/img/listings/listings9.jpg',
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId:7,
      icon: 'flaticon-heart-1',
      location: 'New York, USA',
      title: 'Badr al Samaa Group of hospitals and polyclinics',
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
    {
      mainImg: 'assets/img/listings/listings9.jpg',
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId:8,
      icon: 'flaticon-heart-1',
      location: 'New York, USA',
      title: 'Burjeel Hospital',
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
    {
      mainImg: 'assets/img/listings/listings9.jpg',
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId:9,
      icon: 'flaticon-heart-1',
      location: 'New York, USA',
      title: 'Khoula Hospital',
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
    {
      mainImg: 'assets/img/listings/listings9.jpg',
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId:10,
      icon: 'flaticon-heart-1',
      location: 'New York, USA',
      title: 'KIMS Oman Hospital',
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

  verticalListings: number = 1;

  // Google Map Code Start

  @ViewChild(GoogleMap) map!: GoogleMap;

  mapOptions: google.maps.MapOptions = {
    center: { lat: 38.9987208, lng: -77.2538699 },
    zoom: 14,
    disableDefaultUI: true,
  };
  marker1 = { position: { lat: 38.9987208, lng: -77.2538699 } };
  marker2 = { position: { lat: 39.7, lng: -76.0 } };
  marker3 = { position: { lat: 37.9, lng: -76.8 } };

  markers = [this.marker1, this.marker2, this.marker3];

  ngAfterViewInit() {
    const bounds = this.getBounds(this.markers);
    this.map.googleMap.fitBounds(bounds);
  }

  getBounds(markers) {
    let north;
    let south;
    let east;
    let west;

    for (const marker of markers) {
      // set the coordinates to marker's lat and lng on the first run.
      // if the coordinates exist, get max or min depends on the coordinates.
      north =
        north !== undefined
          ? Math.max(north, marker.position.lat)
          : marker.position.lat;
      south =
        south !== undefined
          ? Math.min(south, marker.position.lat)
          : marker.position.lat;
      east =
        east !== undefined
          ? Math.max(east, marker.position.lng)
          : marker.position.lng;
      west =
        west !== undefined
          ? Math.min(west, marker.position.lng)
          : marker.position.lng;
    }

    const bounds = { north, south, east, west };

    return bounds;
  }
  // Google Map Code End
}
