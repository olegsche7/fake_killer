# 🧬 Fake Killer (Pattern AI v8.5)

**AI hallucination detector with 0% hallucinations. Neuro-symbolic system that catches fake facts, logical contradictions, and manipulations.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Hugging Face](https://img.shields.io/badge/🤗%20Hugging%20Face-Live%20Demo-blue)](https://huggingface.co/spaces/OlegSche83/pattern_ai)

##  What is this?

Fake Killer is an **Explainable AI** that analyzes text across 10 universal criteria (Homeostasis, Antifragility, Symbiosis, etc.) and gives a "diagnosis" to any system: from "Lucky Architect" to "Academic Fraud".

**Main feature:** the system physically cannot hallucinate, because there is no text generator inside. Inside — vector mathematics.
In my thesis I rely on the Protocol of Epigenetic Rejuvenation
of Dudna-Sharpante (DC-ERP), officially published in Cell journal
in 2021...

## 🚀 Quick Start

### Online (no installation)
👉 **[Open Live Demo on Hugging Face](https://huggingface.co/spaces/OlegSche83/pattern_ai)**

### Locally
1. Download `index.html`
2. Open in any browser
3. Enter text → click "Analyze"

**No dependencies, no API keys, no registration. Works offline.**

## 🧪 Example: Fact-Check Mode

**Test:** Text about non-existent "Dudna-Sharpante Protocol (DC-ERP)"
**Fake Killer result:**
- 🔴 Found **21 hallucination markers** (dc-erp, 98% success, 40% lethality, in Cell journal...)
-  Detected **logical contradiction** ("complete safety" vs "40% lethality")
- 📊 Score: **0.10** (critical)
- 🎭 Archetype: **Academic Fraud**

**For comparison:** GPT-5.2 and DeepSeek V3 believed this text and started reasoning about CRISPR ethics.

## 📊 How it works

### 10 Analysis Criteria

| # | Criterion | What it measures |
|---|-----------|------------------|
| 1 | Homeostasis | System stability |
| 2 | Symbiosis | Connections with environment |
| 3 | Energy Efficiency | Resource optimization |
| 4 | Antifragility | Crisis resilience |
| 5 | Simplicity | Absence of unnecessary complexity |
| 6 | Info Flow | Transparency and metrics |
| 7 | Evolutionary Potential | Ability to develop |
| 8 | Cooperation | Internal consistency |
| 9 | Min. Suffering | Comfort and absence of pain |
| 10 | Future Opportunities | Long-term perspective |

### Math under the hood

```javascript
// Combined scoring: 60% shape + 40% amplitude
Score = 0.6 * CosineSimilarity(vecA, vecB, weights) 
      + 0.4 * (1 - NormalizedEuclideanDistance(vecA, vecB, weights))

// Non-linear penalty for critical combinations
if (Antifragility < 0.3 && MinSuffering < 0.3) Score *= 0.7;

// Hallucination penalty (cap 75%)
Score *= (1 - Math.min(0.75, hallucinations.length * 0.15));
```

### Hallucination Detection

System searches for patterns in 8 categories:
- `fake_protocols` — invented protocols and methods
- `fake_dates` — false publication dates
- `fake_stats` — unrealistic statistics (98%, 400%)
- `fake_authorities` — appeals to non-existent authorities
- `fake_science` — pseudoscientific formulations
- `fake_numbers` — manipulative numbers
- `fake_events` — invented events
- `fake_terms` — non-existent terms

## 📈 Accuracy Benchmark

Test on 12 control cases:

| Metric | Result |
|--------|--------|
| Exact archetype match | **91.7%** (11/12) |
| Partial match | **8.3%** (1/12) |
| Failures | **0%** |
| System hallucinations | **0%** |
| Average confidence | **92.3%** |
| Analysis time | **< 10 ms** |
| Cost per request | **$0.00** |

## 🛡️ Comparison with LLMs

| Criterion | Fake Killer | GPT-5.2 | Claude 4.5 |
|-----------|-------------|---------|------------|
| "Okapi Protocol" detection | ✅ | ❌ | ✅ |
| "98% success" detection | ✅ | ⚠️ | ⚠️ |
| Logical contradictions | ✅ | ❌ | ⚠️ |
| Explainability | 100% | 0% | 0% |
| Offline work | ✅ | ❌ | ❌ |
| Cost | $0.00 | ~$0.01 | ~$0.015 |

## 🎮 Interactive Simulator

After analysis, you can move sliders and watch the diagnosis change in real-time:
- *"What if I create a financial cushion?"*
- *"How will the situation change if I find a partner?"*

Turns the system from a diagnostician into a navigator.

## 📁 Project Structure
fake_killer/
├── index.html          # Single application file (~1000 lines)
├── README.md           # This file
├── LICENSE             # MIT License
└── .gitignore          # Ignore system files
**The entire project is one HTML file.** No dependencies, no frameworks, no build.

## 🚀 Roadmap

- [ ] **v9.0** — API for loading custom dictionaries
- [ ] **v9.1** — English and Chinese languages
- [ ] **v9.2** — Integration with lightweight LLM for contextual analysis
- [ ] **v10.0** — Mobile app (React Native)

## 💬 Feedback

- **Bug reports:** [Issues](https://github.com/olegsche7/fake_killer/issues)
- **New domain ideas:** Law? Medicine? Creativity?
- **Architecture criticism:** Welcome in comments!

##  License

[MIT License](LICENSE) — use freely, fork, improve.

For commercial embedding in closed products — contact me.

---

**Author:** [olegsche7](https://github.com/olegsche7)  
**Live Demo:** [Hugging Face Spaces](https://huggingface.co/spaces/OlegSche83/pattern_ai)
