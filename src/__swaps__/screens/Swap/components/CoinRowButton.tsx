/* eslint-disable no-nested-ternary */
import React from 'react';
import { ButtonPressAnimation } from '@/components/animations';
import { Box, TextIcon, useColorMode, useForegroundColor } from '@/design-system';
import { TextWeight } from '@/design-system/components/Text/Text';
import { TextSize } from '@/design-system/typography/typeHierarchy';
import { LIGHT_SEPARATOR_COLOR, SEPARATOR_COLOR, THICK_BORDER_WIDTH } from '../constants';
import { opacity } from '../utils';

export const CoinRowButton = ({
  icon,
  onPress,
  outline,
  size,
  weight,
}: {
  icon: string;
  onPress?: () => void;
  outline?: boolean;
  size?: TextSize;
  weight?: TextWeight;
}) => {
  const { isDarkMode } = useColorMode();
  const fillTertiary = useForegroundColor('fillTertiary');
  const fillQuaternary = useForegroundColor('fillQuaternary');
  const separatorTertiary = useForegroundColor('separatorTertiary');

  return (
    <ButtonPressAnimation onPress={onPress} scaleTo={0.8}>
      <Box
        alignItems="center"
        borderRadius={14}
        height={{ custom: 28 }}
        justifyContent="center"
        style={{
          backgroundColor: outline ? 'transparent' : isDarkMode ? fillQuaternary : opacity(fillTertiary, 0.04),
          borderColor: outline ? (isDarkMode ? SEPARATOR_COLOR : LIGHT_SEPARATOR_COLOR) : separatorTertiary,
          borderWidth: THICK_BORDER_WIDTH,
        }}
        width={{ custom: 28 }}
      >
        <TextIcon
          color="labelQuaternary"
          containerSize={28}
          opacity={isDarkMode ? 0.6 : 0.75}
          size={size || 'icon 12px'}
          weight={weight || 'heavy'}
        >
          {icon}
        </TextIcon>
      </Box>
    </ButtonPressAnimation>
  );
};
