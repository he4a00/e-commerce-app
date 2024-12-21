import { Inbox, Logs, Plus, Tally4 } from "lucide-react";

export const SidebarLinks = [
  {
    name: "Brands",
    icon: Inbox,
    subLinks: [
      { name: "Create Brand", url: "brands/add-brand", icon: Plus },
      { name: "Brands", url: "brands", icon: Tally4 },
    ],
  },
  {
    name: "Categories",
    icon: Logs,
    subLinks: [
      { name: "Create Category", url: "categories/add-category", icon: Plus },
      { name: "Categories", url: "categories", icon: Tally4 },
    ],
  },
];
