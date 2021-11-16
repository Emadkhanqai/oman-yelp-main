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
}
