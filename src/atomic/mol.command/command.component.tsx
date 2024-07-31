"use client";

import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./components";

const CommandNamespace = Object.assign(Command, {
  Group: CommandGroup,
  Item: CommandItem,
  List: CommandList,
  Separator: CommandSeparator,
});

export { CommandNamespace as Command };
