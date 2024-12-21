"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { CategoryValidation } from "@/lib/validations/Category";

const AddCategoryForm = () => {
  const form = useForm({
    resolver: zodResolver(CategoryValidation),
    defaultValues: {
      categoryImage: "",
      categoryName: "",
    },
  });

  //   const [createBrand, { isLoading }] = useCreateBrandMutation();

  //   const router = useRouter();
  //   const { toast } = useToast();

  function onSubmit(values: z.infer<typeof CategoryValidation>) {
    console.log(values);
    // createBrand(values);
  }

  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black border">
      <Form {...form}>
        <form className="my-8" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="categoryImage"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="font-semibold text-gray-700">
                  Category Image
                </FormLabel>
                <FormControl className="w-full">
                  <Input {...field} placeholder="Nokia" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryName"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="font-semibold text-gray-700">
                  Category Name
                </FormLabel>
                <FormControl className="w-full">
                  <Input {...field} placeholder="Nokia" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

          <div className="flex flex-col gap-5">
            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
              //   disabled={isLoading}
            >
              Add Brand
            </button>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <Link
              className="text-center font-semibold text-xl text-blue-600 hover:underline"
              href="/admin"
            >
              <button className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]">
                Dashboard
              </button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddCategoryForm;
