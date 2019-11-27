import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "split"
})
export class SplitPipe implements PipeTransform {
  transform(val: string, param: string): string[] {
    return val.split(param);
  }
}
