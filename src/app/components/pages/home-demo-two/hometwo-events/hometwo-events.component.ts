import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hometwo-events',
    templateUrl: './hometwo-events.component.html',
    styleUrls: ['./hometwo-events.component.scss']
})
export class HometwoEventsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            title: 'Upcoming Events',
            paragraph: ''
        }
    ]
    eventsBox = [
        {
            img: 'assets/img/events/events-big.jpg',
            title: 'Global Robotics Summit & Festival',
            date: 'Thu, Jul 30, 11:30 am - 10:00 pm',
            link: '/'
        }
    ]
    singleEventsBox = [
        {
            img: 'assets/img/events/events1.jpg',
            title: 'Internet of Things Forum Africa Exhibition (IOTFA)',
            date: 'Thu, Jul 30, 11:30 am - 10:00 pm',
            link: '/'
        },
        {
            img: 'assets/img/events/events2.jpg',
            title: 'Digital Marketing: Customer Engagement & Social Media',
            date: 'Wed, Jul 29, 11:30 am - 10:00 pm',
            link2: 'single-events',
            link: '/'
        }
    ]

}
