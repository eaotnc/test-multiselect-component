import { Popover, Button, TextInput, ActionIcon } from "@mantine/core";
import { data } from "../config";
import { SearchAbleAndSelectedTable } from "./SearchAbleAndSelectTable";
import { IconCaretDown } from "@tabler/icons-react";
import { useState } from "react";

export function PopOverToggle() {
  const [selection, setSelection] = useState<string[]>([]);

  const onSelect = (selectionItem: string[]) => {
    setSelection(selectionItem);
  };

  const renderSelection = () => {
    if (selection.length <= 3) {
      return selection.map((item, key) => (
        <>
          {item}
          {key === selection.length - 1 ? " " : ", "}
        </>
      ));
    } else {
      return `${selection.length} Selected`;
    }
  };

  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button variant="outline">
          {selection.length > 0 ? renderSelection() : "Non Selected"}
          <ActionIcon variant="transparent">
            <IconCaretDown size="1rem" color="#228be6" />
          </ActionIcon>
        </Button>
      </Popover.Target>
      <Popover.Dropdown
        sx={(theme) => ({
          background:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        })}
      >
        <SearchAbleAndSelectedTable
          choice={data}
          onSelect={onSelect}
          selectionValue={selection}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
