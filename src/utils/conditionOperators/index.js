import IsEqual from './isEqual';
import IsNotEqual from './IsNotEqual';
import IsEmptyValue from './IsEmptyValue';
import IsNotEmptyValue from './IsNotEmptyValue';
import LessThan from './LessThan';
import GreaterThan from './GreaterThan';
import DateGreaterThan from './DateGreaterThan';
import DateLessThan from './DateLessThan';
import Includes from './Includes';
import StartsWith from './StartsWith';
import NotIncludes from './NotIncludes';
import EndsWith from './EndsWith';
import DateGreaterThanOrEqual from './DateGreaterThanOrEqual';
import DateLessThanOrEqual from './DateLessThanOrEqual';
import LessThanOrEqual from './LessThanOrEqual';
import GreaterThanOrEqual from './GreaterThanOrEqual';
import IsDateEqual from './IsDateEqual';
import IsNotDateEqual from './IsNotDateEqual';

export default {
  [`${IsEqual.operatorKey}`]: IsEqual,
  [`${IsNotEqual.operatorKey}`]: IsNotEqual,
  [`${IsEmptyValue.operatorKey}`]: IsEmptyValue,
  [`${IsNotEmptyValue.operatorKey}`]: IsNotEmptyValue,
  [`${LessThan.operatorKey}`]: LessThan,
  [`${GreaterThan.operatorKey}`]: GreaterThan,
  [`${DateGreaterThan.operatorKey}`]: DateGreaterThan,
  [`${DateLessThan.operatorKey}`]: DateLessThan,
  [`${Includes.operatorKey}`]: Includes,
  [`${StartsWith.operatorKey}`]: StartsWith,
  [`${EndsWith.operatorKey}`]: EndsWith,
  [`${NotIncludes.operatorKey}`]: NotIncludes,
  [`${DateGreaterThanOrEqual.operatorKey}`]: DateGreaterThanOrEqual,
  [`${DateLessThanOrEqual.operatorKey}`]: DateLessThanOrEqual,
  [`${LessThanOrEqual.operatorKey}`]: LessThanOrEqual,
  [`${GreaterThanOrEqual.operatorKey}`]: GreaterThanOrEqual,
  [`${IsDateEqual.operatorKey}`]: IsDateEqual,
  [`${IsNotDateEqual.operatorKey}`]: IsNotDateEqual
};
