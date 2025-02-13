import * as React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import Color from './Color';
import { isSameDay } from './utils';
import { DATE_FORMAT_CALENDAR } from './Constant';
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginBottom: 10,
    },
    text: {
        backgroundColor: Color.backgroundTransparent,
        color: Color.defaultColor,
        fontSize: 12,
        fontWeight: '600',
    },
});
dayjs.extend(calendar);
export function Day({ dateFormatCalendar = DATE_FORMAT_CALENDAR, currentMessage, previousMessage, containerStyle, wrapperStyle, textStyle, }) {
    if (currentMessage == null || isSameDay(currentMessage, previousMessage))
        return null;
    return (<View style={[styles.container, containerStyle]}>
      <View style={wrapperStyle}>
        <Text style={[styles.text, textStyle]}>
          {dayjs(currentMessage.createdAt).calendar(null, dateFormatCalendar)}
        </Text>
      </View>
    </View>);
}
//# sourceMappingURL=Day.js.map