import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextProps,
} from 'react-native'
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar'

import Color from './Color'
import { isSameDay } from './utils'
import { DATE_FORMAT_CALENDAR } from './Constant'
import { IMessage } from './Models'

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
})

dayjs.extend(calendar)

export interface DayProps<TMessage extends IMessage = IMessage> {
  currentMessage: TMessage
  nextMessage?: TMessage
  previousMessage?: TMessage
  containerStyle?: StyleProp<ViewStyle>
  wrapperStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  textProps?: TextProps
  dateFormatCalendar?: object
  inverted?: boolean
}

export function Day<TMessage extends IMessage = IMessage> ({
  dateFormatCalendar = DATE_FORMAT_CALENDAR,
  currentMessage,
  previousMessage,
  containerStyle,
  wrapperStyle,
  textStyle,
}: DayProps<TMessage>) {
  if (currentMessage == null || isSameDay(currentMessage, previousMessage))
    return null

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={wrapperStyle}>
        <Text style={[styles.text, textStyle]}>
          {dayjs().calendar(currentMessage.createdAt, dateFormatCalendar)}
        </Text>
      </View>
    </View>
  )
}
