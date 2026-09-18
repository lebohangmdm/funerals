import { Check } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";

interface FuneralCoverCardProps {
  id: string;
  name: string;
  description: string;
  premium: number;
  coverAmount: number;
  benefits: string[];
  popular?: boolean;
}

export default function FuneralCoverCard({
  id,
  name,
  description,
  premium,
  coverAmount,
  benefits,
  popular = false,
}: FuneralCoverCardProps) {
  return (
    <Card className="relative flex h-full flex-col overflow-hidden rounded-xl py-6  border shadow-sm transition-shadow hover:shadow-md">
      {popular && (
        <div className="absolute right-4 top-4 ">
          <Badge className="bg-orange-500 text-white lg:text-base min-h-6 ">
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="space-y-3 pb-4">
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold tracking-tight">
            {name}
          </h3>

          <p className="mt-1 min-h-18 line-clamp-3 text-sm leading-6 text-slate-800">
            {description}
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-6">
        <div className="rounded-xl bg-muted/70 p-4">
          <p className="text-sm text-slate-800">Monthly premium</p>

          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-3xl lg:text-4xl font-bold tracking-tight text-orange-500">
              R{premium}
            </span>
            <span className="text-sm text-muted-foreground">/ month</span>
          </div>

          <div className="mt-3 flex items-center justify-between border-t pt-3">
            <span className="text-sm text-muted-foreground ">
              Funeral cover
            </span>
            <span className="font-semibold">
              R{coverAmount.toLocaleString()}
            </span>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-medium text-slate-800">
            What’s included
          </p>

          <ul className="space-y-3">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter className="pt-2">
        <Link
          href={`/funeral-plans/${id}`}
          className="mt-4 flex min-h-11 w-full items-center justify-center rounded-lg bg-orange-500 px-4 font-semibold text-white transition-colors duration-150 hover:bg-orange-600 sm:px-6 lg:px-8 lg:text-lg"
        >
          View Plan Details
        </Link>
      </CardFooter>
    </Card>
  );
}
