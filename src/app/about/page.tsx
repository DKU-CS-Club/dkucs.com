import React from "react";
import PageHeader from "@/components/page-header";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Team from "@/components/team";

export const metadata: Metadata = {
  title: "About",
};




export default function AboutPage() {
  return (
    <><Team /></>
  );
}
