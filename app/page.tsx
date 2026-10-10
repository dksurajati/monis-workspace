
"use client";

import { useState } from "react";
import {
  Check,
  RotateCcw,
  Monitor,
  LampDesk,
  Sprout,
  Plus,
  Armchair,
  Sofa,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

type Desk = {
  id: string;
  name: string;
  price: number;
  color: string;
  description: string;
};

type Chair = {
  id: string;
  name: string;
  price: number;
  color: string;
  description: string;
};

type Accessory = {
  id: string;
  name: string;
  price: number;
};

const desks: Desk[] = [
  {
    id: "oak",
    name: "Oak Studio",
    price: 55,
    color: "#C9A66B",
    description: "Warm natural finish",
  },
  {
    id: "walnut",
    name: "Walnut Pro",
    price: 70,
    color: "#704831",
    description: "Rich walnut finish",
  },
];

const chairs: Chair[] = [
  {
    id: "cloud",
    name: "Cloud Chair",
    price: 45,
    color: "#E7E4DE",
    description: "Light and minimal",
  },
  {
    id: "graphite",
    name: "Graphite Chair",
    price: 55,
    color: "#343434",
    description: "Modern dark finish",
  },
];

const accessories: Accessory[] = [
  { id: "monitor", name: "4K Monitor", price: 25 },
  { id: "lamp", name: "Desk Lamp", price: 10 },
  { id: "plant", name: "Tropical Plant", price: 8 },
];

function PlantIllustration() {
  return (
    <svg
      viewBox="0 0 120 150"
      className="h-full w-full"
      role="img"
      aria-label="Tropical plant"
    >
      <g
        fill="none"
        stroke="#52765A"
        strokeWidth="4"
        strokeLinecap="round"
      >
        <path d="M60 105V48" />
        <path d="M60 80L35 58" />
        <path d="M60 70L83 43" />
        <path d="M60 57L48 32" />
        <path d="M60 91L89 73" />
      </g>
      <g fill="#648866">
        <ellipse
          cx="35"
          cy="48"
          rx="13"
          ry="24"
          transform="rotate(-38 35 48)"
        />
        <ellipse
          cx="83"
          cy="36"
          rx="13"
          ry="25"
          transform="rotate(35 83 36)"
        />
        <ellipse
          cx="47"
          cy="27"
          rx="12"
          ry="23"
          transform="rotate(-25 47 27)"
        />
        <ellipse
          cx="89"
          cy="68"
          rx="12"
          ry="22"
          transform="rotate(55 89 68)"
        />
        <ellipse cx="60" cy="47" rx="12" ry="25" />
      </g>
      <path
        d="M35 104H85L78 145H42Z"
        fill="#986344"
      />
      <path
        d="M35 104Q60 112 85 104"
        fill="#B47A51"
      />
    </svg>
  );
}

function DeskLampIllustration() {
  return (
    <svg
      viewBox="0 0 100 100"
      className="h-full w-full"
      role="img"
      aria-label="Desk lamp"
    >
      <path
        d="M48 47L64 64L53 78"
        fill="none"
        stroke="#4C4A43"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 78H75"
        stroke="#4C4A43"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M45 45L28 23L57 12L73 31L45 45Z"
        fill="#E5C56D"
        stroke="#4C4A43"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M32 24L56 15"
        stroke="#F4E2A3"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChairIllustration({ color }: { color: string }) {
  return (
    <svg
      viewBox="0 0 180 190"
      className="h-full w-full overflow-visible"
      role="img"
      aria-label="Selected office chair"
    >
      <ellipse
        cx="90"
        cy="174"
        rx="47"
        ry="7"
        fill="#49443D"
        opacity="0.12"
      />
      <rect
        x="47"
        y="20"
        width="86"
        height="87"
        rx="21"
        fill={color}
        stroke="#000000"
        strokeOpacity="0.06"
        strokeWidth="2"
      />
      <rect
        x="39"
        y="96"
        width="102"
        height="29"
        rx="12"
        fill={color}
      />
      <rect
        x="84"
        y="123"
        width="12"
        height="34"
        rx="4"
        fill="#49443D"
      />
      <path
        d="M90 157L60 171M90 157L120 171M90 157V174"
        fill="none"
        stroke="#49443D"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M53 171H127"
        stroke="#49443D"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M57 37Q90 25 123 37"
        fill="none"
        stroke="#FFFFFF"
        strokeOpacity="0.25"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Home() {
  const [selectedDesk, setSelectedDesk] = useState("oak");
  const [selectedChair, setSelectedChair] = useState("cloud");
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>([
    "monitor",
  ]);
  const [showCheckout, setShowCheckout] = useState(false);

  const desk = desks.find((item) => item.id === selectedDesk) ?? desks[0];
  const chair =
    chairs.find((item) => item.id === selectedChair) ?? chairs[0];

  const accessoryTotal = accessories
    .filter((item) => selectedAccessories.includes(item.id))
    .reduce((sum, item) => sum + item.price, 0);

  const total = desk.price + chair.price + accessoryTotal;

  function toggleAccessory(id: string) {
    setSelectedAccessories((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  function resetSetup() {
    setSelectedDesk("oak");
    setSelectedChair("cloud");
    setSelectedAccessories(["monitor"]);
    setShowCheckout(false);
  }

  return (
    <main className="min-h-screen bg-[#F4F1EB] text-[#1D1D1B]">
      {/* Header */}
      <header className="border-b border-black/10 bg-[#F8F6F1]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="shrink-0">
            <span className="block text-xl font-bold tracking-tight">
              monis.rent
            </span>
            <span className="block text-xs text-black/45">
              workspace rentals
            </span>
          </a>

          <div className="hidden text-sm text-black/55 md:block">
            Build your workspace
          </div>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("setup-summary")
                ?.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:bg-black hover:text-white"
          >
            My setup
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="mx-auto max-w-[1440px] px-5 pb-8 pt-10 sm:px-8 md:pt-14 lg:px-12"
      >
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#D8753F] sm:text-sm">
            Workspace designer
          </p>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
            Build a workspace
            <br />
            that feels like yours.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-black/55 sm:text-lg">
            Pick your essentials, add the details you love, and create a
            workspace ready for your next productive day in Bali.
          </p>
        </div>
      </section>

      {/* Main designer */}
      <section className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-6 px-5 pb-8 sm:px-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(340px,0.8fr)] lg:gap-7 lg:px-12">
        {/* Workspace preview */}
        <div className="relative min-w-0 overflow-hidden rounded-[1.75rem] bg-[#DCD4C7] shadow-sm">
          <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[610px]">
            {/* Window */}
            <div className="absolute right-[7%] top-[7%] h-32 w-44 overflow-hidden rounded-xl border-[6px] border-[#B7AEA1] bg-[#BFD6D5] sm:h-44 sm:w-60 lg:h-48 lg:w-64">
              <div className="absolute inset-y-0 left-1/2 w-px bg-[#AFC5C4]" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-[#AFC5C4]" />
              <div className="absolute bottom-2 left-3 text-[9px] text-black/40 sm:text-xs">
                BALI / WORKSPACE
              </div>
              <div className="absolute right-4 top-4 h-8 w-8 rounded-full bg-[#E8B45F]/70 blur-sm sm:h-10 sm:w-10" />
            </div>

            
            {/* Floor */}
            <div className="absolute inset-x-0 bottom-0 h-[25%] bg-[#BDAF9D]" />

            
            {/* Plant */}
            {selectedAccessories.includes("plant") && (
              <div className="absolute bottom-[25%] left-[4%] z-10 h-[72px] w-[58px] sm:bottom-[23%] sm:left-[6%] sm:h-20 sm:w-14 lg:bottom-[22%] lg:h-24 lg:w-16">
                <PlantIllustration />
              </div>
            )}


            {/* Desk: tabletop and legs */}        
            <div className="absolute left-1/2 top-[51%] z-20 w-[78%] -translate-x-1/2 sm:top-[49%] sm:w-[72%]">

              {/* Tabletop */}
              <div
                className="relative z-20 h-5 rounded-lg shadow-[0_8px_14px_rgba(0,0,0,0.12)] sm:h-7 sm:rounded-xl"
                style={{ backgroundColor: desk.color }}
              />

              <div className="absolute inset-x-[7%] top-4 flex justify-between sm:top-6">
                <div className="h-[100px] w-3 rounded-b-md bg-[#49443D] sm:h-32 sm:w-4 lg:h-36" />
                <div className="h-[100px] w-3 rounded-b-md bg-[#49443D] sm:h-32 sm:w-4 lg:h-36" />
              </div>

              {/* Monitor */}
              {selectedAccessories.includes("monitor") && (
                <div className="absolute bottom-full left-[38%] z-30 mb-1 flex -translate-x-1/2 flex-col items-center sm:left-[38%]">
                  <div className="flex h-14 w-24 items-center justify-center rounded-lg border-[4px] border-[#292927] bg-[#313A3A] shadow-lg sm:h-20 sm:w-32 lg:h-24 lg:w-40">
                    <span className="text-[9px] font-medium tracking-wider text-white/40 sm:text-xs">
                      MONIS
                    </span>
                  </div>
                  <div className="h-4 w-2 bg-[#292927] sm:h-5" />
                  <div className="h-1.5 w-12 rounded-full bg-[#292927] sm:w-16" />
                </div>
              )}

              {/* Desk lamp */}
              {selectedAccessories.includes("lamp") && (
                <div className="absolute -top-10 right-[10%] z-30 h-12 w-12 sm:-top-12 sm:h-16 sm:w-14">
                  <DeskLampIllustration />
                </div>
              )}
            </div>

            {/* Chair: centered in front of the desk */}  
            <div className="absolute left-1/2 top-[57%] z-30 h-24 w-24 -translate-x-1/2 sm:top-[54%] sm:h-32 sm:w-32 lg:h-36 lg:w-36">
              <ChairIllustration color={chair.color} />
            </div>


            {/* Preview label */}
            <div className="absolute left-4 top-4 z-40 rounded-full bg-white/80 px-3 py-2 text-[10px] font-bold tracking-wide backdrop-blur sm:left-6 sm:top-6 sm:px-4 sm:text-xs">
              LIVE PREVIEW
            </div>

            {/* Preview footer */}
            <div className="absolute inset-x-0 bottom-0 z-40 flex min-h-[90px] items-center justify-between gap-3 bg-[#BDAF9D] px-4 py-4 sm:px-7">
              <div className="min-w-0">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-black/45 sm:text-xs">
                  Your workspace
                </p>
                <p className="mt-1 text-sm font-semibold sm:text-lg">
                  {desk.name} + {chair.name}
                </p>
              </div>
              <div className="shrink-0 rounded-full bg-white/85 px-3 py-2 text-xs font-semibold sm:px-4 sm:text-sm">
                ${total} / month
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <aside className="min-w-0 rounded-[1.75rem] bg-[#1E1E1C] p-5 text-white shadow-sm sm:p-7">
          <div className="mb-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
              Customize
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              Design your space
            </h2>
            <p className="mt-2 text-sm leading-6 text-white/50">
              Choose your essentials and personalize your workspace.
            </p>
          </div>

          {/* Desk selector */}
          <section className="mb-7">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold">Desk</h3>
              <span className="text-xs text-white/40">Choose one</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {desks.map((item) => {
                const active = selectedDesk === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedDesk(item.id)}
                    className={`min-w-0 rounded-2xl border p-3 text-left transition duration-200 hover:-translate-y-0.5 ${
                      active
                        ? "border-[#E6A06E] bg-[#E6A06E]/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div
                      className="mb-3 h-10 rounded-xl sm:h-12"
                      style={{ backgroundColor: item.color }}
                    />
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="mt-1 text-xs text-white/50">
                      ${item.price} / month
                    </p>
                    <p
                      className={`mt-2 flex items-center gap-1 text-xs font-semibold ${
                        active ? "text-[#E6A06E]" : "invisible"
                      }`}
                    >
                      <Check size={14} />
                      Selected
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Chair selector */}
          <section className="mb-7">
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold">Chair</h3>
              <span className="text-xs text-white/40">Choose one</span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {chairs.map((item) => {
                const active = selectedChair === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedChair(item.id)}
                    className={`min-w-0 rounded-2xl border p-3 text-left transition duration-200 hover:-translate-y-0.5 ${
                      active
                        ? "border-[#E6A06E] bg-[#E6A06E]/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <div className="mb-3 flex h-10 items-center rounded-xl bg-white/5 px-3 sm:h-12">
                      <div
                        className="h-full w-full rounded-lg"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="mt-1 text-xs text-white/50">
                      {item.description}
                    </p>
                    <p className="mt-2 text-xs text-white/60">
                      ${item.price} / month
                    </p>
                    <p
                      className={`mt-2 flex items-center gap-1 text-xs font-semibold ${
                        active ? "text-[#E6A06E]" : "invisible"
                      }`}
                    >
                      <Check size={14} />
                      Selected
                    </p>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Accessories */}
          <section>
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="text-sm font-semibold">Accessories</h3>
              <span className="text-xs text-white/40">Add your extras</span>
            </div>

            <div className="space-y-2">
              {accessories.map((item) => {
                const active = selectedAccessories.includes(item.id);

                const Icon =
                  item.id === "monitor"
                    ? Monitor
                    : item.id === "lamp"
                      ? LampDesk
                      : Sprout;

                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleAccessory(item.id)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl border p-3 text-left transition ${
                      active
                        ? "border-[#E6A06E] bg-[#E6A06E]/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                        <Icon size={19} strokeWidth={1.8} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium">
                          {item.name}
                        </span>
                        <span className="mt-1 block text-xs text-white/45">
                          +${item.price} / month
                        </span>
                      </span>
                    </span>

                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                        active
                          ? "bg-[#E6A06E] text-[#1E1E1C]"
                          : "border border-white/20 text-white/50"
                      }`}
                    >
                      {active ? <Check size={15} /> : <Plus size={15} />}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <button
            type="button"
            onClick={resetSetup}
            className="mt-6 inline-flex items-center gap-2 text-xs text-white/50 underline underline-offset-4 transition hover:text-white"
          >
            <RotateCcw size={13} />
            Reset to default setup
          </button>
        </aside>
      </section>

      {/* Setup summary */}
      <section
        id="setup-summary"
        className="mx-auto max-w-[1440px] px-5 pb-10 sm:px-8 lg:px-12"
      >
        <div className="flex flex-col gap-5 rounded-[1.75rem] bg-white p-5 shadow-sm sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/35">
              Your setup
            </p>

            <div className="mt-3 flex flex-wrap gap-2">
              {[desk.name, chair.name].map((name) => (
                <span
                  key={name}
                  className="rounded-full bg-[#F1EEE7] px-3 py-2 text-sm"
                >
                  {name}
                </span>
              ))}

              {selectedAccessories.map((id) => {
                const accessory = accessories.find(
                  (item) => item.id === id
                );

                return accessory ? (
                  <span
                    key={id}
                    className="rounded-full bg-[#F1EEE7] px-3 py-2 text-sm"
                  >
                    {accessory.name}
                  </span>
                ) : null;
              })}
            </div>

            <p className="mt-3 text-xs text-black/40">
              Your choices update the workspace preview and estimated monthly
              price instantly.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between lg:shrink-0">
            <div>
              <p className="text-xs text-black/45">Estimated monthly</p>
              <p className="text-3xl font-semibold">${total}</p>
            </div>

            <button
              type="button"
              onClick={() => setShowCheckout(true)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E1E1C] px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#D8753F]"
            >
              Rent this workspace
              <ArrowRight size={17} />
            </button>
          </div>
        </div>
      </section>

      {/* Checkout confirmation */}
      {showCheckout && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setShowCheckout(false);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-title"
            className="relative max-h-[calc(100dvh-2rem)] w-full max-w-md overflow-y-auto overscroll-contain rounded-[2rem] bg-[#F8F6F1] p-5 shadow-2xl sm:p-7"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6A06E]/20 text-[#B65D2D]">
              <button
                type="button"
                onClick={() => setShowCheckout(false)}
                aria-label="Close workspace summary"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-xl text-black/60 transition hover:bg-black/5 hover:text-black"
              >
                ×
              </button>
              <ShoppingBag size={27} />
            </div>

            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D8753F]">
              Workspace summary
            </p>

            <h2
              id="checkout-title"
              className="mt-2 text-2xl font-semibold"
            >
              Your workspace is ready!
            </h2>

            <p className="mt-3 text-sm leading-6 text-black/55">
              Review your selected equipment before proceeding with a rental.
            </p>

            <div className="my-6 space-y-3 rounded-2xl bg-white p-4">
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-black/55">Desk</span>
                <span className="text-right font-medium">{desk.name}</span>
              </div>
              <div className="flex justify-between gap-3 text-sm">
                <span className="text-black/55">Chair</span>
                <span className="text-right font-medium">{chair.name}</span>
              </div>
              {selectedAccessories.map((id) => {
                const accessory = accessories.find(
                  (item) => item.id === id
                );

                return accessory ? (
                  <div
                    key={id}
                    className="flex justify-between gap-3 text-sm"
                  >
                    <span className="text-black/55">Accessory</span>
                    <span className="text-right font-medium">
                      {accessory.name}
                    </span>
                  </div>
                ) : null;
              })}
              <div className="border-t border-black/10 pt-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-black/55">
                    Estimated monthly
                  </span>
                  <span className="text-xl font-bold">${total}</span>
                </div>
              </div>
            </div>

            <p className="mb-5 text-xs leading-5 text-black/45">
              This is a demo confirmation. No booking or payment has been
              processed.
            </p>

            <button
              type="button"
              onClick={() => setShowCheckout(false)}
              className="w-full rounded-full bg-[#1E1E1C] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#D8753F]"
            >
              Back to my workspace
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-black/10 px-5 py-7 text-center text-xs text-black/40">
        monis.rent · Flexible workspace equipment for Bali
      </footer>
    </main>
  );
}
