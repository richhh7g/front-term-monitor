import { OptionType } from "./multi-select.component";

const normalizeText = (text: string) => {
  const removeAccentsRegex = /[\u0300-\u036f]/g;
  const normalizedText = text
    ?.toLowerCase()
    .normalize("NFD")
    .replace(removeAccentsRegex, "");

  return normalizedText;
};

export const filterOptions = (options: OptionType[], query: string) => {
  return options?.filter(
    (option: OptionType) =>
      normalizeText(option?.value)?.indexOf(normalizeText(query)) > -1
  );
};
