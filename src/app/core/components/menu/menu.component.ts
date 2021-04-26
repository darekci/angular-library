import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: MenuItem[];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Reservations',
        items: [
          {
            label: 'Active',
            icon: 'pi pi-list',
          },
          {
            label: 'Archive',
            icon: 'pi pi-list',
          },
          {
            label: 'Add',
            icon: 'pi pi-plus',
          },
        ],
      },
      {
        label: 'Books',
        items: [
          {
            label: 'All',
            icon: 'pi pi-list',
            routerLink: ['/books'],
            routerLinkActiveOptions: { exact: true },
          },
          {
            label: 'Add',
            icon: 'pi pi-plus',
            routerLink: ['/books/add'],
            routerLinkActiveOptions: { exact: true },
          },
        ],
      },
      {
        label: 'Users',
        items: [
          {
            label: 'Active',
            icon: 'pi pi-list',
          },
        ],
      },
    ];
  }
}
