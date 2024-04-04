"use client";
import { builder, Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Hero from "./components/Hero/hero";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});


Builder.registerComponent(Hero, {
  name: "Hero",
  inputs: [
    {
      name: "title", type : 'string', defaultValue: 'Hello World'
    },
    {
      name : "color", type : 'color', defaultValue: 'blue'
    }
  ],
})