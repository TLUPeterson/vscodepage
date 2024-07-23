import Link from 'next/link';
import {
  Tree,
  Folder,
  File,
  CollapseButton
} from "@/components/ui/treeView";

interface TreeElement {
  id: string;
  name: string;
  children?: TreeElement[];
  url?: string;
}

const renderTree = (elements: TreeElement[]): React.ReactNode => {
  return elements.map(element => {
    if (element.children) {
      return (
        <Folder key={element.id} value={element.id} element={element.name}>
          {renderTree(element.children)}
        </Folder>
      );
    } else {
      return (
        <File key={element.id} value={element.id}>
          {element.url ? (
            <Link href={element.url}>
              {element.name}
            </Link>
          ) : (
            <span>{element.name}</span>
          )}
        </File>
      );
    }
  });
};

const SideBarTree: React.FC = () => {
  const elements: TreeElement[] = [
    {
      id: "1",
      name: "projects",
      children: [
        {
          id: "2",
          name: "first",
          children: [
            {
              id: "3",
              name: "page1.tsx",
              url: "/projects/first/page1"
            },
            {
              id: "4",
              name: "tree-view-api.tsx",
              url: "/path/to/tree-view-api"
            },
          ],
        },
        {
          id: "5",
          name: "editor.tsx",
          url: "/projects/editor"
        },
        {
          id: "6",
          name: "overview.tsx",
          url: "/"
        },
      ],
    },
  ];

  return (
    <div>
      <Tree initialSelectedId={"6"} initialExpendedItems={["1", "2"]}>
        {renderTree(elements)}
      </Tree>
    </div>
  );
};

export default SideBarTree;
