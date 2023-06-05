import React from 'react';
import {
  Typography,
  Stack,
  Button,
  ButtonProps,
  SimplePaletteColorOptions
} from '@mui/material';

import palette from '../../theme/palette';
import { primary, secondary, tertiary } from '../../theme/colors';
import Image, { ImageProps } from '../Image';
import Section from './Section';

export interface BannerProps {
  header: string;
  subheader: string;
  textAlign?: 'start' | 'center';
  imageProps?: ImageProps;
  buttonProps?: ButtonProps;
  bgcolor?: 'primary' | 'secondary' | 'tertiary';
};

const Banner: React.FC<BannerProps> = ({
  header,
  subheader,
  textAlign = 'start',
  imageProps,
  buttonProps,
  bgcolor = 'primary'
}) => {
  const contrastText = (
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    palette![bgcolor] as SimplePaletteColorOptions
  ).contrastText;

  let _bgcolor: string;
  switch (bgcolor) {
    case 'primary':
      _bgcolor = primary[500];
      break;
    case 'secondary':
      _bgcolor = secondary[500];
      break;
    case 'tertiary':
      _bgcolor = tertiary[500];
      break;
  }

  return <>
    <Section gridProps={{
      bgcolor: _bgcolor,
      paddingY: 0
    }}>
      <Stack
        direction='row'
        alignItems='center'
        justifyContent={textAlign}
        gap={2}
      >
        <Stack
          py={{
            xs: '80px',
            md: imageProps !== undefined ? 0 : '100px'
          }}
          textAlign={textAlign}
        >
          <Typography
            variant='h2'
            color={contrastText}
          >
            {header}
          </Typography>
          <Typography
            color={contrastText}
            variant='h5'
            mb={buttonProps !== undefined ? undefined : 0}
          >
            {subheader}
          </Typography>
          {buttonProps !== undefined &&
            <Button {...buttonProps} />
          }
        </Stack>
        {imageProps !== undefined &&
          <Image
            {...imageProps}
            display={{ xs: 'none', md: 'block' }}
            maxWidth='320px'
            marginLeft='auto'
          />
        }
      </Stack>
    </Section>
  </>;
};

export default Banner;
