import { createContext, forwardRef, useContext, useId, useMemo } from "react";
import { twMerge } from "tailwind-merge";

type FormItemContextValue = {
  id: string;
};

const FormItemContext = createContext<FormItemContextValue>(
  {} as FormItemContextValue
);

export const FormItem = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = useId();

  const providerValue = useMemo(() => ({ id }), [id]);

  return (
    <FormItemContext.Provider value={providerValue}>
      <div
        ref={ref}
        className={twMerge("flex flex-col gap-1", className)}
        {...props}
      />
    </FormItemContext.Provider>
  );
});
FormItem.displayName = "FormItem";

export const useFormItemContext = () => {
  return useContext(FormItemContext);
};
