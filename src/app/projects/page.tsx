import Link from 'next/link';
import {
  Tree,
  Folder,
  File,
  CollapseButton
} from "@/components/ui/treeView";


const FileSystem = () => {

  const elements = [
    {
      id: "1",
      name: "components",
      children: [
        {
          id: "2",
          name: "extension",
          children: [
            {
              id: "3",
              name: "tree-view.tsx",
            },
            {
              id: "4",
              name: "tree-view-api.tsx",
            },
          ],
        },
        {
          id: "5",
          name: "dashboard-tree.tsx",
        },
      ],
    },
  ];

  return (
    <div>
      <Tree
        initialSelectedId={"dashboard-tree.tsx"}
        initialExpendedItems={["components"]}
      >
        <Folder value="1" element="components">
          <Folder value="2" element="extension">
            <File value="3" >
              <span>tree-view.tsx</span>
            </File>
            <File value="4">
              <span>tree-view-api.tsx</span>
            </File>
          </Folder>
          <File value="5" >
            <a href='#'>dashboard-tree.tsx</a>
          </File>
        </Folder>
      </Tree>
    </div>
  );
};

export default FileSystem;
