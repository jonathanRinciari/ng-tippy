

export interface TippyOptions {
  ally?: boolean;
  animateFill?: boolean;
  allowHTML?: boolean;
  animation?: AnimationTypes;
  appendTo?: HTMLElement | string;
  aria?: string;
  arrow?: boolean;
  arrowType?: ArrowTypes;
  boundary?: HTMLElement | string;
  content?: string | HTMLElement;
  delay?: number | number[];
  distance?: number;
  flip?: boolean;
  flipBehavior?: FlipBehaviors[];
  flipOnUpdate?: boolean;
  followCursor?: boolean;
  hideOnClick?: boolean | 'toggle';
  ignoreAttributes?: boolean;
  inertia?: boolean;
  interactive?: boolean;
  interactiveBorder?: number;
  interactiveDebounce?: number;
  lazy?: boolean;
  maxWidth?: number | string;
  multiple?: boolean;
  offset?: number | string;
  onHidden?: () => {};
  onHide?: () => {};
  onMount?: () => {};
  onShow?: () => {};
  onShown?: () => {};
  placement?: Positions;
  role?: string;
  popperOptions?: {};
  showOnInit?: boolean;
  size?: 'regular' | 'small' | 'large',
  sticky?: boolean;
  target?: string;
  theme?: string;
  touch?: boolean;
  touchHold?: boolean;
  trigger?: string;
  updateDuration?: number;
  wait?: () => {};
  zIndex?: number;
}


enum ArrowTypes {
  Sharp = 'sharp',
  Round = 'round'
}

enum AnimationTypes {
  ShiftAway = 'shift-away',
  ShiftToward = 'shift-toward',
  Fade = 'fade',
  Scale = 'scale',
  Perspective = 'perspective'
}

enum FlipBehaviors {
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

enum Positions {
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Top = 'top',
  BottomEnd = 'bottom-end',
  BottomStart = 'bottom-end',
  LeftEnd = 'left-end',
  LeftStart = 'left-end',
  RightStart = 'right-start',
  RightEnd = 'right-end',
  TopStart = 'top-start',
  TopEnd = 'top-end'
}
