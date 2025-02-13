import { Platform } from 'react-native';
export const MIN_COMPOSER_HEIGHT = Platform.select({
    ios: 33,
    android: 41,
    web: 34,
    windows: 34,
});
export const MAX_COMPOSER_HEIGHT = 200;
export const DEFAULT_PLACEHOLDER = 'Type a message...';
export const DATE_FORMAT = 'll';
export const DATE_FORMAT_CALENDAR = {
    sameDay: '[Today at] h:mm A', // The same day ( Today at 2:30 AM )
    nextDay: '[Tomorrow at] h:mm A', // The next day ( Tomorrow at 2:30 AM )
    nextWeek: 'dddd [at] h:mm A', // The next week ( Sunday at 2:30 AM )
    lastDay: '[Yesterday at] h:mm A', // The day before ( Yesterday at 2:30 AM )
    lastWeek: '[Last] dddd [at] h:mm A', // Last week ( Last Monday at 2:30 AM )
    sameElse: 'DD/MM/YYYY', // Everything else ( 17/10/2011 )
};
export const TIME_FORMAT = 'LT';
export const TEST_ID = {
    WRAPPER: 'GC_WRAPPER',
    LOADING_WRAPPER: 'GC_LOADING_CONTAINER',
    SEND_TOUCHABLE: 'GC_SEND_TOUCHABLE',
};
//# sourceMappingURL=Constant.js.map