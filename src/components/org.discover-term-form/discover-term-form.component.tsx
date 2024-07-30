"use client";

import { Button } from "@atomic/atm.button";
import { Input } from "@atomic/atm.input";
import { MultiSelect } from "@atomic/atm.multi-select";
import { ResponsiveImage } from "@atomic/atm.responsive-image";
import { Form } from "@atomic/obj.form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  terms: z.array(z.string()).min(1, "Necessário adicionar pelo menos um termo"),
  email: z.string().min(1, "Email obrigatório").email("Email inválido"),
});

export const DiscoverTermForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      terms: [],
    },
  });

  function handleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-5 w-full"
      >
        <ResponsiveImage
          className="h-20"
          fit="contain"
          src="/images/monitor.png"
          alt="Term Alarms"
        />
        <div>
          <h1 className="text-3xl text-gray-900 font-semibold mb-2">
            Term Monitor
          </h1>
          <p className="text-gray-600">
            Checar termos potencialmente agressivos a sua marca.
          </p>
        </div>

        <Form.Field
          control={form.control}
          name="terms"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Termos</Form.Label>
              <Form.Control>
                <MultiSelect placeholder="Digite os termos..." {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={form.control}
          name="email"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>E-mail</Form.Label>
              <Form.Control>
                <Input placeholder="example@mail.com" {...field} />
              </Form.Control>
              <Form.Description>
                Enviaremos o relatório para o email informado acima.
              </Form.Description>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Button type="submit" disabled={false} className="w-full">
          Descobrir
        </Button>
      </form>
    </Form>
  );
};
