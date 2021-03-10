import { Component, OnInit } from '@angular/core';
import {merge, Observable, of} from "rxjs";
import { ActivatedRoute, Router, NavigationEnd } from "@angular/router";
import { filter, switchMap, map, tap } from "rxjs/operators";

@Component({
  selector: 'app-tp-container',
  templateUrl: './tp-container.component.html',
  styleUrls: ['./tp-container.component.css']
})
export class TpContainerComponent implements OnInit {

  showSideNav$: Observable<boolean> | undefined;
  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.onShowSideNav();
  }
  public onRowClick(id: any) {
    this.router.navigate(["users", id]);
  }
  public closeDetails() {
    this.router.navigate(["."], {relativeTo: this.route.parent});
  }
  public onShowSideNav() {
    // check if there's an id in URL
    const initParams$ =
      of(this.route.firstChild ?
        this.route.firstChild.params : null
      );
    // still subscribe to router's event
    const params$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      switchMap(_ => {
        return this.route.firstChild ?
          this.route.firstChild.params : of(false);
      }),
      map(params => !!params)
    );

    // merge 2 Observables together
    this.showSideNav$ = merge(initParams$, params$).pipe(
      map(data => !!data)
    );
  }

  ngOnInit(): void {
  }

}
