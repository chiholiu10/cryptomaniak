export const TableHeaders = [
  {
    Header: "Features",
    id: "feature",
    accessor: "feature",
    isVisible: true
  },
  {
    Header: "Pioneer",
    id: "pioneer",
    accessor: (d: any) => d.pioneer.toString(),
    isVisible: false
  },
  {
    Header: "Explorer",
    id: "explorer",
    accessor: (d: any) => d.explorer.toString(),
    isVisible: false
  },
  {
    Header: "Adventurer",
    id: "adventurer",
    accessor: (d: any) => d.adventurer.toString(),
    isVisible: true
  },
  {
    Header: "Hero",
    id: "hero",
    accessor: (d: any) => d.hero.toString(),
    isVisible: true
  },
];
