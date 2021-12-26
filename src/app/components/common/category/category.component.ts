import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sectionTitle = [
    {
      title: 'Browse Businesses by Category',
      paragraph:
        'WinWin Business Directory integrates all the big, medium and small business in Oman into an easy-to-use, searchable database with a user-friendly and stylish interface. It helps you look into the Oman business world with confidence and style.',
    },
  ];

 singleCategoryBox = [
    {
      icon: 'flaticon-heart-1',
      title: 'Health Care',
      numberOfPlaces: '10 Places',
      link: 'listing-view/1',
    },
    {
      icon: 'flaticon-hotel',
      title: 'Hotel',
      numberOfPlaces: '10 Places',
      link: 'listing-view/2',
    },
    {
      icon: 'flaticon-support',
      title: 'Educational Institutes',
      numberOfPlaces: '10 Places',
      link: 'listing-view/3',
    },
    {
      icon: 'flaticon-airport',
      title: 'Travel & Leisure',
      numberOfPlaces: '5 Places',
      link: 'listing-view/4',
    },
    {
      icon: 'flaticon-cooking',
      title: 'Fitness, Beauty & Spa',
      numberOfPlaces: '5 Places',
      link: 'listing-view/7',
    },
    {
      icon: 'flaticon-cooking',
      title: 'Restaurant',
      numberOfPlaces: '0 Places',
      link: 'listing-view/9',
    },

    {
      icon: 'flaticon-car-insurance',
      title: 'Auto Insurance',
      numberOfPlaces: '0 Places',
      link: 'listing-view/9',
    },
    {
      icon: 'flaticon-attorney',
      title: 'Attorneys',
      numberOfPlaces: '0 Places',
      link: 'listing-view/9',
    },
    {
      icon: 'flaticon-plumber',
      title: 'Plumbers',
      numberOfPlaces: '0 Places',
      link: 'listing-view/9',
    },
    {
      icon: 'flaticon-more-1',
      title: 'View All',
      link: 'listing-view',
    },
  ];
}
