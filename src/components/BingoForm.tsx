"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form";
import { Textarea } from "~/components/ui/textarea";
import { isSquare } from "~/lib/utils";
import { createBingo } from "~/server/actions/createBingo";
import { SubmitButton } from "./SubmitButton";

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
        const array = value.split("\n").filter((item) => item);

        const isValid = isSquare(array.length);

        return isValid;
      },
      {
        message:
          "The number of items must be a power of two. This is to ensure that the bingo is solvable",
      },
    )
    .refine(
      (value) => {
        const array = value.split("\n").filter((item) => item);

        console.log(array);

        const isValid = array.length >= 4 && array.length <= 25;
        console.log(isValid);

        return isValid;
      },
      {
        message: "The number of items must be between 4 and 25",
      },
    ),
});

const BingoForm = ({
  setBingoInput,
}: {
  setBingoInput: (value: string[]) => void;
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bingo: "",
    },
  });

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const input = e.target.value;
    setBingoInput(input.split("\n").filter((x) => x));
  }

  return (
    <Form {...form}>
      <form action={createBingo} className="flex flex-[0.5] flex-col gap-4">
        <FormField
          control={form.control}
          name="bingo"
          render={({ field }) => (
            <FormItem>
              <FormDescription>
                Use enter to differentiate between items
                <br />
                Max 25 items per bingo
              </FormDescription>
              <FormControl>
                <Textarea
                  className="h-[34rem] resize-none"
                  onChangeCapture={onChange}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton className="w-full" isValid={form.formState.isValid}>
          Submit
        </SubmitButton>
      </form>
    </Form>
  );
};

export default BingoForm;
