"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

const formSchema = z.object({
  objectif: z.enum(["solution", "postule"]),
  prenom: z.string().min(1, { message: "Prénom requis" }),
  nom: z.string().min(1, { message: "Nom requis" }),
  email: z.email({ message: "Email invalide" }),
  entreprise: z.string().min(3, { message: "Choix requis" }),
  poste: z.string().min(3, { message: "Choix requis" }),
  message: z.string().max(500, { message: "500 caractères max" }),
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
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      // Simule une requête async
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("values ::: ", values);
      toast.success("Message envoyé avec succès !");
      form.reset(); // Réinitialise le formulaire
    } catch (error) {
      console.log("error ::: ", error);
      toast.error("Erreur lors de l’envoi. Réessayez.");
    }
  }

  return (
    <section className="flex justify-center items-center mb-12 bg-[url('/histoire-bckg.jpg')] py-16 rounded-lg bg-no-repeat bg-cover h-full w-full relative">
      <div className="bg-white p-8 rounded-lg shadow-md max-sm:w-[96%] max-md:w-[90%] md:w-[80%] max-w-[800px]">
        <div className="text-center">
          <div className="inline-block relative">
            <h2 className="font-light text-5xl max-md:text-3xl">
              Contactez-nous
            </h2>
            <div className="absolute left-0 -bottom-[8px] w-full flex items-center justify-between h-[1px]">
              <div className="bg-black h-[2px] w-[calc(100%-8px)]"></div>
              <div className="w-1 h-1 bg-black rounded-full ml-1"></div>
            </div>
          </div>
          <p className="mt-4 mb-6 text-[#737373]">
            Vous avez un besoin ou une question à nous poser?
          </p>
        </div>
        <div className="h-[1px] w-full bg-[#c9cdd2]"></div>

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
                        checked={field.value === "solution"}
                        onCheckedChange={() => field.onChange("solution")}
                        className="h-5 w-5 data-[state=checked]:bg-black data-[state=checked]:border-black hover:cursor-pointer"
                      />
                    </FormControl>
                    <FormLabel className="text-sm text-[#0A0A0A]">
                      Je recherche une solution adaptée à mon besoin
                    </FormLabel>
                  </div>
                  <div className="flex space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value === "postule"}
                        onCheckedChange={() => field.onChange("postule")}
                        className="h-5 w-5 data-[state=checked]:bg-black data-[state=checked]:border-black hover:cursor-pointer"
                      />
                    </FormControl>
                    <FormLabel className="text-sm text-[#0A0A0A]">
                      Je postule
                    </FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="h-[1px] w-full bg-[#c9cdd2]"></div>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-6">
              <div>
                {/* Prénom */}
                <FormField
                  control={form.control}
                  name="prenom"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="max-lg:text-xs">Prénom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre prénom" {...field} />
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
                    <FormItem className="mt-4">
                      <FormLabel className="max-lg:text-xs">Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="Votre nom" {...field} />
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
                    <FormItem className="mt-4">
                      <FormLabel className="max-lg:text-xs">Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Votre email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Entreprise */}
                <FormField
                  control={form.control}
                  name="entreprise"
                  render={({ field }) => (
                    <FormItem className="mt-4">
                      <FormLabel className="max-lg:text-xs">
                        Entreprise
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Votre entreprise" {...field} />
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
                    <FormItem className="mt-4">
                      <FormLabel className="max-lg:text-xs">
                        Intitulé de votre poste
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Votre poste" {...field} />
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
                    <FormLabel className="mb-2 max-lg:text-xs">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Votre message"
                        className="h-[87%] mb-[7px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>500 caractères max.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" className="block ml-auto">
              Envoyer
            </Button>
          </form>
        </Form>
      </div>
      <div className="absolute bg-[#BBF7D0] h-[86px] w-[86px] block z-[-1] -top-6 right-0 md:-right-12 rounded-full" />
    </section>
  );
}

export default Contact;
