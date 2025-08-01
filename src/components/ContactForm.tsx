"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Loader2Icon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const formSchema = z
  .object({
    objectif: z.enum(["cherche une solution", "postule"]),
    prenom: z.string().min(1, { message: "Prénom requis" }),
    nom: z.string().min(1, { message: "Nom requis" }),
    email: z.email({ message: "Email invalide" }),
    entreprise: z.string().optional(),
    poste: z.string().optional(),
    message: z.string().max(500, { message: "500 caractères max" }),
  })
  .check(({ value: { objectif, entreprise, poste }, issues }) => {
    if (objectif === "cherche une solution") {
      if (!entreprise) {
        issues.push({
          path: ["entreprise"],
          message: "Entreprise requise",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);
      }
      if (!poste) {
        issues.push({
          path: ["poste"],
          message: "Poste requis",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);
      }
    }
  });

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      objectif: "cherche une solution",
      prenom: "",
      nom: "",
      email: " ",
      entreprise: "",
      poste: "",
      message: "",
    },
    mode: "onBlur",
  });

  // Watch the specific field
  const watchedValue = useWatch({
    control: form.control,
    name: "objectif",
  });

  // Track whether this is the first render
  const isFirstRender = useRef(true);
  // When it changes, revalidate the entire form
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    form.trigger(); // revalidates the entire form
  }, [watchedValue, form]);

  const [isFormShown, setIsFormShown] = useState(true);
  const [isPending, setIsPending] = useState(false);

  function showSubmissionError(error?: unknown) {
    console.error(error);
    toast.error(
      "Erreur lors de l’envoi. Veuillez réessayer ou vérifier votre connexion à Internet.",
    );
  }

  async function submit(values: z.infer<typeof formSchema>) {
    setIsPending(true);
    try {
      const response = await fetch(
        "https://www.form-to-email.com/api/s/8oaXBK7vydyW",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        },
      );

      if (response.ok) {
        toast.success("Message envoyé avec succès !");
        form.reset();
        setIsFormShown(false);
      } else {
        showSubmissionError();
      }
    } catch (error) {
      showSubmissionError(error);
    } finally {
      setIsPending(false);
    }
  }

  return isFormShown ? (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)} className="space-y-6">
        <FormField
          control={form.control}
          name="objectif"
          render={({ field }) => (
            <FormItem className="flex flex-col space-y-3 mt-4">
              <div className="flex space-x-2">
                <FormControl>
                  <Checkbox
                    id="objectif-solution"
                    checked={field.value === "cherche une solution"}
                    onCheckedChange={() => field.onChange("solution")}
                    className="h-5 w-5 data-[state=checked]:bg-black data-[state=checked]:border-black hover:cursor-pointer"
                  />
                </FormControl>
                <FormLabel
                  htmlFor="objectif-solution"
                  className="text-sm text-[#0A0A0A]"
                >
                  Je recherche une solution adaptée à mon besoin
                </FormLabel>
              </div>
              <div className="flex space-x-2">
                <FormControl>
                  <Checkbox
                    id="objectif-postule"
                    checked={field.value === "postule"}
                    onCheckedChange={() => field.onChange("postule")}
                    className="h-5 w-5 data-[state=checked]:bg-black data-[state=checked]:border-black hover:cursor-pointer"
                  />
                </FormControl>
                <FormLabel
                  htmlFor="objectif-postule"
                  className="text-sm text-[#0A0A0A]"
                >
                  Je postule
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="h-[1px] w-full bg-[#c9cdd2]"></div>

        <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-6">
          <div>
            {/* Prénom */}
            <FormField
              control={form.control}
              name="prenom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="max-lg:text-xs">
                    <span>
                      Prénom <span className="text-destructive">*</span>
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre prénom"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Nom */}
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel className="max-lg:text-xs">
                    <span>
                      Nom <span className="text-destructive">*</span>
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre nom"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel className="max-lg:text-xs">
                    <span>
                      Email <span className="text-destructive">*</span>
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Votre email"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            {/* Entreprise */}

            <FormField
              control={form.control}
              name="entreprise"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="max-lg:text-xs">
                    <span>
                      Entreprise
                      {form.getValues("objectif") === "cherche une solution" ? (
                        <>
                          {" "}
                          <span className="text-destructive">*</span>
                        </>
                      ) : (
                        ""
                      )}
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre entreprise"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Poste */}
            <FormField
              control={form.control}
              name="poste"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel className="max-lg:text-xs">
                    <span>
                      Intitulé de votre poste
                      {form.getValues("objectif") === "cherche une solution" ? (
                        <>
                          {" "}
                          <span className="text-destructive">*</span>
                        </>
                      ) : (
                        ""
                      )}
                    </span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre poste"
                      {...field}
                      className="text-sm"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* Message */}
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="!block">
                <FormLabel className="mb-2 max-lg:text-xs">Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Votre message"
                    className="h-4/5 max-md:h-[200px] max-lg:h-[250px] mb-[7px] text-sm"
                    {...field}
                  />
                </FormControl>
                <FormDescription>500 caractères max.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button type="submit" className="block ml-auto" disabled={isPending}>
          <span className="space-x-2">
            {isPending ? <Loader2Icon className="inline animate-spin" /> : null}
            <span>Envoyer</span>
          </span>
        </Button>
      </form>
    </Form>
  ) : (
    <p className="p-8 text-center">Message envoyé avec succès !</p>
  );
}
