import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-how-it-works',
    templateUrl: './how-it-works.component.html',
    styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'How It Works',
            paragraph: 'We believe in simple workable solutions providing full stakeholders satisfaction with added value supporting WinWin situation based on this type of business concept, WinWin platform initiative raises satisfy all the relative stakeholders seeking for daily business transactions in different categories.'
        }
    ]
    howItWorksBox = [
        {
            icon: 'flaticon-placeholder',
            title: 'Find Interesting Place',
            paragraph: 'Choose your favorite destinations from across the county. These hidden gems capture the very essence of Oman, from the soaring natural beauty to the rugged sandy beaches or the stunning landscapes, and from the cosmopolitan charm of cities to ancient streets. Whatever you\'re looking for we\'ll help you to discover the destinations that are perfectly suited to you.'
        },
        {
            icon: 'flaticon-support-1',
            title: 'Contact a Few Owners',
            paragraph: 'Contact owners for more info and feedback.'
        },
        {
            icon: 'flaticon-tick',
            title: 'Make a Reservation',
            paragraph: 'Make a reservation of your choice to enjoy and spend a nice time at your favorite spot.'
        }
    ]

}