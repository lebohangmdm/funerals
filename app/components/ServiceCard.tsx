import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BaggageClaim, Check, CheckCircle } from "lucide-react";
import Image from "next/image";

type Service = {
  name: string;
  image: string;
  description: string;
  list: string[];
  icon?: React.ReactNode;
};

export default function ServiceCard({
  name,
  image,
  description,
  list,
  icon,
}: Service) {
  return (
    <Card className="relative mx-auto flex h-full w-full max-w-sm flex-col overflow-hidden pt-0 ">
      {/* Image */}
      <div className="relative aspect-video shrink-0">
        <div className="absolute inset-0 z-10" />

        <Image
          src={image}
          alt={name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 100vw, 384px"
        />

        <div className="absolute size-16 flex items-center justify-center -bottom-8 left-4 bg-blue-100 rounded-full">
          {icon}
        </div>
      </div>

      {/* Header */}
      <CardHeader className="mt-8">
        <CardTitle className="text-lg md:text-xl lg:text-2xl font-bold text-blue-500">
          {name}
        </CardTitle>

        <CardDescription className="min-h-20 text-base">
          {description}
        </CardDescription>
      </CardHeader>

      {/* Content */}
      <CardContent className="flex-1 pb-4 lg:pb-5">
        <ul className="ml-2 space-y-2 text-sm  text-muted-foreground md:text-base lg:text-lg">
          {list.map((item) => (
            <li key={item} className="flex items-center gap-2">
              {/* <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-500" /> */}
              <Check className="w-4 h-4  text-blue-500" />
              <span className="">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
