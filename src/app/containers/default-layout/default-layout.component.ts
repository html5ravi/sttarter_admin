import { Component, Input } from '@angular/core';
import { navItems } from './../../_nav';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public sideBar:boolean ;
  public copyrightYear:any = new Date().getFullYear();
  constructor(translate: TranslateService) {
    translate.setDefaultLang('en');
    translate.use('en');

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
      this.sideBar = true;
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }
}
