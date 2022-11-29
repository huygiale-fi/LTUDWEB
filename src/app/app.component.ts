import { Component } from '@angular/core';
import { ChildrenOutletContexts, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { slideInAnimation } from './animation';
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideInAnimation
  ]
})

export class AppComponent {
  constructor(private contexts: ChildrenOutletContexts,
    private router: Router) {
  }

  ngOnInit() {
    this.setUpAnalytics();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  title = 'LTHD-FE';

  setUpAnalytics() {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        console.log(event.urlAfterRedirects)
        gtag('config', 'G-CS300YPFLY',
          {
            'page_path': event.urlAfterRedirects
          }
        );
      }
    );
  }
}
