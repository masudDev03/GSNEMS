'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { CLASSES, TEACHING_APPROACHES, DAILY_SCHEDULE } from '@/lib/constants';
import { GraduationCap, Clock } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function AcademicsPage() {
  return (
    <div className="pt-24">
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Academics
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive curriculum designed to nurture curious minds and build strong foundations
            </p>
          </motion.div>

          <SectionHeader
            title="Our Classes"
            subtitle="Age-appropriate learning pathways from Pre-KG to Class IV"
            centered
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
          >
            {CLASSES.map((classInfo, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1 border-t-4 border-t-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{classInfo.grade}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {classInfo.ageRange}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {classInfo.description}
                    </p>
                    <div>
                      <p className="text-sm font-semibold mb-2">Key Focus Areas:</p>
                      <ul className="space-y-1">
                        {classInfo.focus.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Teaching Approach"
            subtitle="Innovative methodologies that make learning engaging and effective"
            centered
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {TEACHING_APPROACHES.map((approach, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4">
                      <approach.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {approach.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {approach.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <SectionHeader
              title="Daily Schedule"
              subtitle="A balanced routine that promotes learning, play, and growth"
              centered
            />

            <Card>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {DAILY_SCHEDULE.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3 text-left">
                          <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                          <div>
                            <div className="font-semibold">{item.activity}</div>
                            <div className="text-sm text-muted-foreground">
                              {item.time}
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground pl-7">
                          {item.description}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>

            <p className="text-sm text-muted-foreground text-center mt-6">
              * Schedule may vary slightly based on grade level and special activities
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
