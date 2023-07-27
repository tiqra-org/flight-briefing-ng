import { Component, Input } from '@angular/core';
import {
  HIGHLIGHT_CODES,
  HIGHLIGHT_COLORS,
} from '../flight-briefing.constants';
import { groupBy } from 'src/app/modules/shared/shared.utils';
import { IFlightBriefingListItem } from '../flight-briefing.model';

@Component({
  selector: 'flight-briefing-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  @Input()
  data?: IFlightBriefingListItem[];

  get listItems() {
    const parsedData = this.data?.map(item => {
      const parsedText = item.text.trim().split(' ');
      const convertedText = parsedText.map((text: string) => {
        const trimmedText = text.trim();
        let highlightClass = '';
        HIGHLIGHT_CODES.forEach(code => {
          if (trimmedText.indexOf(code) != -1) {
            const parsedCode = trimmedText.split(code);
            let numericValue = +parsedCode[1];
            if (isNaN(numericValue)) {
              numericValue = +parsedCode[1].substring(0, 3);
            }
            highlightClass =
              numericValue > 30
                ? HIGHLIGHT_COLORS.DANGER
                : HIGHLIGHT_COLORS.INFO;
          }
        });
        return text.trim()
          ? `<div class="inline-block mr-1 ${highlightClass}">${text.trim()}</div>`
          : '';
      });
      const text = convertedText.join('');
      return { ...item, text };
    });
    const groupedData = parsedData
      ? groupBy(parsedData, ({ stationId }) => stationId, 'stationId')
      : {};
    const result = Object.entries(groupedData).map(([key, value]) => ({
      key,
      items: value,
    }));
    return result;
  }
}
