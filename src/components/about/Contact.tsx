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
import { useEffect, useRef, useState } from "react";
import { Loader2Icon } from "lucide-react";

const formSchema = z
  .object({
    objectif: z.enum(["solution", "postule"]),
    prenom: z.string().min(1, { message: "Prénom requis" }),
    nom: z.string().min(1, { message: "Nom requis" }),
    email: z.email({ message: "Email invalide" }),
    entreprise: z.string().optional(),
    poste: z.string().optional(),
    cv: z.file({ message: "Fichier requis" }).optional(),
    message: z.string().max(500, { message: "500 caractères max" }),
  })
  .check(({ value: { objectif, entreprise, poste, cv }, issues }) => {
    if (objectif === "solution") {
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
    if (objectif === "postule") {
      if (!cv) {
        issues.push({
          path: ["cv"],
          message: "CV requis",
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any);
      }
    }
  });

export function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      objectif: "solution",
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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsPending(true);
    try {
      // Simule une requête async
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // await new Promise((resolve, reject) => setTimeout(reject, 1000));

      console.log("values ::: ", values);
      toast.success("Message envoyé avec succès !");
      form.reset(); // Réinitialise le formulaire
      setIsFormShown(false);
    } catch (error) {
      console.log("error ::: ", error);
      toast.error(
        "Erreur lors de l’envoi. Veuillez réessayer ou vérifier votre connexion à Internet.",
      );
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section className="mt-12 bg-white p-8 rounded-lg shadow-md w-full">
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <h2 className="font-light text-5xl max-md:text-3xl">
            Contactez-nous
          </h2>
          <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
            <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
            <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
          </div>
        </div>
        <p className="mt-6">
          Vous avez un besoin ou une question à nous poser?
        </p>
      </div>
      <div className="h-[1px] w-full bg-[#c9cdd2]"></div>

      {isFormShown ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="objectif"
              render={({ field }) => (
                <FormItem className="flex flex-col space-y-3 mt-4">
                  <div className="flex space-x-2">
                    <FormControl>
                      <Checkbox
                        id="objectif-solution"
                        checked={field.value === "solution"}
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
                          {form.getValues("objectif") === "solution" ? (
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
                          {form.getValues("objectif") === "solution" ? (
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

                {/* CV */}
                {form.getValues("objectif") === "postule" ? (
                  <FormField
                    control={form.control}
                    name="cv"
                    render={() => (
                      <FormItem className="mt-6">
                        <FormLabel className="max-lg:text-xs">
                          <span>
                            Votre CV
                            {form.getValues("objectif") === "postule" ? (
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
                            type="file"
                            placeholder="Votre CV"
                            className="text-sm"
                            // value={form.getValues("cv")?.name ?? ""}
                            onChange={(event) => {
                              const file = event.target.files?.item(0);
                              if (file) {
                                form.setValue("cv", file, {
                                  shouldValidate: true,
                                });
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : null}
              </div>
              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="!block">
                    <FormLabel className="mb-2 max-lg:text-xs">
                      Message
                    </FormLabel>
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

            <Button
              type="submit"
              className="block ml-auto"
              disabled={isPending}
            >
              <span className="space-x-2">
                {isPending ? (
                  <Loader2Icon className="inline animate-spin" />
                ) : null}
                <span>Envoyer</span>
              </span>
            </Button>
          </form>
        </Form>
      ) : (
        <p className="p-8 text-center">Message envoyé avec succès !</p>
      )}
    </section>
  );
}

export default Contact;
