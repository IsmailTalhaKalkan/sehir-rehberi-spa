import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Router } from "@angular/router";
import { appRoutes } from "./routes";
import { NgxGalleryModule } from "ngx-gallery";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxEditorModule } from "ngx-editor";
import { FileUploadModule } from "ng2-file-upload";
import { BarRatingModule } from "ngx-bar-rating";

import { AppComponent } from "./app.component";
import { ValueComponent } from "./value/value.component";
import { NavComponent } from "./nav/nav.component";
import { CityComponent } from "./city/city.component";
import { CityDetailComponent } from "./city/city-detail/city-detail.component";
import { CityAddComponent } from "./city/city-add/city-add.component";
import { AlertifyService } from "./services/alertify.service";
import { RegisterComponent } from "./register/register.component";
import { PhotoComponent } from "./photo/photo.component";
import { CityRatingComponent } from "./city/city-rating/city-rating.component";
import { CityCommentComponent } from "./city/city-comment/city-comment.component";

import { CommentPipe } from "./comment.pipe";
import { StarRatingModule } from "angular-star-rating";
import { RatingComponent } from "./rating/rating.component";
@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent,
    CityComponent,
    CityDetailComponent,
    CityAddComponent,
    RegisterComponent,
    PhotoComponent,

    CityCommentComponent,
    CommentPipe,
    RatingComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule,
    FileUploadModule,
    BarRatingModule,
    StarRatingModule,
  ],
  providers: [AlertifyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
