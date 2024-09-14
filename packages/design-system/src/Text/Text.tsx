import { createElement, FunctionComponent, PropsWithChildren } from 'react';
import classNames from 'classnames';
import * as styles from './Text.module.css';

type TextSize = 'l' | 'm' | 's' | 'xs';
type TextWeight = 'light' | 'regular' | 'bold';

const DEFAULT_TEXT_WEIGHT: TextWeight = 'regular';

interface TextProps {
    size: TextSize;
    weight?: TextWeight;
    as?: keyof HTMLElementTagNameMap;
}

type Props = PropsWithChildren<TextProps>;

const DEFAULT_ELEMENT: TextProps['as'] = 'p';

export const Text: FunctionComponent<Props> = ({ as, size, weight = DEFAULT_TEXT_WEIGHT, children }) =>
    createElement(
        as ?? DEFAULT_ELEMENT,
        {
            className: classNames(styles.text, styles[`text--${size}`], styles[`text--${weight}`]),
        },
        children,
    );
