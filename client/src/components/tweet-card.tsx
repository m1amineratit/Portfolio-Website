import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface TweetCardProps {
  name: string;
  handle: string;
  avatar: string;
  content: string;
  date: string;
  index: number;
}

export function TweetCard({ name, handle, avatar, content, date, index }: TweetCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card/50 backdrop-blur-sm">
        <CardHeader className="flex flex-row gap-4 p-6 pb-2">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <p className="text-sm font-semibold leading-none">{name}</p>
            <p className="text-sm text-muted-foreground">{handle}</p>
          </div>
        </CardHeader>
        <CardContent className="p-6 pt-2">
          <p className="text-sm leading-relaxed mb-4">{content}</p>
          <p className="text-xs text-muted-foreground">{date}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
