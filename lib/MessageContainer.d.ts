import React, { RefObject } from 'react';
import PropTypes from 'prop-types';
import { FlatList, ListRenderItemInfo, NativeSyntheticEvent, NativeScrollEvent, StyleProp, ViewStyle } from 'react-native';
import { LoadEarlierProps } from './LoadEarlier';
import Message from './Message';
import { User, IMessage, Reply } from './Models';
export interface MessageContainerProps<TMessage extends IMessage> {
    messages?: TMessage[];
    isTyping?: boolean;
    user?: User;
    listViewProps: object;
    inverted?: boolean;
    loadEarlier?: boolean;
    alignTop?: boolean;
    scrollToBottom?: boolean;
    scrollToBottomStyle?: StyleProp<ViewStyle>;
    invertibleScrollViewProps?: object;
    extraData?: object;
    scrollToBottomOffset?: number;
    forwardRef?: RefObject<FlatList<TMessage>>;
    renderChatEmpty?(): React.ReactNode;
    renderFooter?(props: MessageContainerProps<TMessage>): React.ReactNode;
    renderMessage?(props: Message['props']): React.ReactElement;
    renderLoadEarlier?(props: LoadEarlierProps): React.ReactNode;
    renderTypingIndicator?(): React.ReactNode;
    scrollToBottomComponent?(): React.ReactNode;
    onLoadEarlier?(): void;
    onQuickReply?(replies: Reply[]): void;
    infiniteScroll?: boolean;
    isLoadingEarlier?: boolean;
    handleOnScroll?(event: NativeSyntheticEvent<NativeScrollEvent>): void;
}
interface State {
    showScrollBottom: boolean;
    hasScrolled: boolean;
}
export default class MessageContainer<TMessage extends IMessage = IMessage> extends React.PureComponent<MessageContainerProps<TMessage>, State> {
    static defaultProps: {
        messages: never[];
        user: {};
        isTyping: boolean;
        renderChatEmpty: null;
        renderFooter: null;
        renderMessage: null;
        onLoadEarlier: () => void;
        onQuickReply: () => void;
        inverted: boolean;
        loadEarlier: boolean;
        listViewProps: {};
        invertibleScrollViewProps: {};
        extraData: null;
        scrollToBottom: boolean;
        scrollToBottomOffset: number;
        alignTop: boolean;
        scrollToBottomStyle: {};
        infiniteScroll: boolean;
        isLoadingEarlier: boolean;
    };
    static propTypes: {
        messages: PropTypes.Requireable<(object | null | undefined)[]>;
        isTyping: PropTypes.Requireable<boolean>;
        user: PropTypes.Requireable<object>;
        renderChatEmpty: PropTypes.Requireable<(...args: any[]) => any>;
        renderFooter: PropTypes.Requireable<(...args: any[]) => any>;
        renderMessage: PropTypes.Requireable<(...args: any[]) => any>;
        renderLoadEarlier: PropTypes.Requireable<(...args: any[]) => any>;
        onLoadEarlier: PropTypes.Requireable<(...args: any[]) => any>;
        listViewProps: PropTypes.Requireable<object>;
        inverted: PropTypes.Requireable<boolean>;
        loadEarlier: PropTypes.Requireable<boolean>;
        invertibleScrollViewProps: PropTypes.Requireable<object>;
        extraData: PropTypes.Requireable<object>;
        scrollToBottom: PropTypes.Requireable<boolean>;
        scrollToBottomOffset: PropTypes.Requireable<number>;
        scrollToBottomComponent: PropTypes.Requireable<(...args: any[]) => any>;
        alignTop: PropTypes.Requireable<boolean>;
        scrollToBottomStyle: PropTypes.Requireable<NonNullable<number | boolean | object | null | undefined>>;
        infiniteScroll: PropTypes.Requireable<boolean>;
    };
    state: {
        showScrollBottom: boolean;
        hasScrolled: boolean;
    };
    renderTypingIndicator: () => string | number | boolean | React.JSX.Element | Iterable<React.ReactNode> | null | undefined;
    renderFooter: () => string | number | boolean | React.JSX.Element | Iterable<React.ReactNode> | null | undefined;
    renderLoadEarlier: (props: LoadEarlierProps) => string | number | boolean | React.JSX.Element | Iterable<React.ReactNode> | null | undefined;
    scrollTo(options: {
        animated?: boolean;
        offset: number;
    }): void;
    scrollToBottom: (animated?: boolean) => void;
    handleOnScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    renderRow: ({ item, index }: ListRenderItemInfo<TMessage>) => React.ReactElement | null;
    renderChatEmpty: () => string | number | boolean | React.JSX.Element | Iterable<React.ReactNode> | null | undefined;
    renderHeaderWrapper: () => React.JSX.Element;
    renderScrollBottomComponent(): string | number | boolean | React.JSX.Element | Iterable<React.ReactNode> | null | undefined;
    renderScrollToBottomWrapper(): React.JSX.Element;
    onLayoutList: () => void;
    onEndReached: ({ distanceFromEnd }: {
        distanceFromEnd: number;
    }) => void;
    keyExtractor: (item: TMessage) => string;
    render(): React.JSX.Element;
}
export {};
