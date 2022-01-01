import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataListingService {
  constructor() {}

  options = [
    // Type here your category name
    {
      name: 'Healthcare',
      id: 1,
      link: 'listing-view',
    },
    {
      name: 'Home Services',
      id: 8,
      link: 'listing-view',
    },
    {
      name: 'Social Media',
      id: 9,
      link: 'listing-view',
    },
    {
      name: 'Hotel',
      id: 2,
      link: 'listing-view',
    },
    {
      name: 'Educational Institutions',
      id: 3,
      link: 'listing-view',
    },
    {
      name: 'Travel and Leisure',
      id: 4,
      link: 'listing-view',
    },
    {
      name: 'Events',
      id: 5,
      link: 'listing-view',
    },
    {
      name: 'Shopping',
      id: 6,
      link: 'listing-view',
    },
    {
      name: 'Fitness, Beauty and Spa',
      id: 7,
      link: 'listing-view',
    },
    {
      name: 'Restaurant',
      id: 10,
      link: 'listing-view',
    },
    {
      name: 'Auto Insurance',
      id: 12,
      link: 'listing-view',
    },
  ];

  locations = [
    {
      name: 'Al-Buraimi',
      id: 1,
    },
    {
      name: 'Musandam',
      id: 2,
    },
    {
      name: 'Muscat',
      id: 3,
    },
    {
      name: 'Al-Batinah North',
      id: 4,
    },
    {
      name: 'Al-Wusta',
      id: 5,
    },
    {
      name: 'Dhofar',
      id: 6,
    },
  ];

  singleListingsItem = [
    {
      featured: true,
      mainImg: 'assets/img/listings/listings9.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hospital_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId: 1,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Abeer Hospital',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/listings9.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hospital_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId: 2,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Al Hayat International Hospital',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/listings9.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hospital_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId: 3,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Al Nahdha Hospital',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/listings9.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hospital_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId: 4,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Aster Al Raffah Hospital',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/listings9.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hospital_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId: 5,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Apollo Hospital',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/listings9.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hospital_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId: 6,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Armed Forces Hospital',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: true,
      mainImg: 'assets/img/listings/listings9.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hospital_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId: 7,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Badr al Samaa Group of hospitals and polyclinics',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/listings9.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hospital_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId: 8,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Burjeel Hospital',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/listings9.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hospital_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId: 9,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Khoula Hospital',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/listings9.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hospital_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Healthcare',
      categoryId: 1,
      articleId: 10,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'KIMS Oman Hospital',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: true,
      mainImg: 'assets/img/listings/hotel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hotel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 11,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Al Bustan Palace, A Ritz-Carlton Hotel',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/hotel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hotel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 12,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Al Falaj Hotel',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: true,
      mainImg: 'assets/img/listings/hotel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hotel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 13,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Beach Hotel',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/hotel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hotel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 14,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'City Seasons Hotel',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/hotel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hotel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 15,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Coral Boutique Hotel',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/hotel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hotel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 16,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Crowne Plaza',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/hotel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hotel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 17,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Golden Tulip Seeb',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/hotel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hotel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 18,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Grand Hyatt',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/hotel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hotel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 19,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Haffa House',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/hotel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/hotel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 20,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Holiday Inn',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/educational.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/educational_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Educational Institutions',
      categoryId: 3,
      articleId: 21,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Al-Zahra College for Women',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/educational.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/educational_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Educational Institutions',
      categoryId: 3,
      articleId: 22,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Bayan College',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/educational.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/educational_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Educational Institutions',
      categoryId: 3,
      articleId: 23,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Higher College of Technology',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/educational.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/educational_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Educational Institutions',
      categoryId: 3,
      articleId: 24,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Majan University College',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/educational.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/educational_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Educational Institutions',
      categoryId: 3,
      articleId: 25,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Mazoon College',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/educational.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/educational_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Educational Institutions',
      categoryId: 3,
      articleId: 26,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Middle East College',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/educational.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/educational_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Educational Institutions',
      categoryId: 3,
      articleId: 27,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Modern College of Business and Science',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/educational.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/educational_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Educational Institutions',
      categoryId: 3,
      articleId: 28,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'National University of Science and Technology',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/educational.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/educational_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Educational Institutions',
      categoryId: 3,
      articleId: 29,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Sultan Qaboos University',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: true,
      mainImg: 'assets/img/listings/educational.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/educational_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Educational Institutions',
      categoryId: 3,
      articleId: 30,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Waljat Colleges of Applied Sciences',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/Travel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/travel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Travel and Leisure',
      categoryId: 4,
      articleId: 31,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Grand Masjid/ Sultan Qaboos Grand Masjid',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/Travel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/travel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Travel and Leisure',
      categoryId: 4,
      articleId: 32,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Matrah Souq',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/Travel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/travel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Travel and Leisure',
      categoryId: 4,
      articleId: 33,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Al Aalam Palace',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/Travel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/travel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Travel and Leisure',
      categoryId: 4,
      articleId: 34,
      icon: 'flaticon-heart-1',
      location: 'Jabel',
      title: 'Jabel Akhdar',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: true,
      mainImg: 'assets/img/listings/Travel.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/travel_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Travel and Leisure',
      categoryId: 4,
      articleId: 35,
      icon: 'flaticon-heart-1',
      location: 'Wadi Shab',
      title: 'Wadi Shab',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: true,
      mainImg: 'assets/img/listings/events.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/events_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Events',
      categoryId: 5,
      articleId: 36,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Royal Opera House',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/events.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/events_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Events',
      categoryId: 5,
      articleId: 37,
      icon: 'flaticon-heart-1',
      location: 'Salalah',
      title: 'Salalah Tourism Festiva',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/events.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/events_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Events',
      categoryId: 5,
      articleId: 38,
      icon: 'flaticon-heart-1',
      location: '',
      title: 'Tour of Oman',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/events.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/events_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Events',
      categoryId: 5,
      articleId: 39,
      icon: 'flaticon-heart-1',
      location: '',
      title: 'Beach Activities',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/events.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/events_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Events',
      categoryId: 5,
      articleId: 40,
      icon: 'flaticon-heart-1',
      location: '',
      title: 'Desert Safari',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: true,
      mainImg: 'assets/img/listings/shopping.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/shopping_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Shopping',
      categoryId: 6,
      articleId: 41,
      icon: 'flaticon-heart-1',
      location: 'Nizwa',
      title: 'Nizwa Souq',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/shopping.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/shopping_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Shopping',
      categoryId: 6,
      articleId: 42,
      icon: 'flaticon-heart-1',
      location: '',
      title: 'AlHusn / Haffa Souq',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/shopping.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/shopping_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Shopping',
      categoryId: 6,
      articleId: 43,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Muttrah Souq',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/shopping.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/shopping_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Shopping',
      categoryId: 6,
      articleId: 44,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'City Center',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/shopping.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/shopping_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Shopping',
      categoryId: 6,
      articleId: 45,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Oman Avenues Mall',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/fitness.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/fitness_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Fitness, Beauty and Spa',
      categoryId: 7,
      articleId: 46,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Castle of Beauty Salon and Spa',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/fitness.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/fitness_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Fitness, Beauty and Spa',
      categoryId: 7,
      articleId: 46,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'The Spa at Chedi',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/fitness.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/fitness_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Fitness, Beauty and Spa',
      categoryId: 7,
      articleId: 46,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'AlBustan Palace Spa',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/fitness.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/fitness_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Fitness, Beauty and Spa',
      categoryId: 7,
      articleId: 46,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Salaam Space Yoga',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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
      featured: false,
      mainImg: 'assets/img/listings/fitness.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/fitness_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Fitness, Beauty and Spa',
      categoryId: 7,
      articleId: 47,
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Eva Fitness',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  description: '',
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



     // SUB CATEGORY START

     {
      featured: false,
      mainImg: 'assets/img/listings/listings14.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_14_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Clinics',
      categoryId: 14,
      articleId: 48,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Bowsher Dental Clinic',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'Promoting an atmosphere of trust, our aim and philosophy is to provide highly personalized care in a relaxed and friendly environment. Thanks to our valued patients\' reviews and recommendations, we are arguably regarded as one of the leading dental clinics in Oman, offering you and your family painless dental care with a personal touch. Our use of the latest in technological advancements in the field of dentistry ensures that you have access to the best dental care in Oman.',
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
      featured: false,
      mainImg: 'assets/img/listings/listings15.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_15_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Clinics',
      categoryId: 14,
      articleId: 49,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Capital Veterinary Centre',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'Capital Veterinary Centre L.L.C - CVC AL Qurum St. Muscat Oman veterinary clinic is specialist in Vets Services, Treatments, Grooming and travel Relocation with onsite pharmacy for Dogs, Cats & Birds.',
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
      featured: false,
      mainImg: 'assets/img/listings/listings16.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_16_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Clinics',
      categoryId: 14,
      articleId: 50,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Vet Clinic',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'Muscat Veterinary Clinic - your full-service veterinary hospital. A highly trained and caring staff using state-of- the art equipment and technology offers the kind of service and care that you and your pet deserve.',
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
      featured: false,
      mainImg: 'assets/img/listings/listings17.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_17_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Clinics',
      categoryId: 14,
      articleId: 51,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Mental Health Clinic',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'Here at Beautiful Mind Oman, we are more than just a mental health wellness clinic. We take a holistic approach to mental well-being. We believe that peace of mind comes from mental and physical well-being, they are one and the same. We provide a comprehensive approach that will provide you with best professional service available. We at Beautiful Mind Clinic believe that no therapy is effective without the necessary and complimentary education. We aim to offer multiple modes of literature relevant to our therapies and supporting services. Understanding why mental health is important in our daily lives is necessary for our comprehension of its benefits',
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
      featured: false,
      mainImg: 'assets/img/listings/listings18.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_18_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Clinics',
      categoryId: 14,
      articleId: 52,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'APEX Laboratory Services',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'We are committed & compassionate in providing high quality & accurate diagnostic services using latest technologies within a shortest turn around time.',
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
      featured: false,
      mainImg: 'assets/img/listings/listings19.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_19_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 53,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Hotel Sifawy Boutique',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'The Sifawy Boutique Hotel offers a warm and friendly atmosphere, reflecting the hospitable nature of the Omani people. The Sifawy Boutique Hotel is in the Sultanate of Oman, only 45 minutes drive from the capital city Muscat. Sifawy, meaning those “From Sifah”, is located within the world-class Jebel Sifah Resort.',
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
      featured: false,
      mainImg: 'assets/img/listings/listings20.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_20_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Hotel',
      categoryId: 2,
      articleId: 54,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Six Sense Zighy-Bay',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'Nestled in Oman’s dramatic Musandam Peninsula, where rugged mountains dive into vibrant emerald waters, across a powdery sand beach, the village-inspired resort in Oman offers a range of villas, suites and beachfront retreats, each with a private pool, traditional summer house and the time and space to find yourself. There’s something for everyone including eclectic dining featuring local and international cuisine, an award-winning spa and a plethora of unique experiences.',
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
      featured: false,
      mainImg: 'assets/img/listings/listings21.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_21_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Home Services',
      categoryId: 8,
      articleId: 55,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Muna Noor Engineering & Contracting (MNEC) ',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'Muna Noor Engineering & Contracting (MNEC) is one of the many accomplished companies founded by the Muna Noor International LLC Group. With 26 years of experience, MNEC is a leader in its field with a strong reputation for excellence. We service both the public and private sectors and have completed many diverse and major projects throughout Oman.',
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
      featured: false,
      mainImg: 'assets/img/listings/listings22.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_22_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Home Services',
      categoryId: 8,
      articleId: 56,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Home Care',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'Plumbing maintenance. We can meet all your small plumbing repair needs. <br/>      What is Included: <br/>      Repair of visible broken pipes <br/>      or Repair of over-flowing toilets <br/>      or Rectification of low or no water pressure <br/>      or Clear clogged waste pipes <br/>      or Fix drainage blocks in showers and sinks <br/>      or Identify and replace corroded or faulty flexible hoses <br/>      or Repair or replace faulty gate valves and faulty mixer tap <br/>      or Replacements of water pumps and pressure kits',
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
      featured: false,
      mainImg: 'assets/img/listings/listings23.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_23_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Home Services',
      categoryId: 8,
      articleId: 57,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Land Map',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'We are Land Map, hire of land surveyors, cut fill Quantity calculation and road design, as it is our core business activity. We are registered with the ministry of commerce and industry as an "excellent" grade Company, we have been offering the best of our services to major companies across Oman, dealing with land survey from past eight years. customer satisfaction is one of our prime concerns.',
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
      featured: false,
      mainImg: 'assets/img/listings/listings24.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_24_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Social Media',
      categoryId: 9,
      articleId: 58,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Honey',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'Availability of social media platforms to post and adviertise various products and servies.',
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
      featured: false,
      mainImg: 'assets/img/listings/listings25.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_25_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Social Media',
      categoryId: 9,
      articleId: 59,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Dukan',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'Availability of social media platforms to post and adviertise various products and servies.',
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
      featured: false,
      mainImg: 'assets/img/listings/listings26.jpg',
      mainImg_single: [
        {
          img: 'assets/img/listings/clinic_26_details.jpg',
        },
      ],
      categoryLink: 'listing-detail',
      bookmarkLink: 'listing-detail',
      category: 'Social Media',
      categoryId: 9,
      articleId: 60 ,
      phone: '93948316',
      icon: 'flaticon-heart-1',
      location: 'Muscat',
      title: 'Dukan',
      price: 'Start From: $121',
      detailsLink: 'listing-detail',
      authorImg: 'assets/img/user3.jpg',
      authorName: 'James',  
      description: 'Availability of social media platforms to post and adviertise various products and servies.',
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
    // SUB CATEGORY END
  ];
}
