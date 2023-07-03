import React from 'react';
import {
  useParams,
  useNavigate,
  generatePath
} from 'react-router-dom';
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
import {
  object as YupObject,
  string as YupString
} from 'yup';

import { primary } from '../../theme/colors';
import { tryValidateSync } from '../../helpers/yup';
import Section, { SectionElement } from './Section';

export interface TabBarProps {
  header: string;
  tabs: Array<{
    label: string;
    children: SectionElement | SectionElement[];
    path: string;
  }>;
  originalPath: string;
  initialValue?: number;
}

const TabBar: React.FC<TabBarProps> = ({
  header,
  tabs,
  originalPath,
  initialValue = 0
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(
    initialValue < 0
      ? 0
      : initialValue >= tabs.length
        ? tabs.length - 1
        : initialValue
  );

  const labels = tabs.map(tab => tab.label);
  const children = tabs.map(tab => tab.children);
  const paths = tabs.map(tab => tab.path);

  React.useEffect(() => {
    const tab = tryValidateSync(params, YupObject({
      tab: YupString().oneOf(paths).required()
    }))?.tab;

    if (tab !== undefined) {
      setValue(paths.indexOf(tab));
    }
  }, [params]);

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
        onChange={(_, value) => {
          navigate(generatePath(originalPath, {
            tab: paths[value]
          }));
        }}
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
        {labels.map((label) =>
          <Tab key={label} label={label} />
        )}
      </Tabs>
    </Section>
    {children[value]}
  </>;
};

export default TabBar;
