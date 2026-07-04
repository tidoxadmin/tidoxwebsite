import type { ReactNode } from 'react';
import { Theme } from '@astryxdesign/core/theme';
import { tidoxTheme } from '../styles/tidox';

type Props = {
  children: ReactNode;
};

export function AstryxProvider({ children }: Props) {
  return (
    <Theme theme={tidoxTheme} mode="dark">
      {children}
    </Theme>
  );
}
