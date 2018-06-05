import { Component, Input} from '@angular/core';
import { leftNavItems } from './../../_nav';

import {TranslateService} from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems:any =leftNavItems;
  public sidebarMinimized = false;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public copyRightYear:any = new Date().getFullYear();
  constructor(translate: TranslateService,private router: Router) {
    
    // this.router.events.subscribe((evt) => {

    // if (evt instanceof NavigationEnd) {
    //     console.log(evt.url)
    //     if(evt.url =="/home" || evt.url == "/"){
    //       console.log("home page")
    //       this.navItems = [];
    //       this.tempArr = [];
    //       this.tempArr = leftNavItems2
    //       this.navItems = this.tempArr;
          
    //     }else{         
    //       this.navItems = [];
    //       this.tempArr = [];
    //       this.tempArr = leftNavItems
    //       this.navItems = this.tempArr;
    //     } 189 - 20155
        
    //   }
    // });

    translate.setDefaultLang('en');
    translate.use('en');
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');      
    });
    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

ngOnInit() {
  // this.router.events.subscribe((evt) => {
  //   if (evt instanceof NavigationEnd) {
  //       console.log(evt.url)
  //       if(evt.url =="/" || evt.url =="/home"){
  //         console.log("home page")
  //         this.navItems = [];
  //         console.log(this.navItems)
  //         this.navItems = leftNavItems2;
          
  //       }else{         
  //         this.navItems = [];
  //         this.navItems = leftNavItems;
  //       }
        
  //     }
  //   });
}

  


}
