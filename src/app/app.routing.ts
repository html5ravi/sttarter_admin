import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

//Sttarter Components
import { UsersComponent } from './pages/users/users.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { ContentSystemComponent } from './pages/content-system/content-system.component';
import { CouponsComponent } from './pages/coupons/coupons.component';
import { CommunicatorComponent } from './pages/communicator/communicator.component';
import { ReferralComponent } from './pages/referral/referral.component';
import { HelpdeskComponent } from './pages/helpdesk/helpdesk.component';
import { ReviewsComponent } from './pages/reviews/reviews.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },{
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path:'users',
        component:UsersComponent,
        data: {
          title: 'Users'
        },
      },
      {
        path:'communicator',
        component:CommunicatorComponent,
        data: {
          title: 'Communicator'
        },
      },
      {
        path:'referral',
        component:ReferralComponent,
        data: {
          title: 'Referral'
        },
      },
      {
        path:'wallets',
        component:WalletComponent,
        data: {
          title: 'Wallets'
        },
      },
      {
        path:'coupons',
        component:CouponsComponent,
        data: {
          title: 'Coupons'
        },
      },
      {
        path:'content-system',
        component:ContentSystemComponent,
        data: {
          title: 'Content System'
        },
      },
      {
        path:'helpdesk',
        component:HelpdeskComponent,
        data: {
          title: 'Helpdesk'
        },
      },
      {
        path:'reviews',
        component:ReviewsComponent,
        data: {
          title: 'Reviews'
        },
      },
      {
        path: 'base',
        loadChildren: './views/base/base.module#BaseModule'
      },
      {
        path: 'buttons',
        loadChildren: './views/buttons/buttons.module#ButtonsModule'
      },
      {
        path: 'charts',
        loadChildren: './views/chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'icons',
        loadChildren: './views/icons/icons.module#IconsModule'
      },
      {
        path: 'notifications',
        loadChildren: './views/notifications/notifications.module#NotificationsModule'
      },
      {
        path: 'theme',
        loadChildren: './views/theme/theme.module#ThemeModule'
      },
      {
        path: 'widgets',
        loadChildren: './views/widgets/widgets.module#WidgetsModule'
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
