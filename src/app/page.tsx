import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, UserCheck, ArrowRight, Swords, Music, Palette, Dumbbell } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    value: '1,200+',
    label: 'Active Students',
  },
  {
    icon: <UserCheck className="w-8 h-8 text-primary" />,
    value: '75+',
    label: 'Expert Teachers',
  },
];

const news = [
  {
    title: 'Annual Sports Day Triumph',
    date: 'March 15, 2024',
    preview: 'Our students showcased exceptional talent and sportsmanship at the annual sports meet...',
  },
  {
    title: 'Science Fair Innovations',
    date: 'March 10, 2024',
    preview: 'The future of science is bright! Our young innovators presented groundbreaking projects...',
  },
  {
    title: 'Welcoming New Principal',
    date: 'March 1, 2024',
    preview: 'We are thrilled to welcome Mr. John Doe as the new principal of JWD Ahh School...',
  },
];

const activities = [
    { name: "Fencing Club", icon: <Swords className="w-10 h-10 text-primary" /> },
    { name: "School Band", icon: <Music className="w-10 h-10 text-primary" /> },
    { name: "Art & Craft", icon: <Palette className="w-10 h-10 text-primary" /> },
    { name: "Athletics", icon: <Dumbbell className="w-10 h-10 text-primary" /> },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">Welcome to JWD Ahh School</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Nurturing tomorrow's leaders through excellence in education, character, and community.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/profile">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/gallery">Visit Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {stats.map((stat) => (
                    <Card key={stat.label} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="flex flex-col items-center">
                        {stat.icon}
                        <CardTitle className="text-4xl font-bold text-primary mt-2">{stat.value}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{stat.label}</p>
                    </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>
      
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">School News</h2>
          <p className="text-center text-muted-foreground mb-12">Stay updated with the latest happenings at our school.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item) => (
              <Card key={item.title} className="flex flex-col shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.date}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{item.preview}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">Extracurricular Activities</h2>
          <p className="text-center text-muted-foreground mb-12">Explore a wide range of activities beyond the classroom.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {activities.map((activity) => (
                <Card key={activity.name} className="flex flex-col items-center justify-center p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 aspect-square">
                    {activity.icon}
                    <p className="mt-4 font-semibold text-primary">{activity.name}</p>
                </Card>
            ))}
          </div>
           <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
                <Link href="/extracurricular">See All Activities <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
