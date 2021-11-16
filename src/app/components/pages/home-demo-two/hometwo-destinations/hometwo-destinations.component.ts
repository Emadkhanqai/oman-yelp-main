import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hometwo-destinations',
  templateUrl: './hometwo-destinations.component.html',
  styleUrls: ['./hometwo-destinations.component.scss'],
})
export class HometwoDestinationsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  sectionTitle = [
    {
      title: 'Popular Places for Future Trips',
      paragraph:
        '',
    },
  ];
  singleDestinationsBigBox = [
    {
      img: 'assets/img/destinations/destinations1.jpg',
      subTitle: 'THAILAND',
      title: 'Bangkok',
      number: '26 Places',
      link: 'listing-view',
    },
  ];
  singleDestinationsBox = [
    {
      img: 'assets/img/destinations/destinations5.jpg',
      subTitle: 'Oman',
      title: 'Al-Buraimi',
      number: '21 Places',
      link: 'listing-view',
    },
    {
      img: 'assets/img/destinations/destinations6.jpg',
      subTitle: 'Oman',
      title: 'Musandam',
      number: '14 Places',
      link: 'listing-view',
    },
    {
      img: 'assets/img/destinations/destinations4.jpg',
      subTitle: 'Oman',
      title: 'Muscat',
      number: '35 Places',
      link: 'listing-view',
    },
    {
      img: 'assets/img/destinations/albatinahnorth.jpg',
      subTitle: 'Oman',
      title: 'AL BATINAH NORTH',
      number: '20 Places',
      link: 'listing-view',
    },
    {
      img: 'assets/img/destinations/alwusta.jpg',
      subTitle: 'Oman',
      title: 'AL WUSTA',
      number: '30 Places',
      link: 'listing-view',
    },


    {
      img: 'assets/img/destinations/dhofar.jpg',
      subTitle: 'Oman',
      title: 'Dhofar',
      number: '10 Places',
      link: 'listing-view',
    },
  ];
}
