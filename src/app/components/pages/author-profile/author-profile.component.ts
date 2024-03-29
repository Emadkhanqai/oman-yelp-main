import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-author-profile',
    templateUrl: './author-profile.component.html',
    styleUrls: ['./author-profile.component.scss']
})
export class AuthorProfileComponent implements OnInit {

    blogGrid: number = 1;

    constructor() { }

    ngOnInit(): void {
    }

    pageTitleContent = [
        {
            title: 'Author',
            backgroundImage: 'assets/img/page-title/page-title1.jpg'
        }
    ]
    singleListingsBox = [
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings7.jpg'
                }
            ],
            categoryLink: 'listing-detail',
            category: 'Restaurant',
            bookmarkLink: 'listing-detail',
            location: 'Francisco, USA',
            title: 'The Mad Made Grill',
            price: 'Start From: $121',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user1.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'James',
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
            mainImg: [
                {
                    img: 'assets/img/listings/listings4.jpg'
                },
                {
                    img: 'assets/img/listings/listings2.jpg'
                }
            ],
            categoryLink: 'listing-detail',
            category: 'Hotel',
            bookmarkLink: 'listing-detail',
            location: 'Los Angeles, USA',
            title: 'The Beverly Hills Hotel',
            price: 'Start From: $200',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user2.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'Sarah',
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
                    icon: 'bx bx-star'
                }
            ],
            ratingCount: '10'
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings8.jpg'
                }
            ],
            categoryLink: 'listing-detail',
            category: 'Shopping',
            bookmarkLink: 'listing-detail',
            location: 'Seattle, USA',
            title: 'Blue Water Shopping City',
            price: 'Start From: $500',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user5.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'Lina',
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
            mainImg: [
                {
                    img: 'assets/img/listings/listings1.jpg'
                }
            ],
            categoryLink: 'listing-detail',
            category: 'Restaurant',
            bookmarkLink: 'listing-detail',
            location: 'New York, USA',
            title: 'Chipotle Mexican Grill',
            price: 'Start From: $150',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user1.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'Taylor',
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
                    icon: 'bx bx-star'
                },
                {
                    icon: 'bx bx-star'
                }
            ],
            ratingCount: '45'
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings3.jpg'
                }
            ],
            categoryLink: 'listing-detail',
            category: 'Shopping',
            bookmarkLink: 'listing-detail',
            location: 'Bangkok, Thailand',
            title: 'Central Shopping Center',
            price: 'Start From: $110',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user3.jpg',
            openORclose: 'Close Now',
            extraClass: 'status-close',
            authorName: 'James',
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
                    icon: 'bx bxs-star-half'
                }
            ],
            ratingCount: '35'
        },
        {
            mainImg: [
                {
                    img: 'assets/img/listings/listings5.jpg'
                },
                {
                    img: 'assets/img/listings/listings6.jpg'
                }
            ],
            categoryLink: 'listing-detail',
            category: 'Beauty',
            bookmarkLink: 'listing-detail',
            location: 'Suwanee, USA',
            title: 'WinWin Beauty Center',
            price: 'Start From: $100',
            detailsLink: 'listing-detail',
            authorImg: 'assets/img/user4.jpg',
            openORclose: 'Open Now',
            extraClass: 'status-open',
            authorName: 'Andy',
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
                    icon: 'bx bx-star'
                },
                {
                    icon: 'bx bx-star'
                }
            ],
            ratingCount: '15'
        }
    ]

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
            "<i class='flaticon-right-chevron'></i>"
        ]
    }

}
