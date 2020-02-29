import { Component, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../data/models/User';
import { UserService } from '../../data/services/user.service';
import { first, tap } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  public user: User;
  public showAlert: boolean = false;
  public bgImageVariable: string = '';
  public alertMessage: string = 'You by at least 18 years old!';

  constructor(private userService: UserService, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.userService.getUser().pipe(
      first(),
      tap(user => this.user = user)
    ).subscribe();
  }

  getBackground() {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${this.bgImageVariable})`);
}

  public access(): void {
    this.grownUser() ? this.haveAnAccess() : this.lackOfAccess();
  }

  public grownUser(): boolean {
    return this.user.age >= 18;
  }

  private lackOfAccess(): void {
    this.bgImageVariable = '';
    this.showAlert = true;
  }

  public haveAnAccess(): void {
    this.bgImageVariable = '/assets/images/hidethepainharold.jpg';
    this.showAlert = false;
  }
}
