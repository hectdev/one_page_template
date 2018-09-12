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
  entities_list = [
    {
      header: 'entity_name',      val1: 'GTJJ',      val2: 'SAMRAD CHIROPRACTIC',      val3: 'OREB SNAKEOIL CO',
    },
    {
      header: 'date-time-stamp',      val1: '2018-09-09 04:35:34',      val2: '2018-09-10 05:07:34',      val3: '2018-09-09 05:35:07',
    },
    {
      header: 'quote_policy_number',      val1: 'DH7nGb5ZGEnu7',      val2: 'sfxeAX8C6o0NJ',      val3: 'PugNAbP0cR7Zm',
    },
    {
      header: 'License Cost (locked)',      val1: '$208.00',      val2: '$123.00',      val3: '$193.00',
    },
    {
      header: 'core-service: customers',      val1: '$32.00',      val2: '$32.00',      val3: '$32.00',
    },
    {
      header: 'core-service: resources',      val1: '$16.00',      val2: '$16.00',      val3: '$16.00',
    },
    {
      header: 'core-service: financial accounting',      val1: '$98.00',      val2: '$98.00',      val3: '$98.00',
    },
    {
      header: 'core-service: website',      val1: '$28.00',      val2: '$28.00',      val3: '$28.00',
    },
    {
      header: 'core-service: support (locked)',      val1: '$8.00',      val2: '$8.00',      val3: '$8.00',
    },
    {
      header: 'required: infrastructure (locked)',      val1: '$47.74',      val2: '$47.74',      val3: '$47.74',
    },
    {
      header: 'PAY AS YOU GO @ $6.25',      val1: '$0.00',      val2: '$1000.00',      val3: '$0.00',
    },
    {
      header: 'PREPAID @ $4.17',      val1: '$667.20',      val2: '$0.00',      val3: '$667.20',
    },
    {
      header: 'SUBTOTAL',      val1: '$1104.94',      val2: '$1352.74',      val3: '$1089.94',
    },
  ]
  services_list = [
    { title: 'MINDBODY',               price: '$195',      description: '',},
    { title: 'TSheets by QuickBooks',  price: '$96',      description: '',},
    { title: 'QuickBooks Online',      price: '$99',      description: '',},
    { title: 'QBO Payroll fee',      price: '$39',      description: '',},
    { title: 'Tax Forms (done by CPA)',      price: '$525',      description: '',},
    { title: 'G Suite',      price: '$10',      description: '',},
    { title: 'Bookkeeping (6 hrs/mo x $50)',      price: '$300',      description: '',},
    { title: 'Constant Contact w/ Survey ',      price: '$70',      description: '',},
    { title: 'Shopify',      price: '$79',      description: '',},
    { title: 'website hosting',      price: '$30',      description: '',},
    { title: '',      price: '$1,443',      description: 'None of these are applications were designed to work with each other, integration is often not available, these are all differnet vendors each with a different point of contact for support'}
  ]
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Rt'
    };
  }

}

/*
        <!--
        <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

            <!--- Note that these columns can be defined in any order.
                    The actual rendered columns are set as a property on the row definition" -->
            
            <!-- Position Column -->
            <ng-container matColumnDef="position">
                <th mat-header-cell *matHeaderCellDef> No. </th>
                <td mat-cell *matCellDef="let element"> {{element.position}} </td>
            </ng-container>
            
            <!-- Name Column -->
            <ng-container matColumnDef="name">
                <th mat-header-cell *matHeaderCellDef> Name </th>
                <td mat-cell *matCellDef="let element"> {{element.name}} </td>
            </ng-container>
            
            <!-- Weight Column -->
            <ng-container matColumnDef="weight">
                <th mat-header-cell *matHeaderCellDef> Weight </th>
                <td mat-cell *matCellDef="let element"> {{element.weight}} </td>
            </ng-container>
            
            <!-- Symbol Column -->
            <ng-container matColumnDef="symbol">
                <th mat-header-cell *matHeaderCellDef> Symbol </th>
                <td mat-cell *matCellDef="let element"> {{element.symbol}} </td>
            </ng-container>
            
            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
            </table>
*/