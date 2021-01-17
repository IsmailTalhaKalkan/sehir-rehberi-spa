import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { RatingService } from "../services/rating.service";
import { TSMap } from "typescript-map";
import { RatingForCity } from "../models/ratingForCity";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.css"],
})
export class RatingComponent implements OnInit {
  currentCityID: any;
  rate: RatingForCity;
  arr = ["Transportation", "Food", "View", "Price"];
  @Output() rating: number;
  @Input() categories: string;
  @Output() categoriesGet: EventEmitter<any> = new EventEmitter<any>();
  @Output() ratingClick: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private ratingService: RatingService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.currentCityID = params["cityId"];
    });
  }

  onClick(rating: any, name: any): void {
    this.ratingClick.emit({
      rating: rating,
      name: this.categories,
    });
    console.log(rating, name);
  }
}
