export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  industry: string;
  category: 'ecommerce' | 'tourism' | 'branding' | 'all';
  role: string;
  status: 'Completed' | 'Pre-Launch' | 'In Progress';
  tags: string[];
  image: string;
  imageAlt: string;
  challenge: string;
  solution: string;
  contributions: string[];
  reportedOutcomes: {
    value: string;
    label: string;
    disclaimer?: string;
  }[];
  liveUrl?: string;
  disclaimer?: string;
}

export interface Achievement {
  id: string;
  number: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  statusTag?: string;
  verified: boolean;
}

export interface CapabilityCategory {
  title: string;
  description: string;
  iconName: string;
  items: string[];
}

export interface MetricItem {
  value: string;
  label: string;
  sublabel?: string;
}
