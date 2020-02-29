import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationPage } from './core/enum/NavigationPage';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  public navPageEnum = NavigationPage;
  constructor(private router: Router) { }

  navigateToPage(page: NavigationPage): void {
    this.router.navigateByUrl(page);
  }
}
