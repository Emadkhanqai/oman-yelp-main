import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-feedback-style-one',
    templateUrl: './feedback-style-one.component.html',
    styleUrls: ['./feedback-style-one.component.scss']
})
export class FeedbackStyleOneComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'User’s Feedback About Us',
            paragraph: 'Your feedback is the power for us to grow'
        }
    ]
    singleFeedbackBox = [
        {
            paragraph: 'I am delighted to browse various products and services on offer. The site is easy to use, interesting and comprehensive.',
            authorImg: 'assets/img/user1.jpg',
            authorName: 'Haadee',
            authorDesignation: 'Consumer',
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
            ]
        },
        {
            paragraph: 'The site covers nearly all kind and sorts of small and local business categories. It was fun to browse and use the various new services on offer',
            authorImg: 'assets/img/user2.jpg',
            authorName: 'Sarah',
            authorDesignation: 'Consumer',
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
            ]
        },
        {
            paragraph: 'Highly satisfying experience. Keep up the good work',
            authorImg: 'assets/img/user3.jpg',
            authorName: 'Baheera',
            authorDesignation: 'Consumer',
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
            ]
        },
        {
            paragraph: 'I am very happy with the service which was provided, but most importantly the business relationship which has flourished throughout the years.',
            authorImg: 'assets/img/user4.jpg',
            authorName: 'Baasim',
            authorDesignation: 'Business',
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
                    icon: 'bx bxs-star-half'
                },
                {
                    icon: 'bx bx-star'
                }
            ]
        },
        {
          paragraph: 'The service goes the extra mile to educate and provide real value to its clients and they have earned our gratitude and loyalty over the many years we have had the pleasure to know them.',
          authorImg: 'assets/img/user4.jpg',
          authorName: 'Abaan',
          authorDesignation: 'Business',
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
                  icon: 'bx bxs-star-half'
              },
              {
                  icon: 'bx bx-star'
              }
          ]
      },
      {
        paragraph: 'Customer service was able to deal with difficult situations in a charming and efficient manner, protecting the company at all times.',
        authorImg: 'assets/img/user4.jpg',
        authorName: 'Aalee',
        authorDesignation: 'Business',
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
                icon: 'bx bxs-star-half'
            },
            {
                icon: 'bx bx-star'
            }
        ]
    }
    ]

    customOptions: OwlOptions = {
        loop: true,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        },
    }

}
