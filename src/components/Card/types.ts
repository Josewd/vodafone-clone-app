export interface Props {
  size: string;
  icon: string;
  title: string;
  backgroundColor?: string;
  children?: React.ReactNode;
  consumed?: number;
  planType?: string;
  lastRenew?: string;
  invoice?: number;
}

export type titleProps = { size: number; color?: string };
export type boxProps = { color?: string };
