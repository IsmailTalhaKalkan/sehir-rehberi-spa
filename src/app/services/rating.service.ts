import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Rating } from "../models/rating";
import { RatingForCity } from "../models/ratingForCity";
import { AlertifyService } from "./alertify.service";

@Injectable({
  providedIn: "root",
})
export class RatingService {
  path = "https://localhost:44313/api/Ratings";
  ratingForCity: RatingForCity;
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService
  ) {}

  creatingRating(cityID: number) {
    return this.httpClient
      .post(this.path + "/CreateRating?cityId=" + cityID, cityID)
      .subscribe((data) => {
        this.alertifyService.success("Deneme");
      });
  }

  newRating(rating: Rating, cityID: number) {
    return this.httpClient
      .post(this.path + "/NewRating?cityId=" + cityID, rating)
      .subscribe((data) => {
        this.alertifyService.success("Rating posted!");
      });
  }

  getRating(cityID: number) {
    return this.httpClient
      .get(this.path + "/Rating?cityId=" + cityID)
      .subscribe((data) => {
        this.alertifyService.success("Getting ratings..!");
      });
  }
}
