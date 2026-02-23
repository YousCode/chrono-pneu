"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, Flame, CheckCircle2 } from "lucide-react";

const services = [
  "Pneus neufs & d'occasion (5-8 mm)",
  "Vente en gros",
  "Equilibrage",
  "Parallelisme",
  "Diagnostic",
  "Reparation crevaison"
];

const flyerTone = {
  black: "#080808",
  yellow: "#facc15",
  orange: "#f97316",
  red: "#dc2626"
};

export default function Home() {
  return (
    <main className="bg-black text-white pb-24 md:pb-8">
      <HeroSection />
      <OfferSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <MobileStickyCall />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden border-b border-yellow-500/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(250,204,21,0.22),transparent_40%),radial-gradient(circle_at_80%_15%,rgba(249,115,22,0.26),transparent_36%),linear-gradient(140deg,#050505_0%,#161616_55%,#060606_100%)]" />
      <div className="lightning-grid absolute inset-0" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-8 px-6 py-14 md:grid-cols-[1.1fr_1fr] md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-block overflow-hidden rounded-2xl border border-yellow-300/50 bg-black/70 shadow-[0_0_30px_rgba(250,204,21,0.25)]">
            <Image
              src="/logo-chrono.png"
              alt="Logo Chrono Pneus"
              width={320}
              height={170}
              className="h-auto w-[220px] sm:w-[280px]"
              priority
            />
          </div>

          <motion.h1
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.9 }}
            className="font-display text-5xl uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl"
          >
            Pourquoi payer
            <br />
            plus cher
            <span className="text-yellow-300"> ailleurs ?</span>
          </motion.h1>

          <motion.div
            initial={{ y: 45, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <ActionBtn href="tel:0640821325" variant="solid">
              <Phone className="h-5 w-5" /> Appeler
            </ActionBtn>
            <ActionBtn
              href="https://www.google.com/maps/search/?api=1&query=42+bis+Boulevard+Foch+93800+Epinay-sur-Seine"
              variant="outline"
            >
              <Navigation className="h-5 w-5" /> Itineraire
            </ActionBtn>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="relative h-[420px] overflow-hidden rounded-[2rem] border border-yellow-500/30 bg-zinc-900 md:h-[620px]"
        >
          <Image
            src="https://images.pexels.com/photos/8985666/pexels-photo-8985666.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Atelier pneus"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.78),transparent_45%)]" />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-yellow-300/45 bg-black/75 p-4">
            <p className="font-display text-2xl uppercase text-yellow-300">A partir de 25 EUR</p>
            <p className="text-sm text-zinc-100">Pneus neufs et occasion controles</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function OfferSection() {
  return (
    <motion.section
      initial={{ scale: 0.94, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.75, type: "spring" }}
      className="relative mx-auto mt-10 max-w-7xl overflow-hidden rounded-[2rem] border border-red-500/40 bg-[linear-gradient(130deg,#2d0f08_0%,#190c08_45%,#1f0d07_100%)] px-6 py-10 md:px-10"
    >
      <div className="flame-overlay absolute inset-0" />
      <div className="relative grid gap-7 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-red-600/85 px-4 py-2 font-display text-xl uppercase text-white">
            <Flame className="h-5 w-5 text-yellow-300" /> Offre speciale
          </p>
          <h2 className="mt-4 font-display text-5xl uppercase leading-[0.95] text-yellow-300 sm:text-6xl">
            4 pneus achetes =
            <br />
            parallelisme offert
          </h2>
          <p className="mt-4 max-w-xl text-zinc-100">Meme impact que le flyer: offre claire, directe, sans detour.</p>
          <ActionBtn href="tel:0640821325" variant="solid" className="mt-6">
            Profiter de l'offre
          </ActionBtn>
        </div>

        <div className="relative h-72 overflow-hidden rounded-3xl border border-yellow-500/30 md:h-[360px]">
          <Image
            src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt="Pneus empiles"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.7),transparent_55%)]" />
        </div>
      </div>
    </motion.section>
  );
}

function ServicesSection() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6 md:px-10">
      <div className="rounded-[2rem] border border-yellow-500/25 bg-zinc-950/90 p-6 md:p-8">
        <h3 className="font-display text-4xl uppercase text-yellow-300">Services</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <div className="relative h-36 overflow-hidden rounded-2xl border border-zinc-700">
            <Image
              src="https://images.pexels.com/photos/8985613/pexels-photo-8985613.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Pneu en montage"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-36 overflow-hidden rounded-2xl border border-zinc-700">
            <Image
              src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Pneus en stock"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {services.map((service, index) => (
            <motion.button
              key={service}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex w-full items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/70 px-4 py-3 text-left transition hover:border-yellow-400/60 hover:bg-zinc-900"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-yellow-300" />
              <span className="text-lg text-zinc-100">{service}</span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="mx-auto mt-12 max-w-7xl px-6 md:px-10">
      <div className="rounded-[2rem] border border-red-500/30 bg-[linear-gradient(140deg,#140f0d,#090909_55%,#150f0c)] p-6 md:p-8">
        <h4 className="font-display text-4xl uppercase text-white">Adresse & contact</h4>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=42+bis+Boulevard+Foch+93800+Epinay-sur-Seine"
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-3 rounded-xl border border-zinc-700 bg-black/45 p-4"
            >
              <MapPin className="mt-1 h-5 w-5 text-yellow-300" />
              <span>42 bis Boulevard Foch, 93800 Epinay-sur-Seine</span>
            </a>
            <a href="tel:0640821325" className="flex items-center gap-3 rounded-xl border border-zinc-700 bg-black/45 p-4">
              <Phone className="h-5 w-5 text-yellow-300" />
              <span className="font-display text-3xl text-yellow-300">06 40 82 13 25</span>
            </a>
            <div className="rounded-xl border border-zinc-700 bg-black/45 p-4">
              <p className="text-sm uppercase tracking-wide text-zinc-300">Reseaux sociaux</p>
              <a
                href="https://www.tiktok.com/@chronopneus0"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-lg text-yellow-300 hover:text-yellow-200"
              >
                TikTok officiel: @chronopneus0
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-zinc-700 bg-black/45 p-2">
            <iframe
              title="Carte Chrono Pneus"
              src="https://www.google.com/maps?q=42+bis+Boulevard+Foch,+93800+Epinay-sur-Seine&output=embed"
              className="h-72 w-full rounded-lg md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto mt-12 max-w-7xl border-t border-yellow-500/25 px-6 py-8 md:px-10">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Image src="/logo-chrono.png" alt="Logo Chrono Pneus" width={220} height={100} className="h-auto w-40 sm:w-48" />
        <a href="tel:0640821325" className="text-lg text-zinc-100 hover:text-yellow-300">
          06 40 82 13 25
        </a>
        <p className="text-sm text-zinc-400">Mentions legales</p>
      </div>
    </footer>
  );
}

function MobileStickyCall() {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1.6, duration: 0.45 }}
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-yellow-400/40 bg-gradient-to-r from-red-600 to-yellow-500 p-4 md:hidden"
    >
      <a href="tel:0640821325" className="block rounded-xl bg-black/85 px-4 py-3 text-center text-lg font-bold text-yellow-300">
        📞 Appeler 06 40 82 13 25
      </a>
    </motion.div>
  );
}

type ActionBtnProps = {
  href: string;
  children: React.ReactNode;
  variant: "solid" | "outline";
  className?: string;
};

function ActionBtn({ href, children, variant, className }: ActionBtnProps) {
  const base =
    "btn-primary group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3 text-base font-bold transition duration-200";

  const styles =
    variant === "solid"
      ? "bg-yellow-400 text-black shadow-[0_0_26px_rgba(250,204,21,0.4)] hover:scale-[1.03]"
      : "border border-yellow-300/60 bg-black/35 text-yellow-200 hover:scale-[1.03]";

  return (
    <a href={href} className={`${base} ${styles} ${className ?? ""}`}>
      {children}
      <span className="glow pointer-events-none absolute inset-0" />
    </a>
  );
}

// Keep palette tied to flyer colors only.
void flyerTone;
