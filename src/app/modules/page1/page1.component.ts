import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../data/services/user.service';
import { User } from '../../data/models/User';
import { Router, NavigationExtras } from '@angular/router';
import { tap, first } from 'rxjs/operators';
@Component({
   selector: 'app-page1',
   templateUrl: './page1.component.html',
   styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
   public userForm: FormGroup;
   public submitted = false;
   constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

   ngOnInit() {
      this.userForm = this.formBuilder.group({
         name: ['', [Validators.required, Validators.pattern('^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyxXZzŹźŻż]+')]],
         surname: ['', [Validators.required, Validators.pattern('^[AaĄąBbCcĆćDdEeĘęFfGgHhIiJjKkLlŁłMmNnŃńOoÓóPpRrSsŚśTtUuWwYyxXZzŹźŻż]+')]],
         age: ['', [Validators.required, Validators.pattern('^[0-9]*$')]]
      });
   }

   get f() {
      return this.userForm.controls;
   }

   public onSubmit() {
      this.submitted = true;

      if (this.userForm.invalid) {
         return;
      }
      const name: string = this.f.name.value;
      const surname: string = this.f.surname.value;
      const age: number = this.f.age.value;

      const user: User = { name, surname, age };
      this.userService
         .saveUser(user)
         .pipe(
            first(),
            tap(_ => this.router.navigateByUrl('page2'))
         )
         .subscribe();
   }
}
