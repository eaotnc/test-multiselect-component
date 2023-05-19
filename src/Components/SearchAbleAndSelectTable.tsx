import { useState } from "react";
import {
  createStyles,
  Table,
  ScrollArea,
  Group,
  Text,
  TextInput,
  rem,
  Checkbox,
} from "@mantine/core";
import { keys } from "@mantine/utils";
import { IconSearch } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][7], 0.2)
        : theme.colors[theme.primaryColor][0],
  },

  control: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

interface RowData {
  id: string;
  avatar: string;
  name: string;
  email: string;
  company: string;
}

interface TableSortProps {
  choice: RowData[];
  selectionValue: string[];
  onSelect: (selectionItem: string[]) => void;
}

function filterData(data: RowData[], search: string) {
  const query = search.toLowerCase().trim();
  return data.filter((item) =>
    keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
  );
}

export function SearchAbleAndSelectedTable({
  choice,
  selectionValue,
  onSelect,
}: TableSortProps) {
  const { classes, cx } = useStyles();
  const [search, setSearch] = useState("");
  const [selection, setSelection] = useState<string[]>(selectionValue);
  const [sortedChoice, setSortedChoice] = useState(choice);

  const toggleAll = () => {
    const newSelection =
      selection.length === choice.length ? [] : choice.map((item) => item.id);
    setSelection(newSelection);
    onSelect(newSelection);
  };

  const toggleRow = (id: string) => {
    const newSelection = selection.includes(id)
      ? selection.filter((item) => item !== id)
      : [...selection, id];
    setSelection(newSelection);
    onSelect(newSelection);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setSearch(value);
    setSortedChoice(filterData(choice, value));
  };

  const rows = sortedChoice.map((item) => {
    const selected = selection.includes(item.id);
    return (
      <tr key={item.id} className={cx({ [classes.rowSelected]: selected })}>
        <td>
          <Checkbox
            checked={selection.includes(item.id)}
            onChange={() => toggleRow(item.id)}
            transitionDuration={0}
          />
        </td>
        <td>
          <Group spacing="sm">
            <Text size="sm" weight={350}>
              {item.name}
            </Text>
          </Group>
        </td>
      </tr>
    );
  });

  return (
    <ScrollArea>
      <TextInput
        placeholder="Search by any field"
        mb="md"
        icon={<IconSearch size="0.9rem" stroke={1.5} />}
        value={search}
        onChange={handleSearchChange}
      />
      <Table miw={300} verticalSpacing="sm">
        <thead>
          <tr style={{ color: "red" }}>
            <th style={{ width: "20px" }}>
              <Checkbox
                onChange={toggleAll}
                checked={selection.length === choice.length}
                indeterminate={
                  selection.length > 0 && selection.length !== choice.length
                }
                transitionDuration={0}
              />
            </th>
            <th>
              <Text size="sm" weight={700}>
                Select All
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.length > 0 ? (
            rows
          ) : (
            <tr>
              <td colSpan={Object.keys(choice[0]).length}>
                <Text weight={500} align="center">
                  Nothing found
                </Text>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </ScrollArea>
  );
}
