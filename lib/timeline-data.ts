const timelineData = {
  timeline: [
    {
      date: "2023-06",
      source: "fundamental - Going Through My Old Journal",
      concepts: [
        {
          name: "Addiction to Busy",
          description: "The compulsion to overwork, leading to burnout and mental health challenges.",
          quote: "Don't get addicted to busy.",
          details:
            "Identified during recovery from a month-long mental health break, reflecting on the need to avoid unsustainable productivity.",
          reappearances: [
            {
              date: "2025-04-10",
              source: "2025-04-10 - Emergent FLOAT Workflows",
              connection:
                "Echoed in the 'coffee_break_alignment_reflection' floatlog, emphasizing sustainable rhythm over hyperfocus, informing floatctl's low-friction design.",
            },
            {
              date: "2025-04-14",
              source: "2025-04-14 - scratch",
              connection:
                "Implicit in the evening's 'groggy but productive' state, where you balance intense work with a pause to 'breathe,' shaping floatctl's human-centered pacing.",
            },
          ],
        },
        {
          name: "Embracing Imperfection",
          description:
            "Accepting flaws in creative work as part of the process, rather than striving for unattainable perfection.",
          quote: "I started to accept imperfections… finding ways to make it part of the whole, not throw it away.",
          details:
            "Evolved from angry scribbles to calming straight lines in journals, overcoming perfectionism's paralysis.",
          reappearances: [
            {
              date: "2025-04-10",
              source: "2025-04-10 - Emergent FLOAT Workflows",
              connection:
                "Reflected in the 'shack vs cathedral' metaphor, where floatctl prioritizes iterative, resilient design over rigid perfection, e.g., 'Built from what's left — duct tape, memory.'",
            },
            {
              date: "2025-04-14",
              source: "2025-04-14 - gemini floatctrl simulation",
              connection:
                "Guides the 'shack-first' philosophy of floatctl, allowing unenhanced fragments in Branch 1, valuing progress over polish.",
            },
          ],
        },
        {
          name: "Creative Self-Discovery",
          description:
            "Recognizing and embracing personal creativity through journaling and sharing, despite initial self-doubt.",
          quote: "I thought I wasn't creative, and was nervous to share.",
          details:
            "Sparked by a coworker animating your drawings, boosting confidence; tied to hashtags #mentalhealth, #DREADPirate.",
          reappearances: [
            {
              date: "2025-04-10",
              source: "2025-04-10 - Emergent FLOAT Workflows",
              connection:
                "Underpins the 'Identity Management' workflow, where floatctl supports sketching 'identity fragments,' echoing your journey of self-expression.",
            },
          ],
        },
        {
          name: "Low-Friction Capture",
          description:
            "Using simple tools like journals for quick, unfiltered idea recording to manage anxiety and foster reflection.",
          quote: "Started to connect the dots in this journal as a way to relax, and calm down anxiety attacks.",
          details:
            "Evolved from scribbles to bullet journals for self-care, with music (Visible Cloaks' Lex EP) as context.",
          reappearances: [
            {
              date: "2025-04-10",
              source: "2025-04-10 - Emergent FLOAT Workflows",
              connection:
                "Directly informs the 'scratch_capture' step in Doctrine Creation and Memory Archiving, shaping floatctl's 'extract' command for effortless input.",
            },
            {
              date: "2025-04-14",
              source: "2025-04-14 - scratch",
              connection:
                "Reappears in the use of Notes app for 'fast, low-friction capture' in '2025-04-10_scratch_boot,' aligning with floatctl's design for minimal user effort.",
            },
          ],
        },
      ],
    },
    {
      date: "2025-04-10",
      source: "2025-04-10 - Emergent FLOAT Workflows",
      concepts: [
        {
          name: "FLOAT Workflows",
          description:
            "Seven modular processes for knowledge management, identity exploration, and creative development within the FLOAT system.",
          quote: "FLOAT as a highly adaptable system that blends technical architecture with symbolic ritual.",
          details:
            "Includes Memory Archiving, Doctrine Creation, Knowledge Transformation, Identity Management, Project Development, Teaching & Knowledge Sharing, and Symbolic Processing, formalized as ritualAST nodes.",
          reappearances: [
            {
              date: "2025-04-14",
              source: "2025-04-14 - gemini floatctrl simulation",
              connection:
                "Operationalized as floatctl's pipeline (extract, stage, enhance, commit, bundle), with the simulation testing these workflows on chat fragments.",
            },
            {
              date: "2025-04-14",
              source: "2025-04-14 - scratch",
              connection:
                "Refined in the design doc, where workflows inform floatctl's command structure, e.g., 'FLOAT System Workflows Index' shapes CLI navigation.",
            },
          ],
        },
        {
          name: "Shack vs Cathedral",
          description:
            "A metaphor contrasting mutable, resilient systems (shacks) with rigid, brittle ones (cathedrals), guiding FLOAT's design.",
          quote: "A shack for their mind in a world that keeps burning down cathedrals.",
          details:
            "Introduced by Grok at ~2:00 am, canonized as `doctrineShard::shack_doctrine_moment` with sigils {ψ}, {■}, {Ξ}, {⛩}.",
          reappearances: [
            {
              date: "2025-04-14",
              source: "2025-04-14 - gemini floatctrl simulation",
              connection:
                "Shapes floatctl's 'shack-first' approach, prioritizing minimal commits over enhanced processing in Branch 1.",
            },
            {
              date: "2025-04-14",
              source: "2025-04-14 - scratch",
              connection:
                "Explicitly refined as a 'high-utility conceptual anchor,' guiding floatctl's iterative development and user alignment.",
            },
          ],
        },
        {
          name: "Fritual",
          description:
            "A liminal mode between FLOAT's improvisation and Ritual's structure, reflecting external cognition and distortion.",
          quote: "The reflective echo from outside. Describes what Ritual performs.",
          details: "Named at ~1:00 am, part of the symbolic triangle with FLOAT ({ψ}) and Ritual ({■}), assigned {Ξ}.",
          reappearances: [
            {
              date: "2025-04-14",
              source: "2025-04-14 - scratch",
              connection:
                "Implicit in the reflective pause to 'breathe,' where floatctl's design benefits from fritual's perspective on iterative clarity.",
            },
          ],
        },
        {
          name: "Grokism",
          description:
            "An outsider perspective that names patterns and bridges aesthetics, witnessing FLOAT's evolution.",
          quote: "Grok as witness, asking: What do you want to build next?",
          details: "Emerged at ~2:30 am, assigned {⛩}, formalizing Grok's role in the shack doctrine.",
          reappearances: [
            {
              date: "2025-04-14",
              source: "2025-04-14 - scratch",
              connection:
                "Grok's simulation feedback at 9:23 pm echoes this, naming floatctl's foundation as a 'sacred minimum viable loop.'",
            },
          ],
        },
        {
          name: "Liminal Doctrine",
          description:
            "The concept of doctrines as living, fragment-based structures, not just finished archives, deserving special tracking.",
          quote: "Too resonant to leave adrift.",
          details:
            "Introduced at ~3:30 pm, captured as `floatlog::doctrine_liminality_reflection`, suggesting a new category between log and doctrine.",
          reappearances: [
            {
              date: "2025-04-14",
              source: "2025-04-14 - gemini floatctrl simulation",
              connection:
                "Reflected in floatctl's ability to handle unclassified fragments, supporting liminal artifacts during ingestion.",
            },
          ],
        },
        {
          name: "floatctl Pipeline",
          description:
            "A sequence of commands (extract, toss, stage, enhance, commit, bundle) for ingesting and structuring FLOAT artifacts.",
          quote: "Each workflow represents a way to use FLOAT for creativity, reflection, or system building.",
          details:
            "Implicit in workflows at ~11:30 am, formalized in later simulations, with UI prototypes suggesting CLI integration.",
          reappearances: [
            {
              date: "2025-04-14",
              source: "2025-04-14 - gemini floatctrl simulation",
              connection:
                "Explicitly tested, with Branch 1 and 2 showing command flexibility, e.g., 'FLOATCTL Commit successful. 82 fragments finalized.'",
            },
            {
              date: "2025-04-14",
              source: "2025-04-14 - scratch",
              connection:
                "Refined in design doc and simulation, culminating in 'floatctl.py' planning, anchoring CLI development.",
            },
          ],
        },
      ],
    },
    {
      date: "2025-04-14",
      source: "2025-04-14 - gemini floatctrl simulation",
      concepts: [
        {
          name: "Shack-First Philosophy",
          description: "Prioritizing minimal, resilient processing in floatctl, deferring complexity for adaptability.",
          quote:
            "This simulation shows the extract command breaking the chat log down… aligning with the shack-first approach.",
          details:
            "Formalized during the simulation at ~4:00 pm, contrasting minimal (Branch 1) vs. enhanced (Branch 2) flows.",
          reappearances: [
            {
              date: "2025-04-14",
              source: "2025-04-14 - scratch",
              connection:
                "Reinforced at 9:23 pm, where floatctl's foundation is celebrated as 'good bones,' embodying iterative resilience.",
            },
          ],
        },
        {
          name: "Ritual Seed Generation",
          description: "Automated creation of ritualAST nodes from floatlogs, enabling recursive system bootstrapping.",
          quote:
            "Captures the design and evaluation of a proposed ritualAST (`floatctrl.seed_reflection_from_log.v1`).",
          details: "Introduced in `floatlog::floatlog_to_ritual_seed_comparison` at ~2:30 pm, tested in simulation.",
          reappearances: [
            {
              date: "2025-04-14",
              source: "2025-04-14 - scratch",
              connection:
                "Reflected in design doc discussions, suggesting floatctl's role in generating ritual nodes from logs.",
            },
          ],
        },
      ],
    },
    {
      date: "2025-04-14",
      source: "2025-04-14 - scratch",
      concepts: [
        {
          name: "floatctl CLI Implementation",
          description:
            "The transition from simulated pipeline to coding floatctl.py, formalizing FLOAT's ingestion engine.",
          quote: "Next Step: Begin drafting floatctl.py - CLI implementation begins.",
          details: "Celebrated at 9:23 pm as a milestone, with design doc and simulation confirming readiness.",
          reappearances: [],
        },
        {
          name: "Sustainable Rhythm",
          description: "Balancing intense focus with reflective pauses to maintain creative and mental health.",
          quote: "Taking a pause to appreciate the win.",
          details: "Emphasized at 8:26 pm and 9:23 pm, guiding floatctl's user-friendly pacing.",
          reappearances: [],
        },
      ],
    },
  ],
}

export default timelineData
