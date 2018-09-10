import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  components_list = [
    {
      checked: false,
      name: 'License Cost(Locked)',
      price: 224,
      desc: 'License Components',
    },
    {
      checked: true,
      name: 'core-service: customers',
      price: 96,
      desc: 'Customer Components',
    },
    {
      checked: true,
      name: 'core-service: resources',
      price: 48,
      desc: 'Resource Components',
    },
    {
      checked: true,
      name: 'core-service: financial accounting',
      price: 114,
      desc: 'Fin. Acct. Components',
    },
    {
      checked: true,
      name: 'core-service: website',
      price: 84,
      desc: 'Website Components',
    },
    {
      checked: true,
      name: 'core-service: support (locked)',
      price: 24,
      desc: 'Support Components',
    },
    {
      checked: true,
      name: 'required: infrastructure (locked)',
      price: 143.21,
      desc: 'Infrastructure Components',
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
