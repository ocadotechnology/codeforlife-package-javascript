import React from 'react';
import {
  Tabs,
  Tab,
  TabScrollButtonProps,
  Typography,
  IconButton
} from '@mui/material';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';

import { primary } from '../../theme/colors';
import Section, { SectionElement } from './Section';

import { SearchParams } from '../../helpers';

export interface TabBarProps {
  header: string;
  tabs: Array<{
    label: string;
    children: SectionElement | SectionElement[];
  }>;
}

const TabBar: React.FC<TabBarProps> = ({
  header,
  tabs
}) => {
  const labels = tabs.map(tab => tab.label);
  const children = tabs.map(tab => tab.children);

  const params = SearchParams.get<{ tab: string; }>({
    tab: { validate: SearchParams.validate.inOptions(labels) }
  });

  const [value, setValue] = React.useState(
    params === null ? 0 : labels.indexOf(params.tab)
  );

  return <>
    <Section
      gridProps={{ bgcolor: primary[500] }}
      sx={{ paddingY: '100px' }}
      className='flex-center'
    >
      <Typography
        textAlign='center'
        variant='h2'
        style={{ color: 'white' }}
        mb={0}
      >
        {header}
      </Typography>
    </Section>
    <Section
      gridProps={{ bgcolor: primary[300] }}
      sx={{ paddingY: '6px' }}
      className='flex-center'
    >
      <Tabs
        value={value}
        onChange={(_, value) => { setValue(value); }}
        ScrollButtonComponent={({
          disabled,
          onClick,
          direction
        }: TabScrollButtonProps) => {
          return <>{disabled === false && (
            // @ts-expect-error button props not required
            <IconButton
              onClick={onClick}
              style={{
                padding: 0,
                [direction === 'left'
                  ? 'marginRight'
                  : 'marginLeft'
                ]: '15px',
                color: 'white'
              }}
            >
              {direction === 'left'
                ? <ChevronLeftIcon />
                : <ChevronRightIcon />
              }
            </IconButton>
          )}</>;
        }}
      >
        {tabs.map((tab) =>
          <Tab key={tab.label} label={tab.label} />
        )}
      </Tabs>
    </Section>
    {children[value]}
  </>;
};

export default TabBar;
