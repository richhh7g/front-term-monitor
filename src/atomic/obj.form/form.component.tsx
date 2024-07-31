"use client";

import { FormProvider } from "react-hook-form";
import {
  FormItem,
  FormControl,
  FormDescription,
  FormField,
  FormLabel,
  FormMessage,
  useFormField,
} from "./components";

const FormNamespace = Object.assign(FormProvider, {
  Item: FormItem,
  Label: FormLabel,
  Description: FormDescription,
  Control: FormControl,
  Message: FormMessage,
  Field: FormField,
});

export { useFormField, FormNamespace as Form };
