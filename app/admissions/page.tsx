"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ADMISSION_STEPS, REQUIRED_DOCUMENTS, CLASSES } from "@/lib/constants";
import { Check, FileText } from "lucide-react";

const formSchema = z.object({
  parentName: z.string().min(2, "Parent name must be at least 2 characters"),
  childName: z.string().min(2, "Child name must be at least 2 characters"),
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  classApplying: z.string().min(1, "Please select a class"),
  phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits"),
  email: z.string().email("Please enter a valid email address"),
  qualification: z.string().min(2, "Qualification is required"),
  occupation: z.string().min(2, "Occupation is required"),
  nationality: z.string().min(2, "Nationality is required"),
  religion: z.string().min(2, "Religion is required"),
  caste: z.string().min(2, "Caste is required"),
  languageSpoken: z.string().min(2, "Language spoken is required"),
  permanentAddress: z.string().min(5, "Permanent address is required"),
  currentAddress: z.string().min(5, "Current address is required"),
  aadharNo: z.string().regex(/^[0-9]{12}$/, "Aadhaar number must be 12 digits"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function AdmissionsPage() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      parentName: "",
      childName: "",
      dateOfBirth: "",
      classApplying: "",
      phone: "",
      email: "",
      qualification: "",
      occupation: "",
      nationality: "Indian",
      religion: "",
      caste: "",
      languageSpoken: "",
      permanentAddress: "",
      currentAddress: "",
      aadharNo: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const whatsappMessage = encodeURIComponent(
      `🏫 *New Admission Application - Gurukul Shikshaniketan*\n\n` +
        `👨‍👩‍👧 *Parent Name:* ${data.parentName}\n` +
        `🎓 *Qualification:* ${data.qualification}\n` +
        `💼 *Occupation:* ${data.occupation}\n` +
        `👦 *Child Name:* ${data.childName}\n` +
        `🎂 *Date of Birth:* ${data.dateOfBirth}\n` +
        `📚 *Class Applying:* ${data.classApplying}\n` +
        `📞 *Phone:* ${data.phone}\n` +
        `📧 *Email:* ${data.email}\n` +
        `🌍 *Nationality:* ${data.nationality}\n` +
        `🛐 *Religion:* ${data.religion}\n` +
        `👥 *Caste:* ${data.caste}\n` +
        `🗣️ *Language Spoken:* ${data.languageSpoken}\n` +
        `🏠 *Permanent Address:* ${data.permanentAddress}\n` +
        `📍 *Current Address:* ${data.currentAddress}\n` +
        `🪪 *Aadhaar No:* ${data.aadharNo}\n` +
        `💬 *Message:* ${data.message || "N/A"}`,
    );
    window.open(`https://wa.me/916009780456?text=${whatsappMessage}`, "_blank");

    toast({
      title: "Redirecting to WhatsApp!",
      description: "Your application is ready — just hit Send on WhatsApp!",
    });

    form.reset();
    setIsSubmitting(false);
  };
  return (
    <div className="pt-24">
      <Toaster />

      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Admissions
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our growing family and give your child the gift of quality
              education
            </p>
          </motion.div>

          <SectionHeader
            title="Admission Process"
            subtitle="Four simple steps to enroll your child"
            centered
          />

          <div className="grid md:grid-cols-4 gap-6 mb-20">
            {ADMISSION_STEPS.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <SectionHeader title="Required Documents" />

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Documents Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {REQUIRED_DOCUMENTS.map((doc, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span>{doc}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6 bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Important Notes:</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Admissions are on a first-come, first-served basis
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Limited seats available in each class</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        Campus visit can be scheduled after form submission
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>
                        All documents must be brought in person to the school
                        office
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}>
              <SectionHeader title="Admission Application Form" />

              <Card>
                <CardContent className="p-6">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6">
                      <FormField
                        control={form.control}
                        name="parentName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent/Guardian Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter parent name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="qualification"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent Qualification *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. B.A., M.A., 10th Pass"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="occupation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Parent Occupation *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Farmer, Teacher, Business"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="childName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Child&apos;s Name *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Enter child's name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Birth *</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="classApplying"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Class Applying For *</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select a class" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {CLASSES.map((classInfo, index) => (
                                  <SelectItem
                                    key={index}
                                    value={classInfo.grade}>
                                    {classInfo.grade} ({classInfo.ageRange})
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="nationality"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nationality *</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g. Indian" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="religion"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Religion *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Hindu, Muslim, Christian"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="caste"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Caste *</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter caste" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="languageSpoken"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Language Spoken *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g. Bengali, Hindi, English"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="10-digit phone number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address *</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="aadharNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Aadhaar Number *</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="12-digit Aadhaar number"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="permanentAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Permanent Address *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter permanent address"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="currentAddress"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Address *</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Enter current address (if different)"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Additional Message (Optional)</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Any specific requirements or questions..."
                                className="resize-none"
                                rows={4}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90"
                        disabled={isSubmitting}>
                        {isSubmitting
                          ? "Opening WhatsApp..."
                          : "Submit via WhatsApp"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
