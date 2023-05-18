import { Popover, Button, TextInput, ActionIcon } from "@mantine/core";
import { TableSelection } from "./TableSelect";
import { data } from "../config";
import { SearchAbleAndSelectedTable } from "./SearchAbleAndSelectTable";
import { IconCaretDown } from "@tabler/icons-react";

export function PopOverToggle() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button variant="outline">
          Non Selected
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
        <SearchAbleAndSelectedTable data={data} />
        {/* <TableSelection data={data} /> */}
      </Popover.Dropdown>
    </Popover>
  );
}
