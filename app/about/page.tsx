'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/shared/SectionHeader';
import { MISSION_VISION, CORE_VALUES } from '@/lib/constants';
import Loading from '@/app/loading';

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

export default function AboutPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

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
              About Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Discover our journey, values, and commitment to nurturing young minds
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {MISSION_VISION.mission.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {MISSION_VISION.mission.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-secondary mb-4">
                    {MISSION_VISION.vision.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {MISSION_VISION.vision.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <SectionHeader
              title="Our Story"
              subtitle="A journey of dedication and passion for quality education"
              centered
            />
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                Gurukul Shikshaniketan English Medium School was founded with a vision to create an educational institution that honors traditional Gurukul values while embracing modern pedagogical approaches. Located in Palatana, Tripura, we have been serving the community for over five years, growing from a small preschool to a thriving institution serving classes from Pre-KG to Class IV.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 my-8 italic text-lg text-foreground">
                "Education is not the filling of a pail, but the lighting of a fire. At Gurukul Shikshaniketan, we believe every child has an inner spark waiting to be ignited."
              </blockquote>
              <p className="text-muted-foreground">
                Our founders recognized the need for an educational approach that balances academic rigor with character development, creativity with discipline, and individual growth with social responsibility. Today, we continue to expand our reach while maintaining our commitment to small class sizes, personalized attention, and a nurturing environment where every child feels valued and supported.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our Core Values"
            subtitle="The principles that guide everything we do"
            centered
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CORE_VALUES.map((value, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full hover:shadow-lg transition-all hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <SectionHeader
              title="Our Philosophy"
              subtitle="Blending Gurukul traditions with modern pedagogy"
              centered
            />
            <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
              <CardContent className="p-8">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  The Gurukul system of education has long been revered for its emphasis on holistic development, strong teacher-student relationships, and character formation. At Gurukul Shikshaniketan, we honor these timeless principles while incorporating evidence-based modern teaching methods that cater to diverse learning styles and contemporary needs.
                </p>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Our classrooms are spaces where curiosity is celebrated, mistakes are seen as learning opportunities, and every child is encouraged to think critically and express themselves confidently. We emphasize activity-based learning, hands-on exploration, and collaborative projects that make education engaging and meaningful.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond academics, we focus on social-emotional learning, helping children develop empathy, resilience, and strong interpersonal skills. Through daily practices inspired by Gurukul traditions—such as morning assemblies, value-based stories, and community service activities—we instill a sense of responsibility, respect, and ethical awareness in our students.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
