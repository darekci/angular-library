import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {}

  items: MenuItem[];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Reservations',
        icon: 'pi pi-lock',
        command: () => {
          this.router.navigateByUrl('/reservations');
        },
      },
      {
        label: 'Books',
        icon: 'pi pi-book',
        command: () => {
          this.router.navigateByUrl('/books');
        },
      },
      {
        label: 'Users',
        icon: 'pi pi-user',
        command: () => {
          this.router.navigateByUrl('/users');
        },
      },
    ];
  }
}
