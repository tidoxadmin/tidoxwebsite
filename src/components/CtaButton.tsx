import { Button } from '@astryxdesign/core/Button';
import { AstryxProvider } from './AstryxProvider';

type Props = {
  href: string;
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
};

export function CtaButton({ href, label, variant = 'primary' }: Props) {
  return (
    <AstryxProvider>
      <Button
        label={label}
        variant={variant}
        href={href}
        size="large"
      />
    </AstryxProvider>
  );
}
