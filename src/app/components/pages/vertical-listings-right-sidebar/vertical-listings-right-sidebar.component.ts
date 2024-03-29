import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-listings-right-sidebar',
  templateUrl: './vertical-listings-right-sidebar.component.html',
  styleUrls: ['./vertical-listings-right-sidebar.component.scss']
})
export class VerticalListingsRightSidebarComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        this.resetOption = [this.options[0]];
    }

    pageTitleContent = [
        {
            title: 'Find Popular Places'
        }
    ]

    // Category Select
    singleSelect: any = [];
    multiSelect: any = [];
    stringArray: any = [];
    objectsArray: any = [];
    resetOption: any;
    config = {
        displayKey: "name",
        search: true
    };
    options = [
        // Type here your category name
        {
          name: "Healthcare",
      },
      {
          name: "Hotel",
      },
      {
          name: "Educational Institutions",
      },
      {
          name: "Travel and Leisure",
      },
      {
          name: "Events",
      },
      {
          name: "Shopping",
      },
      {
          name: "Fitness, Beauty and Spa",
      }
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
            name: "Recommended",
        },
        {
            name: "Default",
        },
        {
            name: "Popularity",
        },
        {
            name: "Latest",
        },
        {
            name: "Price: low to high",
        },
        {
            name: "Price: high to low",
        }
    ];

    // All Listings
    singleListingsItem = [
        {
            mainImg: 'assets/img/listings/listings9.jpg',
            categoryLink: 'listing-detail',
            bookmarkLink: 'listing-detail',
            category: 'Restaurant',
            location: 'New York, USA',
            title: 'The Mad Made Grill',
            price: 'Start From: $121',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user3.jpg',
            authorName: 'James',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                }
            ],
            ratingCount: '18'
        },
        {
            mainImg: 'assets/img/listings/listings10.jpg',
            categoryLink: 'listing-detail',
            bookmarkLink: 'listing-detail',
            category: 'Hotel',
            location: 'Los Angeles, USA',
            title: 'The Beverly Hills Hotel',
            price: 'Start From: $200',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                }
            ],
            ratingCount: '10'
        },
        {
            mainImg: 'assets/img/listings/listings11.jpg',
            categoryLink: 'listing-detail',
            bookmarkLink: 'listing-detail',
            category: 'Shopping',
            location: 'Seattle, USA',
            title: 'Blue Water Shopping City',
            price: 'Start From: $500',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user5.jpg',
            authorName: 'Lina',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                }
            ],
            ratingCount: '55'
        },
        {
            mainImg: 'assets/img/listings/listings12.jpg',
            categoryLink: 'listing-detail',
            bookmarkLink: 'listing-detail',
            category: 'Restaurant',
            location: 'New York, USA',
            title: 'Chipotle Mexican Grill',
            price: 'Start From: $150',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Taylor',
            openORclose: 'Close Now',
            extraClass: 'status-close',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                }
            ],
            ratingCount: '45'
        },
        {
            mainImg: 'assets/img/listings/listings17.jpg',
            categoryLink: 'listing-detail',
            bookmarkLink: 'listing-detail',
            category: 'Restaurant',
            location: 'New York, USA',
            title: 'Thai Me Up Restaurant',
            price: 'Start From: $150',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            openORclose: 'Close Now',
            extraClass: 'status-close',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                }
            ],
            ratingCount: '45'
        },
        {
            mainImg: 'assets/img/listings/listings16.jpg',
            categoryLink: 'listing-detail',
            bookmarkLink: 'listing-detail',
            category: 'Shopping',
            location: 'Seattle, USA',
            title: 'Skyview Shopping Complex',
            price: 'Start From: $500',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user5.jpg',
            authorName: 'Lina',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            rating: [
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                },
                {
                    icon: 'bx bxs-star'
                }
            ],
            ratingCount: '55'
        }
    ]

    verticalListings: number = 1;

}
