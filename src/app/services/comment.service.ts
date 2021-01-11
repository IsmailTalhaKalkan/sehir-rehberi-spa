import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Comments } from "../models/comment";
import { AlertifyService } from "./alertify.service";

@Injectable({
  providedIn: "root",
})
export class CommentService {
  path = "https://localhost:44313/api/Comments";

  constructor(
    private alertifyService: AlertifyService,
    private httpClient: HttpClient
  ) {}

  addComment(c: Comments) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    this.httpClient
      .post(this.path + "/AddComment", c, {
        headers: headers,
      })
      .subscribe((data) => {
        this.alertifyService.success("Comment added!");
      });
  }

  getComments(id: number) {
    return this.httpClient
      .get(this.path + "/GetComments?photoId=" + id)
      .subscribe((data) => {
        // data = JSON.stringify(data);
        /* console.log(data);
        console.log(typeof data); */
      });
  }
}
