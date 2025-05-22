---
title: Creation
layout: base.njk
permalink: /guidelines/creation/
---
<nav class="local-nav">
  {% for item in guidelinesNav %}
    <a href="{{ item.url }}">{{ item.title }}</a>
  {% endfor %}
</nav>


# How to create vocabularies

The way vocabularies are created depends on the context. In research contexts, the method also determines how a vocabulary is created: it can be the result of a qualitative coding process, or it can be created a priory and be applied in a top-down way. (CITE METHODS BOOK)

Step1: Determine requirements (based on (Fraunhofer-Institut für Software und Systemtechnik -ISST-, Berlin & Semantic Interoperability Centre Europe -SEMIC.EU-, 2009))
n this first step, several basic questions have to be answered:
- What is the purpose and objective of the taxonomy?
- What is the scope of the taxonomy?
- What is the intended use of the taxonomy?
- Who are the user groups of the taxonomy, e.g. experts and/or lay users?
- Who will maintain the taxonomy?

Step2: Approaches to collect the terms
- (inspired by  Ernst et al. 2023 as cited in Romein et al., 2023 and ...)
  “deductive”, “
  pragmatic‑explorative”,
  “inductive
  ‑computational”

- Consider the "warrant" of the terms for inclusion (paraphrased from Taxobook2, p.88)
    - Literary warrant: how terms are used in the literature, keep track of the literary warrant for each term. You should be able to return to the source from which you collected the term.
    - User warrant: Is reflected by the use of terms, any evidence that a term is in significant use within its field.

Step3: Normalization
" normalisation and critical review of terminology:
• Lemmatisation (singular/plural, orthography, etc.)
• The composition or decomposition of words
• Often choosing modern terminology helps avoiding challenges with spelling‑changes over time;
but depending on your field you may need to defend this choice11• On the other hand, historic terminology often carries biases and misrepresentations that need to be addressed" (Romein et al., 2023)

Common dylemas:
- Be aware of super‑concepts that could in effect be collections of multiple concepts rather than concepts in themselves: those you would need to break down into multiple categories or replace them with a concept that actually does reflect their common denominator to ensure clarity of your structure." (Romein et al., 2023)

Tips:
- "what kind of objects you are aiming to classify: Ideally all the terms in a scheme should classify the same “ontological” kind of thing"
- "Consider the relevant usage scenarios: is the scheme meant to support aggregating and quantitative analyses, or is it about search suggestions to lay people coming across your website." (Romein et al, 2023)
- "Obviously, there is a tension between, on the one hand, the scheme being a “living” thing that you keep developing and expanding, and, on the other hand, the need to have a settled vocabulary to refer to unambiguously. Thus we (as authors) applaud the possibility of adding information to classification schemes (progressive understanding one might call it), however, we also consider it good practice to leave the original structure intact and make changes only in new versions or releases." (Romein et al, 2023)

Recommended resources:
Hedden, H. (2022). The accidental taxonomist. Information Today. http://site.ebrary.com/id/10492814
Romein, C. A., Wagner, A., & Zundert, J. J. van. (2023). Building and Deploying a Classification Schema using Open Standards and Technology. Journal for Digital Legal History, 2(1), Article 1. https://doi.org/10.21825/dlh.85751
