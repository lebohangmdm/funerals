const stats = [
  {
    value: "1995",
    suffix: "",
    label: "established",
  },
  {
    value: "24",
    suffix: "hr",
    label: "help and support",
  },
  {
    value: "80 000",
    suffix: "+",
    label: "active policies",
    accent: "bg-cyan-300",
  },
  {
    value: "1 000 000",
    suffix: "+",
    label: "lives covered",
  },
  {
    value: "400",
    suffix: "+",
    label: "monthly funerals",
  },
  {
    value: "25",
    suffix: "",
    label: "local branches",
  },
];

export default function Stats() {
  return (
    <div>
      {/* Decorative background */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full border-[40px] border-white/[0.03]"
      /> */}

      <div className="">
        <div className="grid grid-cols-2 gap-4 bg-bluesh ">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-white/15 bg-blue-500 p-6 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
            >
              {/* Top accent */}

              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg md:text-xl font-extrabold tracking-tight text-white lg:text-2xl">
                    {stat.value}
                  </span>

                  {stat.suffix && (
                    <span className="text-base font-bold text-white md:text-lg">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-base font-medium capitalize text-white sm:text-lg">
                  {stat.label}
                </p>
              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
