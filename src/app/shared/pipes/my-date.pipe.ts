import {Pipe, PipeTransform} from "@angular/core";
import {isDate} from "rxjs/internal-compatibility";

@Pipe({
  name: "myDate"
})
export class MyDatePipe implements PipeTransform {

  transform(dateString: string): any {

    if (dateString) {
      const date = new Date(dateString);
      if (isNaN.call(null, date)) {
        return "";
      }

      return date.toLocaleDateString("pl-pl", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    }

    return ``;
  }

}
