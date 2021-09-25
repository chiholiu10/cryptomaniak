export const TableHeaders = [
  {
    Header: "Features",
    id: "feature",
    accessor: "feature"
  },
  {
    Header: "Pioneer",
    id: "pioneer",
    accessor: (d: any) => d.pioneer.toString()
  },
  {
    Header: "Explorer",
    id: "explorer",
    accessor: (d: any) => d.explorer.toString()
  },
  {
    Header: "Adventurer",
    id: "adventurer",
    accessor: (d: any) => d.adventurer.toString()
  },
  {
    Header: "Hero",
    id: "hero",
    accessor: (d: any) => d.hero.toString()
  },
];
