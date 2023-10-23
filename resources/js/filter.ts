import numeral from 'numeral';
import { format } from 'date-fns';

// Example of use: {{ $filters.formatCurrency(accountBalance) }}

const dateFormat = 'dd/MM/yyyy';
const timeFormat = 'hh:mm:ss a';

const filter = {
  'formatInteger': (value: any) => {
    if (value) {
      return numeral(value).format('#,##0');
    }
  },
  'formatDecimal': (value: any) => {
    if (value) {
      return numeral(value).format('#,##0.00[00]');
    }
  },
  'formatCurrency': (value: any) => {
    if (value) {
      return numeral(value).format('$#,##0.00');
    }
  },
  'formatDate': (value: any) => {
    if (value) {
      return format(value, dateFormat);
    }
  },
  'formatTime': (value: any) => {
    if (value) {
      return format(value, timeFormat);
    }
  },
  'formatDateTime': (value: any) => {
    if (value) {
      return format(value, `${dateFormat} ${timeFormat}`);
    }
  }
}

export default filter;
