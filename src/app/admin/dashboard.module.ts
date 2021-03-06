import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import { MatFormFieldModule } from '@angular/material/form-field';
import { DarshanRoutingModule } from './dashboard-routing.module';
import { MatCardTitle } from '@angular/material/card';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PushNotificationComponent } from './push-notification/push-notification.component';
import { UserListComponent } from './user/user-list/user-list.component';


import { AddTermsComponent } from './Terms and conditions/add-terms/add-terms.component';
import { TermsComponent } from './Terms and conditions/terms/terms.component';
import { AddDonationComponent } from './Donation/add-donation/add-donation.component';
import { DonationUserComponent } from './Donation/donation-user/donation-user.component';
import { DonationlistComponent } from './Donation/donationlist/donationlist.component';


import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { CateringServicesListComponent } from './Catering services/catering-services-list/catering-services-list.component';
import { MenuListComponent } from './Catering services/menu-list/menu-list.component';

import { PaymentStatusComponent } from './Catering services/payment-status/payment-status.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { DropdownComponent } from './Shared/dropdown/dropdown.component';

import { AddServicesComponent } from './Catering services/add-services/add-services.component';

import { ProfileComponent } from './settings/profile/profile.component';
import { SubadminListComponent } from './subadmin/subadmin-list/subadmin-list.component';

// import{ NgApexchartsModule} from 'ng-apexcharts'
// import{NgxChartsModule} from '@swimlane/ngx-charts'
import { NgChartsModule } from 'ng2-charts';
import { ProductComponent } from './product/product.component';
import { OderComponent } from './oder/oder.component';
import { DeliverBoyComponent } from './deliver-boy/deliver-boy.component';
import { SubadminComponent } from './subadmin/subadmin/subadmin.component';
import { BannerComponent } from './banner/banner.component';
import { NgpImagePickerModule } from 'ngp-image-picker';
import { TotalCityComponent } from './total-city/total-city.component';
import { CollectionComponent } from './collection/collection.component';
import { CouponComponent } from './coupon/coupon.component';
import { CountryCodeComponent } from './country-code/country-code.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { TimeSlotsComponent } from './time-slots/time-slots.component';
import { CouponCodeComponent } from './coupon-code/coupon-code.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { PaymentComponent } from './payment/payment.component';
import { PrivacylistComponent } from './Privacy policy/privacylist/privacylist.component';
import { OrderRefundComponent } from './order-refund/order-refund.component';
// import{NgxEchartsModule} from 'ngx-echarts';
@NgModule({
  declarations: [

    DashboardComponent,
 
  

    PushNotificationComponent,
    UserListComponent,
    PrivacylistComponent,
 

 
    AddTermsComponent,
    TermsComponent,
    AddDonationComponent,


    UserProfileComponent,
 
    MenuListComponent,

   

    
    PaymentStatusComponent,
    
    DropdownComponent,
  
    AddServicesComponent,

  
    OrderRefundComponent,
  
    ProductComponent,
    OderComponent,
    DeliverBoyComponent,
    SubadminComponent,
    BannerComponent,
    TotalCityComponent,
    CollectionComponent,
    CouponComponent,
    CountryCodeComponent,
    TimeSlotsComponent,
    CouponCodeComponent,
    SubscriptionComponent,
    PaymentComponent,
   
 
  
  
  ],
  imports: [
    MatButtonModule,
    NgxMatDatetimePickerModule,
      NgxMatTimepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    CommonModule,
    DarshanRoutingModule,
    CKEditorModule,
    NgChartsModule,
   
    MatCardModule,
    MatIconModule,
    NgpImagePickerModule,
    // NgxEchartsModule,
    MatMenuModule,
    MatDialogModule,
    MatTableModule,
    MatButtonModule,
    NgxMatMomentModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectCountryModule.forRoot('de'),

  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})
export class DarshanModule { }
