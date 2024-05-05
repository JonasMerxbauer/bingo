"use client";

import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Textarea } from "~/components/ui/textarea";
import { isPowerOfTwo } from "~/lib/utils";
import { useState } from "react";
import { useAtom } from "jotai";
import { bingoInputAtom } from "~/store";

export const formSchema = z.object({
  bingo: z
    .string()
    .refine(
      (value) => {
        return value.split("\n").every((item) => typeof item === "string");
      },
      {
        message: "The items must be able to be split by enter",
      },
    )
    .refine(
      (value) => {
        const array = value.split("\n");

        const isValid = isPowerOfTwo(array.length);

        return isValid;
      },
      {
        message:
          "The number of items must be a power of two. This is to ensure that the bingo is solvable",
      },
    ),
});

const BingoForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bingo: "",
    },
  });
  const [, setBingoInput] = useAtom(bingoInputAtom);

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const input = e.target.value;
    setBingoInput(input.split("\n").filter((x) => x));
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="bingo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bingo</FormLabel>
              <FormControl>
                <Textarea onChangeCapture={onChange} {...field} />
              </FormControl>
              <FormDescription>
                Use enter to differentiate between items. Max 25 items per
                bingo.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default BingoForm;
