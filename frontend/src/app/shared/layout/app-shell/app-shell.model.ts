export interface ShellNavItem {
  label: string;
  icon: string;
  link: string;
  /** Match the route exactly when highlighting (routerLinkActiveOptions.exact). */
  exact?: boolean;
  /** Static tag rendered beside the label, e.g. "+ NEW". */
  tag?: string;
  /** Live count bubble; hidden when 0 / undefined. */
  count?: number;
}

export interface ShellNavGroup {
  label: string;
  items: ShellNavItem[];
}
