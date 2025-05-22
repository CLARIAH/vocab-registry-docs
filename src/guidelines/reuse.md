---
title: Reuse
layout: base.njk
permalink: /guidelines/reuse/
---
<nav class="local-nav">
  {% for item in guidelinesNav %}
    <a href="{{ item.url }}">{{ item.title }}</a>
  {% endfor %}
</nav>

# How to reuse vocabularies

> **Note:** This is a note callout.
{: .callout-note }

> **Warning:** Be careful here.
{: .callout-warning }


Before creating a vocabulary from scratch it is important to check if there are vocabularies that already exist and could be entirely or partially used. Scenarios of reuse include:

1) Using a "value" vocabulary as a source of values for your metadata
    1) Entirely
    2) Partially
2) Using an existing schema or ontology
    1) Entirely
        - you may want to use an existing schema or ontology fully in cases such as these:
            - you are trying to replicate a research project
            - you want to add more instances or observations. For example: if you would have a research question such as this one: "which smells can be found in paintings of the Louvre museum?" you could stand of the shoulders of previous research by reusing the Odeuropa ontology, which was designed with the aim to support the analysis of a similar research question but collecting instances from another museum. If an ontology is fully reused, the obvious advantages are:
                - Saving time and effort
                - Contributing to expand a research domain with more observations
                - Comparison between findings
        - Practical steps:
            - If the ontology is offered as machine-readable, you can download it an import it into a compatible editor (see section on Software), from the example above:
                - Go to the SSH vocabulary registry (see section) and search if there is an existing schema/ontology that would suit your research question
                - Download it, e.g.,:
                - Import it to, for example, Proteg'e
                - There you can add instances or observations right away
    2) Partially -> adapting an existing schema to your own purposes is possible. The resulting adapted schema is called "application profile"