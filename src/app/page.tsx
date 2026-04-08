"use client";

import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CallBand } from "@/components/sections/CallBand";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import {
  Truck,
  ShieldAlert,
  Wrench,
  Anchor,
  MoveHorizontal,
  Warehouse,
} from "lucide-react";

const PHONE_DISPLAY = "(850) 737-1738";
const PHONE_TEL = "tel:8507371738";
const ADDRESS = "112 Mountain Dr, Destin, FL 32541";
const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Destin+Towing+112+Mountain+Dr+Destin+FL+32541";

export default function Home() {
  return (
    <>
      <Nav
        brand="DESTIN TOWING"
        links={[
          { href: "#services", label: "Services" },
          { href: "#why", label: "Why Us" },
          { href: "#contact", label: "Contact" },
        ]}
        cta={{ href: PHONE_TEL, label: "Call Now" }}
      />

      <Hero
        tag="Destin's Reliable Towing & Roadside Service"
        title={
          <>
            Fast Response.{" "}
            <span className="text-[var(--accent)] italic">Fair Prices.</span>
            <br />
            Always Available.
          </>
        }
        sub="From a simple breakdown to a major recovery — Destin Towing has the trucks, the equipment, and the experience to handle any call on the Emerald Coast. 24/7 dispatch, local crews, no surprises."
        primaryCta={{ href: PHONE_TEL, label: "Call (850) 737-1738" }}
        secondaryCta={{ href: "#services", label: "See Our Services" }}
        bgImage="/hero-bg.jpg"
        stats={[
          { value: "24/7", label: "Dispatch" },
          { value: "10+", label: "Years on the Coast" },
          { value: "5★", label: "Local Reviews" },
        ]}
      />

      <ServicesGrid
        id="services"
        tag="What We Do"
        title="Full Towing & Recovery for Destin & the Emerald Coast"
        sub="One call, one crew. From everyday tows to heavy-duty recoveries, we handle every job in-house."
        services={[
          {
            icon: Truck,
            name: "Local Towing",
            description:
              "Stuck anywhere in Destin or the Emerald Coast? We dispatch fast and get your vehicle to the shop, home, or storage safely.",
          },
          {
            icon: ShieldAlert,
            name: "Private Property Towing",
            description:
              "Unauthorized vehicle on your lot or property? We handle P.P. tows quickly and professionally — proper documentation included.",
          },
          {
            icon: Truck,
            name: "Flatbed & Rollback",
            description:
              "Low-clearance, AWD, luxury, or damaged vehicles? Our flatbed moves your car without adding any wear or damage in transit.",
          },
          {
            icon: Anchor,
            name: "Heavy Duty Recovery",
            description:
              "Big rigs, box trucks, RVs, and heavy equipment — our heavy-duty wrecker handles recoveries that standard trucks can't touch.",
          },
          {
            icon: MoveHorizontal,
            name: "GoJacks & Roadside",
            description:
              "Stuck in a tight spot a wrecker can't reach? GoJacks move vehicles sideways in confined areas. Also flat tires, jump starts, and lockouts.",
          },
          {
            icon: Warehouse,
            name: "Vehicle Storage",
            description:
              "Need to hold a vehicle while handling insurance or repairs? Secure storage at $25/day standard, $50/day heavy.",
          },
        ]}
      />

      <CallBand
        title="Need a tow right now?"
        phoneLabel="Call (850) 737-1738"
        phoneHref={PHONE_TEL}
      />

      <ServicesGrid
        id="why"
        tag="Why Destin Calls Us First"
        title="Fast. Reliable. Fair Prices — every time."
        sub="We're a local Destin business that's been serving the Emerald Coast for over a decade. No shady upcharges, no out-of-town dispatchers, no excuses."
        columns={3}
        services={[
          {
            icon: Wrench,
            name: "Local Crews",
            description:
              "Our drivers live here. They know every road from Sandestin to Fort Walton — and they get to you fast.",
          },
          {
            icon: ShieldAlert,
            name: "Honest Pricing",
            description:
              "Quoted up front. No surprise fees, no inflated mileage, no 'after-hours' tricks. Same fair rate, every call.",
          },
          {
            icon: Truck,
            name: "Right Truck, Every Job",
            description:
              "Light-duty wreckers, flatbed rollbacks, GoJacks, and a heavy-duty wrecker — we own the equipment, so we don't pass costs through.",
          },
        ]}
      />

      <Testimonials
        id="reviews"
        tag="What Our Customers Say"
        title={
          <>
            Trusted by <span className="text-[var(--accent)] italic">Destin locals</span> & visitors
          </>
        }
        items={[
          {
            quote:
              "Broke down on 98 with my family in the car. They were there in under 25 minutes, professional the entire time, and charged exactly what they quoted. Saved our weekend.",
            name: "Mike R.",
            role: "Destin, FL",
          },
          {
            quote:
              "Needed an unauthorized vehicle removed from our parking lot at 11pm. Called Destin Towing and they handled the whole thing — paperwork, photos, gone within the hour. Will use them again.",
            name: "Sarah K.",
            role: "Property Manager",
          },
          {
            quote:
              "Had a flatbed move my lowered car after a flat. They knew exactly how to load it without scraping anything. Best tow experience I've ever had on the Emerald Coast.",
            name: "Jacob T.",
            role: "Miramar Beach",
          },
        ]}
      />

      <ContactSection
        id="contact"
        tag="Get In Touch"
        title={
          <>
            Need a tow or have a question?{" "}
            <span className="text-[var(--accent)] italic">We're here.</span>
          </>
        }
        sub="Call us 24/7 for emergency dispatch, or stop by the shop during business hours for anything non-urgent."
        phone={PHONE_DISPLAY}
        email="destintowing@gmail.com"
        address={ADDRESS}
        mapHref={MAP_LINK}
        hours={[
          { day: "Mon — Fri", time: "8:00 AM — 5:00 PM" },
          { day: "Saturday", time: "8:00 AM — 2:00 PM" },
          { day: "Sunday", time: "Dispatch Only" },
          { day: "Towing", time: "24 / 7" },
        ]}
      />

      <Footer
        brand="DESTIN TOWING"
        tagline="Local towing & recovery serving Destin and the Emerald Coast since 2014."
        columns={[
          {
            title: "Services",
            links: [
              { href: "#services", label: "Local Towing" },
              { href: "#services", label: "Flatbed Rollback" },
              { href: "#services", label: "Heavy Recovery" },
              { href: "#services", label: "Roadside Assist" },
            ],
          },
          {
            title: "Company",
            links: [
              { href: "#why", label: "Why Choose Us" },
              { href: "#reviews", label: "Reviews" },
              { href: "#contact", label: "Contact" },
            ],
          },
        ]}
        contact={{
          phone: PHONE_DISPLAY,
          email: "destintowing@gmail.com",
          address: ADDRESS,
        }}
      />
    </>
  );
}
