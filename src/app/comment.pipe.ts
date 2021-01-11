import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "comment",
})
export class CommentPipe implements PipeTransform {
  transform(value: any, args: any[]): any {
    return Object.keys(value);
  }
}
