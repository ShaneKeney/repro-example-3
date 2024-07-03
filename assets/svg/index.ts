import InfoCircle from './info-circle-fill.svg';
import CalculatorFill from './calculator-fill.svg';
import CashStack from './cash-stack.svg';
import Copy from './copy.svg';
import Document from './document.svg';
import Gear from './gear.svg';
import HouseFill from './house-door-fill.svg';
import House from './house-door.svg';
import Phone from './phone.svg';
import Logo from './reliant_logo.svg';
import DollarSign from './dollar-sign.svg';
import ChevronDown from './chevron-compact-down.svg';
import Envelope from './envelope.svg';

import { cssInterop } from 'nativewind';

// Add SVG components here.
// Key will dictate how to use the component i.e. <SVG.* /> where * is the key.
export const SVG = {
  InfoCircle,
  CalculatorFill,
  CashStack,
  Copy,
  Document,
  Gear,
  HouseFill,
  House,
  Phone,
  Logo,
  DollarSign,
  ChevronDown,
  Envelope
} as const;

for (const [_, value] of Object.entries(SVG)) {
  cssInterop(value, {
    className: 'style'
  });
}

export default SVG;
