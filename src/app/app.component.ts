import { Component } from "@angular/core";
import { StarRatingModule } from "angular-star-rating";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  comments: string;
  count: number;
  title = "sehir-rehberi-spa";
  starRating = 0;
  receiveComment($event) {
    this.comments = $event;
    this.count = this.comments.length;
    console.log(this.comments.length);
  }

  recieveCount($event) {
    this.comments = $event;
    this.count = this.comments.length;
  }
  ngOnInit() {
    this.count = 0;
  }
}
