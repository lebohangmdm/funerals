import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export default function AccordionFaq() {
  return (
    <Accordion
      className="flex w-full flex-col gap-4"
      defaultValue={["cover"]}
      multiple={false}
    >
      {faqItems.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className={cn(
            "group rounded-2xl border border-border/50",
            "bg-white/60 backdrop-blur-sm",
            "shadow-sm transition-all duration-300",
            "hover:shadow-md",
            "px-5",
          )}
        >
          <AccordionTrigger
            className={cn(
              "py-4 text-left text-lg font-medium lg:text-xl",
              "transition-colors duration-200",
              "group-hover:text-primary",
            )}
          >
            {item.title}
          </AccordionTrigger>

          <AccordionContent
            className={cn(
              "pb-4 pt-1",
              "text-base leading-relaxed text-slate-600 lg:text-lg",
            )}
          >
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

const faqItems = [
  {
    value: "cover",
    title: "What type of cover am I buying?",
    content: (
      <p className="text-base lg:text-lg">
        You are buying Funeral Cover that will pay in the unfortunate event that
        one of the lives covered on the policy passes away.
      </p>
    ),
  },

  {
    value: "time",
    title: "How long does it take for a Funeral Cover claim to be paid out?",
    content: (
      <p className="text-base lg:text-lg">
        Approved funeral claims are paid out within 24 hours, provided that all
        required documentation is submitted.
      </p>
    ),
  },

  {
    value: "requirement-claim",
    title: "What documentation is required for a funeral claim?",
    content: (
      <div className="space-y-2">
        <p className="text-base lg:text-lg">
          There are a few documents that are needed to process a funeral claim,
          and these include the following:
        </p>

        <ul className="space-y-1">
          <li className="flex items-start gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-900" />
            <span className="text-sm lg:text-base">A death certificate</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-900" />
            <span className="text-sm lg:text-base">A notice of death</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-900" />
            <span className="text-sm lg:text-base">
              A burial order or certificate of cremation
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-900" />
            <span className="text-sm lg:text-base">
              Certified ID copies of the deceased, claimant and the beneficiary
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-900" />
            <span className="text-sm lg:text-base">
              Proof of income (bank statement and payslip) if the policyholder
              is deceased
            </span>
          </li>
        </ul>

        <div className="rounded-xl border bg-muted/40 p-4">
          <p className="text-base lg:text-lg">
            If the deceased is merely a dependent, we only require proof of the
            banking details where the funds will be transferred.
          </p>

          <p className="mt-3 text-base lg:text-lg ">
            If the death was due to unnatural causes, we will need an A1
            statement and post-mortem results.
          </p>
        </div>
      </div>
    ),
  },

  {
    value: "policy-change",
    title: "Can I make changes to the Funeral Policy?",
    content: (
      <p className="text-base lg:text-lg">
        Yes. You can make changes to the policy such as adding a family member
        to the policy, increasing/decreasing the amount of cover, and choosing a
        new beneficiary.
      </p>
    ),
  },

  {
    value: "funeral-cover-stop",
    title: "When does my funeral cover stop?",
    content: (
      <div className="space-y-2">
        <p className="text-base lg:text-lg">
          Your cover will stop when any of the below occurs - whichever happens
          first.
        </p>

        <ul className="space-y-1">
          <li className="flex items-start gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-900" />
            <span className="text-sm lg:text-base">
              You stop paying your premiums, and do not qualify for, or have
              completely used your Premium Holiday
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-900" />
            <span className="text-sm lg:text-base">You cancel the policy</span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-slate-900" />
            <span className="text-sm lg:text-base">
              You, the policyholder, passes away
            </span>
          </li>
        </ul>

        <div className="rounded-xl border bg-muted/40 p-4">
          <p className="text-base lg:text-lg">
            All the insured persons pass away or are no longer eligible for
            cover under the family benefit
          </p>
        </div>
      </div>
    ),
  },

  {
    value: "missed-payment",
    title: "What happens if I miss my Funeral Cover premium payment?",
    content: (
      <p className="text-base lg:text-lg">
        If you miss a premium payment, your policy will lapse. It’s important to
        keep your premiums up to date to ensure continuous cover.
      </p>
    ),
  },

  {
    value: "lapsed-cover",
    title: "Can I reinstate a lapsed Funeral Cover?",
    content: (
      <p className="text-base lg:text-lg">
        Yes, a lapsed policy can be reinstated within 3 months from the date of
        cancellation.
      </p>
    ),
  },
];
