import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Swords, Music, Palette, Dumbbell, Bot, Microscope, Feather } from 'lucide-react';

const activities = [
  { 
    name: "Fencing Club", 
    description: "Learn the art of swordsmanship, strategy, and discipline in our competitive fencing club.",
    icon: <Swords className="w-12 h-12 text-primary" /> 
  },
  { 
    name: "School Band", 
    description: "Join our talented musicians and perform at school events, parades, and competitions.",
    icon: <Music className="w-12 h-12 text-primary" /> 
  },
  { 
    name: "Art & Craft", 
    description: "Unleash your creativity with painting, sculpture, and various other artistic mediums.",
    icon: <Palette className="w-12 h-12 text-primary" /> 
  },
  { 
    name: "Athletics", 
    description: "Enhance your physical fitness, teamwork, and sportsmanship through track and field events.",
    icon: <Dumbbell className="w-12 h-12 text-primary" /> 
  },
  {
    name: "Robotics Club",
    description: "Design, build, and program robots to compete in exciting challenges and competitions.",
    icon: <Bot className="w-12 h-12 text-primary" />
  },
  {
    name: "Science Club",
    description: "Explore the wonders of science through hands-on experiments, projects, and discussions.",
    icon: <Microscope className="w-12 h-12 text-primary" />
  },
  {
    name: "Debate Team",
    description: "Sharpen your critical thinking and public speaking skills in our award-winning debate team.",
    icon: <Feather className="w-12 h-12 text-primary" />
  },
];

export default function ExtracurricularPage() {
  return (
    <div className="container mx-auto px-4 py-16">
       <div className="flex flex-col items-center text-center mb-12">
            <Trophy className="w-16 h-16 text-primary mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-primary">Beyond the Classroom</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
                We offer a diverse range of extracurricular activities to help students explore their passions and develop new skills.
            </p>
        </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {activities.map((activity) => (
          <Card key={activity.name} className="flex flex-col text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center">
              {activity.icon}
              <CardTitle className="mt-4">{activity.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-muted-foreground">{activity.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
