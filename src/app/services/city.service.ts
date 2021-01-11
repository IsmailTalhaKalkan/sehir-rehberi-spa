import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { City } from "../models/city";
import { Photo } from "../models/photo";
import { AlertifyService } from "./alertify.service";
import { Router } from "@angular/router";
import { RatingService } from "./rating.service";

@Injectable({
  providedIn: "root",
})
export class CityService {
  constructor(
    private httpClient: HttpClient,
    private alertifyService: AlertifyService,
    private router: Router,
    private ratingService: RatingService
  ) {}
  path = "https://localhost:44313/api/";

  getCities() {
    return this.httpClient.get<City[]>(this.path + "Cities");
  }
  getCityById(cityId): Observable<City> {
    return this.httpClient.get<City>(this.path + "Cities/Detail/?id=" + cityId);
  }

  getPhotosByCity(cityId): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(
      this.path + "Cities/Photos/?cityId=" + cityId
    );
  }

  add(city) {
    this.httpClient.post(this.path + "Cities/Add", city).subscribe((data) => {
      this.alertifyService.success("Şehir başarıyla eklendi.");
      this.router.navigateByUrl("/cityDetail/" + data["id"]);
      this.ratingService.creatingRating(data["id"]);
    });
  }
}
