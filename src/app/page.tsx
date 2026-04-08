"use client";

import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Gallery } from "@/components/sections/Gallery";
import { WhyChooseSplit } from "@/components/sections/WhyChooseSplit";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import {
  Truck,
  ShieldAlert,
  Anchor,
  MoveHorizontal,
  Warehouse,
  Wrench,
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
          { href: "#work", label: "Our Work" },
          { href: "#why", label: "Why Us" },
          { href: "#contact", label: "Contact" },
        ]}
        cta={{ href: PHONE_TEL, label: "Call (850) 737-1738" }}
      />

      <Hero
        tag="Destin's Reliable Towing & Roadside Service"
        title={
          <>
            <span className="block">Fast Response.</span>
            <span className="block">
              <span className="text-[var(--accent-light)]">Fair Prices.</span>
            </span>
            <span className="block">Always Available.</span>
          </>
        }
        sub="Destin Towing has the trucks, the equipment, and the experience to handle any call on the Emerald Coast — from a simple jump start to a major heavy-duty recovery. 24/7 dispatch, local crews, no surprises."
        primaryCta={{ href: PHONE_TEL, label: "Call (850) 737-1738" }}
        secondaryCta={{ href: "#work", label: "See Our Work" }}
        bgImage="/hero-bg.jpg"
        stats={[
          { value: "24/7", label: "Dispatch Available" },
          { value: "10+", label: "Years on the Coast" },
          { value: "5★", label: "Local Reviews" },
        ]}
      />

      <ServicesGrid
        id="services"
        tag="What We Do"
        title="Full Towing & Recovery for Destin & the Emerald Coast"
        sub="One call, one crew. From everyday tows to heavy-duty recoveries, we handle every job in-house with the right truck for the job."
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

      <Gallery
        id="work"
        tag="Our Work"
        title={
          <>
            On the road across <span className="text-[var(--accent-light)]">the Emerald Coast</span>
          </>
        }
        sub="Every job is different — here are some of the recoveries, tows, and roadside calls our team has handled recently."
        images={[
          { src: "/work-1.jpg", alt: "Destin Towing recovery job" },
          { src: "/work-2.jpg", alt: "Flatbed transport" },
          { src: "/work-3.jpg", alt: "Heavy-duty wrecker on scene" },
          { src: "/work-4.jpg", alt: "Roadside assistance" },
          { src: "/work-5.jpg", alt: "Local towing in Destin" },
        ]}
      />

      <WhyChooseSplit
        id="why"
        tag="Why Destin Calls Us First"
        title={
          <>
            Fast. <span className="text-[var(--accent-light)]">Reliable.</span> Fair prices —{" "}
            <span className="text-[var(--accent-light)]">every time.</span>
          </>
        }
        sub="We're a local Destin business that's been serving the Emerald Coast for over a decade. No shady upcharges, no out-of-town dispatchers, no excuses."
        image="/shop.jpg"
        imageAlt="Destin Towing shop"
        badge={{ big: "10+", small: "Years Serving Destin" }}
        items={[
          {
            title: "Local Crews",
            body: "Our drivers live here. They know every road from Sandestin to Fort Walton — and they get to you fast.",
          },
          {
            title: "Honest Pricing",
            body: "Quoted up front. No surprise fees, no inflated mileage, no 'after-hours' tricks. Same fair rate, every call.",
          },
          {
            title: "Right Truck, Every Job",
            body: "Light-duty wreckers, flatbed rollbacks, GoJacks, and a heavy-duty wrecker — we own the equipment, so we don't pass costs through.",
          },
          {
            title: "Available 24/7",
            body: "Dispatch never sleeps. Whether it's noon on Tuesday or 3am on a holiday weekend, we'll pick up and roll out.",
          },
        ]}
      />

      <Testimonials
        id="reviews"
        tag="What Our Customers Say"
        title={
          <>
            Trusted by <span className="text-[var(--accent-light)]">Destin locals</span> &amp; visitors alike
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

      <CtaBanner
        title="Need a tow right now?"
        sub="Our dispatch line is open 24/7. Call now and we'll roll a truck out within minutes."
        cta={{ href: PHONE_TEL, label: "Call (850) 737-1738" }}
      />

      <ContactSection
        id="contact"
        tag="Get In Touch"
        title={
          <>
            Need a tow or have a question?{" "}
            <span className="text-[var(--accent-light)] italic">We&apos;re here.</span>
          </>
        }
        sub="Call us 24/7 for emergency dispatch, or fill out the form and we'll get back to you with a free quote."
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
              { href: "#work", label: "Our Work" },
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
