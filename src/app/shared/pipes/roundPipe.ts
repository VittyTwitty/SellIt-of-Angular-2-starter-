import { Pipe, PipeTransform } from '@angular/core';

// tslint:disable-next-line:pipe-naming
@Pipe({ name: 'bcRound' })
export class RoundPipe implements PipeTransform {
  public transform(str: string, strLength: number = 250) {
    const withoutHtml = str.replace(/(<([^>]+)>)/ig, '');

    if (str.length >= strLength) {
      return `${withoutHtml.slice(0, strLength)}...`;
    }

    return withoutHtml;
  }
}
