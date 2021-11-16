import { Component, OnInit } from '@angular/core';
import { DataListingService } from 'src/app/data-listing.service';

@Component({
  selector: 'app-hometwo-banner',
  templateUrl: './hometwo-banner.component.html',
  styleUrls: ['./hometwo-banner.component.scss'],
})
export class HometwoBannerComponent implements OnInit {
  options;
  _locations;

  constructor(public dataService: DataListingService) {}

  ngOnInit(): void {
    this.options = this.dataService.options;
    this._locations = this.dataService.locations;
    console.log(this.dataService.locations);
    this.resetOption = [this.options[0]];
    const list = [...this.dataService.options];
    this.bannerContent[0].popularSearchList = list.splice(0, 3).slice();
  }

  bannerContent = [
    {
      title: 'Find Nearby',
      paragraph: 'Discover the perfect business',
      popularSearchList: [],
    },
  ];
  bannerImage = [
    {
      img: 'assets/img/banner-img1.png',
    },
  ];

  // Category Select
  singleSelect: any = [];
  _singleSelect: any = [];

  multiSelect: any = [];
  stringArray: any = [];
  objectsArray: any = [];
  resetOption: any;

  config = {
    displayKey: 'name',
    search: true,
  };

  _config = {
    displayKey: 'name',
    search: true,
    placeholder: 'location',
  };

  searchChange($event) {
    console.log($event);
  }

  reset() {
    this.resetOption = [];
  }
}
