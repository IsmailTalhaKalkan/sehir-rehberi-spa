import {
  Component,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnInit,
  Output,
  EventEmitter,
  Input,
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertifyService } from "../../services/alertify.service";
import { Comments } from "../../models/comment";
import { CommentService } from "src/app/services/comment.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { CommentPipe } from "src/app/comment.pipe";

@Component({
  selector: "app-city-comment",
  templateUrl: "./city-comment.component.html",
  styleUrls: ["./city-comment.component.css"],
})
export class CityCommentComponent implements OnInit {
  countObj: any = new Comments();
  count: number;
  ob: any = new Comments();
  c: Comments = new Comments();
  comments: any[] = [];
  commentForm: FormGroup;
  commentInfo: Array<object> = [];
  submitted: Boolean = false;
  public id = 0;
  currentPhoto: any;
  @Output() usercomment = new EventEmitter();
  path = "https://localhost:44313/api/Comments";
  @Input() inputC: any;
  constructor(
    private formBuilder: FormBuilder,
    private alertifyService: AlertifyService,
    private httpClient: HttpClient,
    private activatedRoute: ActivatedRoute,
    private commentService: CommentService
  ) {}

  ngOnInit() {
    this.createForm();
    this.activatedRoute.params.subscribe((params) => {
      this.currentPhoto = params["cityId"];
      this.countObj = this.getComments(this.currentPhoto);
      console.log(this.countObj);
    });
  }

  createForm() {
    this.commentForm = this.formBuilder.group({
      comment: [
        "",
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(300),
        ],
      ],
    });
  }

  onSubmit() {
    this.submitted = true;
    this.c.commentDetail = this.commentForm.controls["comment"].value;
    this.c.photoId = this.currentPhoto;
    this.c.upVote = 0;
    //this.c.id = 1;
    console.log(this.c.commentDetail);
    this.commentService.addComment(this.c);
  }

  getComments(currentPhoto) {
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return this.httpClient
      .get(this.path + "/GetComments?photoId=" + currentPhoto, {
        headers: headers,
      })
      .subscribe((data) => {
        this.ob = data;
      });
  }
}
