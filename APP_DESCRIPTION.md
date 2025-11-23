## Product Name: **Sales Buddy**

**Concept:** An intelligent AI sidekick that overlays your existing CRM to visualize data and predict outcomes.

### 1\. Hero Section (Above the fold)

**Headline:**

> "Meet Sales Buddy. The AI Co-Pilot Your Revenue Team Was Missing."

**Subheadline:**

> "Stop drowning in spreadsheets. Sales Buddy transforms your raw CRM data into clear, actionable visual insights. Predict trends, spot risks, and close deals faster with 98% accuracy."

**CTAs (Buttons):**

  * `[Start Free Trial]`
  * `[View Live Demo]`

**Hero Image description for AI generation:**

> *A sleek, dark-mode dashboard floating in isometric view. In the center, a friendly glowing orb (the 'Buddy' avatar) is projecting a holographic line chart showing revenue going up. The interface looks clean, minimal, and futuristic.*

-----

### 2\. Key Features (Grid Layout)

Here are the descriptions for the feature cards. You will use mock data to display the numbers mentioned below.

#### **Feature A: The Pipeline Pulse**

**Title:** "See Your Pipeline in 4K"
**Description:** "Visualize your sales funnel as a living, breathing flow. Identify exactly where leads are dropping off and where the money is stuck."

  * **Mock Element:** A flow chart or Sankey diagram showing leads moving from "New" to "Won".

#### **Feature B: Deal Confidence Score**

**Title:** "Know Which Deals Will Close"
**Description:** "Sales Buddy analyzes email sentiment, response times, and historical data to assign a 'Confidence Score' to every open deal. Stop chasing ghosts."

  * **Mock Element:** A list of companies with a colored badge:
      * *Acme Corp:* \<span style="color:green"\>94% (Likely)\</span\>
      * *Globex Inc:* \<span style="color:red"\>12% (At Risk)\</span\>

#### **Feature C: Smart Forecast**

**Title:** "Predict the Future, No Crystal Ball Required"
**Description:** "Run 'What-if' scenarios instantly. See how hiring two more reps or increasing lead flow by 20% impacts your Q4 revenue."

  * **Mock Element:** The interactive calculator (details below).

-----

### 3\. Interactive Section: "The Quota Crusher" Calculator

*Tohle je ta část pro demonstraci interaktivity.*

**Headline:** "Simulate Your Growth"
**Instruction:** "Adjust the sliders to see how Sales Buddy can optimize your output."

**UI Elements (Inputs):**

1.  **Label:** Monthly Leads | **Range:** 100 - 5000
2.  **Label:** Conversion Rate | **Range:** 1% - 20%
3.  **Label:** Average Deal Size | **Range:** $500 - $10,000

**Output Box (Dynamic Result):**

  * **"Projected Monthly Revenue":** `$ [Calculation Result]`
  * **"Potential with Sales Buddy (+15%)":** `<span style="color:#00ff88">$ [Higher Result]</span>`

-----

### 4\. JSON Data Structure (For the Code)

Zde jsou data v angličtině, která nakrmíš do webu, aby vypadal reálně.

```json
{
  "appStats": {
    "totalRevenue": "$1,240,500",
    "activeDeals": 45,
    "winRate": "24%"
  },
  "deals": [
    {
      "id": 101,
      "clientName": "Nebula Logistics",
      "value": 15000,
      "stage": "Negotiation",
      "confidenceScore": 88,
      "buddyInsight": "Decision maker viewed the pricing page 5 times today."
    },
    {
      "id": 102,
      "clientName": "Cyberdyne Systems",
      "value": 42000,
      "stage": "Proposal",
      "confidenceScore": 45,
      "buddyInsight": "Warning: No email response for 10 days."
    },
    {
      "id": 103,
      "clientName": "Wayne Enterprises",
      "value": 120000,
      "stage": "Discovery",
      "confidenceScore": 60,
      "buddyInsight": "Strong match with our enterprise tier."
    }
  ],
  "teamPerformance": [
    { "name": "Sarah J.", "sales": 85000, "target": 100 },
    { "name": "Mike R.", "sales": 62000, "target": 75 },
    { "name": "Jessica T.", "sales": 91000, "target": 95 }
  ]
}
```

-----

### 5\. Testimonials / Social Proof

**Headline:** "Sales Teams Love Their Buddy"

> "Before Sales Buddy, our forecasting was a guessing game. Now we hit our numbers with surgical precision."
> — **Alex Chen, VP of Sales @ TechFlow**

> "The 'Deal Confidence Score' saved us from wasting months on a dead-end client. It pays for itself."
> — **Maria G., Founder @ StartScale**

-----
