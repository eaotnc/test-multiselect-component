import { Popover, Button, TextInput } from "@mantine/core";
import { TableSelection } from "./TableSelect";
import { data } from "../config";

export function PopOverToggle() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown
        sx={(theme) => ({
          background:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        })}
      >
        <TableSelection data={data} />
      </Popover.Dropdown>
    </Popover>
  );
}
