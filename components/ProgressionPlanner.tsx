"use client";

import { useMemo, useState } from "react";

type Bottleneck = "dungeon" | "materials" | "forge" | "build" | "codes";
type Style = "attacker" | "forge-master" | "survivor";

const bottleneckOptions: { id: Bottleneck; label: string; description: string }[] = [
  {
    id: "dungeon",
    label: "Dungeon runs feel too hard",
    description: "You need a safer prep path before pushing deeper."
  },
  {
    id: "materials",
    label: "I do not know what to farm",
    description: "You need a material goal before spending time grinding."
  },
  {
    id: "forge",
    label: "I am unsure what to forge next",
    description: "You need to connect materials to a weapon or build problem."
  },
  {
    id: "build",
    label: "My build direction is unclear",
    description: "You need to choose attacker, forge master, or survivor logic."
  },
  {
    id: "codes",
    label: "I am checking for rerolls or codes",
    description: "You need the trust-first code status before spending rerolls."
  }
];

const styleOptions: { id: Style; label: string; description: string }[] = [
  {
    id: "attacker",
    label: "Attacker",
    description: "Best when fights take too long or clears feel slow."
  },
  {
    id: "forge-master",
    label: "Forge master",
    description: "Best when crafting choices and material planning block progress."
  },
  {
    id: "survivor",
    label: "Survivor",
    description: "Best when dungeon pressure ends runs before you can stabilize."
  }
];

function getPlan(bottleneck: Bottleneck, style: Style) {
  const styleLabel = styleOptions.find((item) => item.id === style)?.label ?? "Build";

  if (bottleneck === "codes") {
    return {
      title: "Check code status first, then plan without fake rerolls",
      primary: "/codes/",
      primaryLabel: "Open Codes",
      steps: [
        "Check whether BloxDungeon has a verified active code before trusting copied lists.",
        "If there is no verified code, do not plan around free rerolls.",
        `Use the ${styleLabel} direction as your working build until better evidence appears.`
      ],
      links: [
        { href: "/codes/", label: "Codes" },
        { href: "/race-tier-list/", label: "Race Tier List" },
        { href: "/skill-tree/", label: "Skill Tree" }
      ]
    };
  }

  if (bottleneck === "materials") {
    return {
      title: "Farm with a material goal",
      primary: "/materials/",
      primaryLabel: "Open Materials",
      steps: [
        "Start by separating crystalized ore goals from rare material goals.",
        "Avoid chasing exact drop rates until a source-backed table exists.",
        "Move to the forge only after the material goal matches your next weapon or build need."
      ],
      links: [
        { href: "/materials/", label: "Materials" },
        { href: "/forge/", label: "Forge" },
        { href: "/weapons/", label: "Weapons" }
      ]
    };
  }

  if (bottleneck === "forge") {
    return {
      title: "Use the forge to solve one clear problem",
      primary: "/forge/",
      primaryLabel: "Open Forge",
      steps: [
        "Decide whether you need damage, survival, or a different weapon feel.",
        "Check material planning before spending ore.",
        `Pair the forge decision with the ${styleLabel} path instead of following a random best recipe claim.`
      ],
      links: [
        { href: "/forge/", label: "Forge" },
        { href: "/materials/", label: "Materials" },
        { href: "/skill-tree/", label: "Skill Tree" }
      ]
    };
  }

  if (bottleneck === "build") {
    return {
      title: `Anchor the run around ${styleLabel}`,
      primary: "/skill-tree/",
      primaryLabel: "Open Skill Tree",
      steps: [
        "Choose one build direction before comparing runes, weapons, or attributes.",
        "Treat exact skill values as pending until source-backed evidence appears.",
        "Use dungeons as the test: if the path does not solve the run problem, revise it."
      ],
      links: [
        { href: "/skill-tree/", label: "Skill Tree" },
        { href: "/attributes/", label: "Attributes" },
        { href: "/runes/", label: "Runes" }
      ]
    };
  }

  return {
    title: "Prepare for the dungeon before chasing numbers",
    primary: "/dungeons/",
    primaryLabel: "Open Dungeons",
    steps: [
      "Identify the pressure: slow clears, low survivability, or unclear material goals.",
      "Pick the next material or forge step based on that pressure.",
      `Use the ${styleLabel} path as the build lens for your next run.`
    ],
    links: [
      { href: "/dungeons/", label: "Dungeons" },
      { href: "/materials/", label: "Materials" },
      { href: "/forge/", label: "Forge" }
    ]
  };
}

export default function ProgressionPlanner() {
  const [bottleneck, setBottleneck] = useState<Bottleneck>("dungeon");
  const [style, setStyle] = useState<Style>("attacker");
  const plan = useMemo(() => getPlan(bottleneck, style), [bottleneck, style]);

  return (
    <div className="planner">
      <div className="planner-panel">
        <h2>1. What is blocking your next run?</h2>
        <div className="planner-options">
          {bottleneckOptions.map((option) => (
            <button
              className={option.id === bottleneck ? "planner-option active" : "planner-option"}
              key={option.id}
              onClick={() => setBottleneck(option.id)}
              type="button"
            >
              <strong>{option.label}</strong>
              <span>{option.description}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="planner-panel">
        <h2>2. Which build direction feels closest?</h2>
        <div className="planner-options three">
          {styleOptions.map((option) => (
            <button
              className={option.id === style ? "planner-option active" : "planner-option"}
              key={option.id}
              onClick={() => setStyle(option.id)}
              type="button"
            >
              <strong>{option.label}</strong>
              <span>{option.description}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="planner-result">
        <p className="eyebrow">Suggested Next Step</p>
        <h2>{plan.title}</h2>
        <ol>
          {plan.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <div className="button-row">
          <a className="button primary" href={plan.primary}>{plan.primaryLabel}</a>
          {plan.links.map((link) => (
            <a className="button" href={link.href} key={link.href}>{link.label}</a>
          ))}
        </div>
      </div>
    </div>
  );
}
