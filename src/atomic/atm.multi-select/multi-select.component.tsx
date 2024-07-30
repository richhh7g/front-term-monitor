"use client";

import {
  forwardRef,
  KeyboardEvent,
  MouseEventHandler,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Command } from "@atomic/mol.command";
import { Badge } from "@atomic/atm.badge";
import { X } from "@phosphor-icons/react";
import { filterOptions } from "./search-filter.util";

export type OptionType = Record<"value" | "label", string>;

type MultiSelectProps = {
  defaultOptions?: Record<"label" | "value", string>[];
  placeholder?: string;
  onChange?: (value: string[]) => void;
  name: string;
};

export const MultiSelect = forwardRef<HTMLDivElement, MultiSelectProps>(
  (props, ref) => {
    const { defaultOptions, placeholder, onChange, name } = props;

    const inputRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState<OptionType[]>([]);
    const [inputValue, setInputValue] = useState("");

    useImperativeHandle(ref, () => inputRef.current!);

    const selectables = filterOptions(
      defaultOptions?.filter((opt) => !selected.includes(opt)) ?? [],
      inputValue
    );

    const shouldShowOptionsList =
      open && (selectables.length > 0 || inputValue?.length > 0);

    const handleUnselect = (option: OptionType) => {
      onChange?.(
        selected.filter((s) => s.value !== option.value).map((s) => s.value)
      );
      setSelected((prev) => prev.filter((s) => s.value !== option.value));
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      const input = inputRef.current;

      if (input) {
        if (
          (e.key === "Delete" || e.key === "Backspace") &&
          inputValue === ""
        ) {
          setSelected((prev) => {
            const newSelected = [...prev];
            newSelected.pop();
            return newSelected;
          });
          const newSelected = [...selected];
          newSelected.pop();
          onChange?.(newSelected.map((s) => s.value));
        }
        if (e.key === "Escape") {
          input.blur();
        }
      }
    };

    const handleSelect = (val: OptionType) => {
      setSelected((prev) => [...prev, val]);
      onChange?.([...selected.map((s) => s.value), val.value]);
      setInputValue("");
    };

    const handleMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    return (
      <Command
        onKeyDown={handleKeyDown}
        onClick={() => {
          inputRef.current?.focus();
        }}
      >
        <div className="group rounded-md border border-input px-3 py-2 text-sm ring-blue-200 focus-within:ring-2 focus-within:ring-offset-2">
          <div className="flex flex-wrap gap-2">
            {selected.map((option) => {
              return (
                <Badge
                  key={option.value}
                  className="cursor-pointer"
                  onClick={() => handleUnselect(option)}
                  variant="tertiary"
                >
                  {option.label}
                  <button
                    className="ml-1 -mr-1 rounded-full outline-none ring-blue-200 focus:ring-2 focus:ring-offset-2"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleUnselect(option);
                      }
                    }}
                    onMouseDown={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <X className="size-3" weight="bold" />
                  </button>
                </Badge>
              );
            })}

            <input
              onBlur={() => setOpen(false)}
              onFocus={() => setOpen(true)}
              placeholder={placeholder}
              value={inputValue}
              ref={inputRef}
              onChange={(e) => setInputValue(e.target.value)}
              className="outline-none text-base leading-4"
              name={name}
            />
          </div>
        </div>

        {shouldShowOptionsList ? (
          <Command.List>
            <div className="absolute top-0 z-10 w-full max-h-[300px]  rounded-md border bg-white text-gray-700 shadow-md outline-none overflow-auto">
              {inputValue.length > 0 ? (
                <Command.Item
                  value={inputValue}
                  key={inputValue}
                  onMouseDown={handleMouseDown}
                  onSelect={() =>
                    handleSelect({ label: inputValue, value: inputValue })
                  }
                  className="cursor-pointer"
                >
                  Adicionar <strong className="ml-1">{inputValue}</strong>
                </Command.Item>
              ) : null}

              {selectables.map((item) => {
                return (
                  <Command.Item
                    value={item.value}
                    key={item.value}
                    onMouseDown={handleMouseDown}
                    onSelect={() => handleSelect(item)}
                    className="cursor-pointer"
                  >
                    {item.label}
                  </Command.Item>
                );
              })}
            </div>
          </Command.List>
        ) : null}
      </Command>
    );
  }
);

MultiSelect.displayName = "MultiSelect";
