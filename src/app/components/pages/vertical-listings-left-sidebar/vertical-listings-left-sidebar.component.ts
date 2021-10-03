import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@angular/google-maps';

@Component({
    selector: 'app-vertical-listings-left-sidebar',
    templateUrl: './vertical-listings-left-sidebar.component.html',
    styleUrls: ['./vertical-listings-left-sidebar.component.scss']
})
export class VerticalListingsLeftSidebarComponent implements OnInit {

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
            name: "Restaurants",
        },
        {
            name: "Events",
        },
        {
            name: "Clothing",
        },
        {
            name: "Bank",
        },
        {
            name: "Fitness",
        },
        {
            name: "Bookstore",
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
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            category: 'Restaurant',
            location: 'New York, USA',
            title: 'The Mad Made Grill 2',
            price: 'Start From: $121',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user3.jpg',
            authorName: 'James',
            openORclose: 'Open Now',
            sponsored: true,
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
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            category: 'Hotel',
            location: 'Los Angeles, USA',
            title: 'The Beverly Hills Hotel',
            price: 'Start From: $200',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            openORclose: 'Open Now',
            sponsored: true,
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
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            category: 'Shopping',
            location: 'Seattle, USA',
            title: 'Blue Water Shopping City',
            price: 'Start From: $500',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user5.jpg',
            authorName: 'Lina',
            openORclose: 'Open Now',
            sponsored: false,
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
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            category: 'Restaurant',
            location: 'New York, USA',
            title: 'Chipotle Mexican Grill',
            price: 'Start From: $150',
            detailsLink: 'single-listings',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Taylor',
            openORclose: 'Close Now',
            sponsored: false,
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
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            category: 'Restaurant',
            location: 'New York, USA',
            title: 'Thai Me Up Restaurant',
            price: 'Start From: $150',
            detailsLink: 'single-listings',
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
            categoryLink: 'single-listings',
            bookmarkLink: 'single-listings',
            category: 'Shopping',
            location: 'Seattle, USA',
            title: 'Skyview Shopping Complex',
            price: 'Start From: $500',
            detailsLink: 'single-listings',
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


    // Google Map Code Start

    @ViewChild(GoogleMap) map!: GoogleMap;

    mapOptions: google.maps.MapOptions = {
      center: { lat: 38.9987208, lng: -77.2538699 },
      zoom : 14,
      disableDefaultUI: true,
   }
   marker1 = { position: { lat: 38.9987208, lng: -77.2538699 } };
   marker2 = { position: { lat: 39.7, lng: -76.0 } };
   marker3 = { position: { lat: 37.9, lng: -76.8 } };

   markers = [this.marker1, this.marker2, this.marker3];

   ngAfterViewInit(){
    const bounds = this.getBounds(this.markers);
    this.map.googleMap.fitBounds(bounds);
  }

  getBounds(markers){
    let north;
    let south;
    let east;
    let west;

    for (const marker of markers){
      // set the coordinates to marker's lat and lng on the first run.
      // if the coordinates exist, get max or min depends on the coordinates.
      north = north !== undefined ? Math.max(north, marker.position.lat) : marker.position.lat;
      south = south !== undefined ? Math.min(south, marker.position.lat) : marker.position.lat;
      east = east !== undefined ? Math.max(east, marker.position.lng) : marker.position.lng;
      west = west !== undefined ? Math.min(west, marker.position.lng) : marker.position.lng;
    };

    const bounds = { north, south, east, west };

    return bounds;
  }
    // Google Map Code End


}
