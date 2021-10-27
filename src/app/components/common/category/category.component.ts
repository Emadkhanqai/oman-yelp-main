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
      paragraph: '',
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
      icon: 'flaticon-calendar',
      title: 'Events',
      numberOfPlaces: '5 Places',
      link: 'listing-view/5',
    },
    {
      icon: 'flaticon-commerce',
      title: 'Shopping',
      numberOfPlaces: '5 Places',
      link: 'listing-view/6',
    },
    {
      icon: 'flaticon-cooking',
      title: 'Fitness, Beauty & Spa',
      numberOfPlaces: '5 Places',
      link: 'listing-view/7',
    },
  ];
}
