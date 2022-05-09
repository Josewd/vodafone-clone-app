export interface Props {
  size: string;
  title?: string;
  icon?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  data?: Array<{
    title: string;
    icon: string;
    total: number;
    consumed: number;
    planType: string;
    lastRenew: string;
  }>;
  lastRenew?: string;
  invoice?: number;
}

export type titleProps = { size: number; color?: string };
export type boxProps = { color?: string };
