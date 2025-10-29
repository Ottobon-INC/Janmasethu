
export interface NavItem {
  key: string;
  href: string;
  label: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
  description?: string;
}

export interface UseDisclosureReturn {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}
