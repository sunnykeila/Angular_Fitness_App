import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{

  @Output() sidenavToggle22 = new EventEmitter<void>();
  isAuth33 = false;
  authSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authSubscription  = this.authService.authChange22.subscribe(authStatus => {
       this.isAuth33 = authStatus;
    });
  }

  onToggleSidenav() {
    this.sidenavToggle22.emit();
  }

  onLogout() {
     this.authService.logout()
  }

    ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }


}
