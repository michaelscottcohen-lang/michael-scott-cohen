export type InsightSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets?: readonly string[];
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  published: string;
  readTime: string;
  lede: string;
  sections: readonly InsightSection[];
};

export const insights: readonly Insight[] = [
  {
    slug: "merch-is-media",
    title: "Merch Is Media—When People Actually Want It",
    description: "Michael Scott Cohen’s framework for treating branded merchandise as media: earn attention, create desire, and measure what happens after distribution.",
    eyebrow: "Branded merchandise",
    published: "2026-09-07",
    readTime: "5 min read",
    lede: "Putting a logo on an object does not make it media. The object has to earn attention, survive distribution, and create a useful behavior after it reaches someone’s hands.",
    sections: [
      {
        heading: "The media test",
        paragraphs: [
          "Michael’s operating thesis is simple: branded merchandise belongs in the media conversation when it does a job that another channel cannot. It can create a physical memory, signal membership, start a conversation, or keep a brand present long after an impression disappears.",
          "That standard is higher than producing something attractive. The useful question is not whether the item looks good in a presentation. It is whether the intended person will choose to keep, use, wear, display, or share it.",
        ],
      },
      {
        heading: "Desired beats distributed",
        paragraphs: [
          "Most programs optimize for how many units leave a warehouse. That is a logistics metric, not an audience outcome. A product can be distributed perfectly and still become waste.",
          "The strongest programs begin with desire. They make a clear choice about audience, moment, scarcity, usefulness, cultural relevance, and quality. The logo is part of the design rather than the entire idea.",
        ],
        bullets: [
          "Who specifically should want this?",
          "What should they do or feel after receiving it?",
          "Why is a physical object the right medium for that job?",
          "What makes it worth keeping when the campaign is over?",
        ],
      },
      {
        heading: "Design the behavior before the object",
        paragraphs: [
          "Start with the behavior the brand wants. A client gift, employee-recognition program, product launch, retail collaboration, and community drop are not interchangeable. Each has a different audience, distribution system, creative standard, and definition of success.",
          "Only after that behavior is clear should the team choose the object. Reversing the order—selecting a product and then inventing a reason for it—creates the familiar pile of generic merchandise nobody requested.",
        ],
      },
      {
        heading: "Measure beyond the shipment",
        paragraphs: [
          "The measurement model should match the job. Useful signals can include redemption, repeat use, social sharing, event participation, employee retention, sales conversations, earned content, or direct response. Not every program needs a perfect attribution model, but every program needs an observable outcome.",
          "Merch is media when it is planned with the discipline of media: a defined audience, a creative idea, a distribution strategy, a desired behavior, and a way to learn what happened next.",
        ],
      },
    ],
  },
  {
    slug: "branded-merchandise-strategy",
    title: "A Better Branded-Merchandise Strategy Starts With Five Questions",
    description: "A practical decision framework for building branded-merchandise programs around audience, behavior, context, distribution, and proof.",
    eyebrow: "Operator framework",
    published: "2026-09-07",
    readTime: "5 min read",
    lede: "The product is not the strategy. Before choosing a hoodie, bottle, kit, or collectible, decide what the program must accomplish and why merchandise is the right medium.",
    sections: [
      {
        heading: "1. Who is this for?",
        paragraphs: [
          "“Customers” or “employees” is not specific enough. A new hire, top-performing salesperson, loyal customer, retail buyer, creator, and event attendee bring different expectations. The narrower the audience, the easier it is to make something that feels intentional.",
        ],
      },
      {
        heading: "2. What behavior should change?",
        paragraphs: [
          "Decide whether the program should create trial, recognition, belonging, conversation, retention, advocacy, or a sales opening. If the desired behavior cannot be stated plainly, the team is not ready to select products.",
        ],
      },
      {
        heading: "3. What is the moment?",
        paragraphs: [
          "Context changes value. Something handed out to everyone at a crowded event works differently from a limited product sent after a meaningful milestone. Timing, presentation, scarcity, and the story around the object shape how it is received.",
        ],
      },
      {
        heading: "4. How will it reach people?",
        paragraphs: [
          "Distribution is part of the creative. Address collection, inventory, kitting, personalization, international shipping, event operations, and follow-up can make or break the experience. A concept is not finished until the delivery system is credible.",
        ],
      },
      {
        heading: "5. What would prove it worked?",
        paragraphs: [
          "Choose proof before launch. It may be redemption, qualified meetings, usage, posts, employee participation, customer retention, or feedback from a small test group. Shipment count and cost per unit are inputs; they do not prove impact.",
          "The best program is not the one with the most products. It is the one where the audience, behavior, object, distribution, and measurement reinforce one another.",
        ],
      },
    ],
  },
  {
    slug: "building-and-selling-companies",
    title: "What Building and Selling Companies Actually Teaches You",
    description: "Operator lessons from building across branded merchandise, consumer products, and applied AI—without confusing company outcomes with personal wealth.",
    eyebrow: "Founder operations",
    published: "2026-09-07",
    readTime: "6 min read",
    lede: "An acquisition is an outcome, not a complete explanation. The useful lessons live in the decisions, constraints, relationships, and mistakes that produced it.",
    sections: [
      {
        heading: "Outcomes are receipts, not instructions",
        paragraphs: [
          "Michael has built across branded merchandise and consumer products and now works with applied AI systems. Public company outcomes establish experience, but they do not tell another founder what to do next.",
          "A company valuation is not personal income or net worth. An acquisition announcement does not reveal every economic term. Responsible operator writing separates the public receipt from the private or unknowable details and focuses on the mechanisms readers can use.",
        ],
      },
      {
        heading: "The market can make you look smarter than you are",
        paragraphs: [
          "Strong demand can hide weak process. Capital can postpone hard choices. A talented team can compensate for unclear leadership. When conditions change, the business reveals which advantages were durable and which were temporary.",
          "That is why operators need counterfactuals: What would still work if demand slowed, a major customer left, financing disappeared, or the founder could no longer personally close every important deal?",
        ],
      },
      {
        heading: "Build systems before you need the exit",
        paragraphs: [
          "A buyer evaluates more than growth. Customer concentration, clean reporting, leadership depth, documented processes, legal hygiene, recurring economics, and a credible plan all affect confidence. These disciplines improve the company even if no transaction happens.",
        ],
        bullets: [
          "Know which customers, people, and processes create concentration risk.",
          "Make financial and operating reporting decision-useful, not ceremonial.",
          "Document what currently exists only in the founder’s head.",
          "Treat relationships and reputation as operating assets that compound over time.",
        ],
      },
      {
        heading: "The lesson is usually in the constraint",
        paragraphs: [
          "The best founder stories do not end at the headline. They explain what was scarce, what tradeoff was made, what evidence changed the decision, and what the operator would do differently now.",
          "That is the standard for this library: fewer victory laps, more detail about how the work actually moved.",
        ],
      },
    ],
  },
  {
    slug: "ai-workflows-for-operators",
    title: "Practical AI for Operators Starts With the Workflow",
    description: "A practical framework for choosing AI workflows, setting human review, defining proof, and killing automations that do not create reliable business value.",
    eyebrow: "Applied AI",
    published: "2026-09-07",
    readTime: "6 min read",
    lede: "Most companies do not need another AI demonstration. They need one repetitive, consequential workflow to become faster, more reliable, or easier to manage.",
    sections: [
      {
        heading: "Start with recurring work",
        paragraphs: [
          "Good candidates are visible and frequent: a report rebuilt every week, leads that sit without follow-up, inbox triage, document classification, quality checks, research preparation, or handoffs that repeatedly lose context.",
          "Do not start with the most impressive use case. Start where the current process is understood well enough to measure and the downside of a mistake can be controlled.",
        ],
      },
      {
        heading: "Define the workflow before the model",
        paragraphs: [
          "Map the trigger, inputs, permissions, decisions, outputs, owner, exception path, and record of what happened. A model is one component inside that system. Without an operating design, even a strong model becomes an unreliable demo.",
        ],
        bullets: [
          "What starts the workflow?",
          "Which systems and data may it access?",
          "What can it decide, draft, or change?",
          "Where is human approval mandatory?",
          "How will errors be detected and reversed?",
        ],
      },
      {
        heading: "Put judgment at the risk boundary",
        paragraphs: [
          "Internal research, classification, summarization, and draft preparation are different from sending a message, changing a record, approving payment, or publishing content. Human review belongs before the consequential action, not after damage is already possible.",
          "Permissions should be narrow, identities explicit, and logs readable. A workflow that cannot explain which source it used or what it changed is not ready for important work.",
        ],
      },
      {
        heading: "Use proof and kill criteria",
        paragraphs: [
          "Measure the baseline first: time, error rate, backlog, response time, conversion, or another business outcome. Then run a bounded pilot and compare. Usage is not proof if the workflow creates more review burden than it removes.",
          "Kill or redesign the automation when it repeatedly needs rescue, cannot achieve an agreed accuracy threshold, creates new security or relationship risk, or costs more attention than the original process. Practical AI earns trust through observable work—not claims about intelligence.",
        ],
      },
    ],
  },
] as const;

export function getInsight(slug: string) {
  return insights.find((item) => item.slug === slug);
}
