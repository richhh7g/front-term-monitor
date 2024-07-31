"use client";

import { Root, Trigger, Close } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogOverlay,
  DialogFooter,
  DialogHeader,
  DialogDescription,
  DialogTitle,
} from "./components";

const DialogNamespace = Object.assign(Root, {
  Trigger: Trigger,
  Close: Close,
  Overlay: DialogOverlay,
  Content: DialogContent,
  Title: DialogTitle,
  Description: DialogDescription,
  Footer: DialogFooter,
  Header: DialogHeader,
});

export { DialogNamespace as Dialog };
