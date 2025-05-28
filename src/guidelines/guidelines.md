---
layout: base
title: Guidelines
permalink: /guidelines/
---
<nav class="localNav">
  {% for item in guidelinesNav %}<a href="{{ item.url }}" class="{% if page.url == item.url %}active{% endif %}">{{ item.title }}</a>{% endfor %}
</nav>

# SSH FAIR Vocabularies Guidelines

> **Note:** The construction of these guidelines is still work in progress.
{: .callout-note }

<strong>
These guidelines aim to support the users of the SSH FAIR Vocabulary Registry, not only in using the registry, but also in finding their way in the world of creating, (re)using, publishing and working with vocabularies in a FAIR way. 

- Creators: the initial content was created by Liliana Melgar, in collaboration with [Angelica Maineri](https://orcid.org/0000-0002-6978-5278)(ODISSEI) and [Ricarda Braukmann](https://orcid.org/0000-0001-6383-7148) (DANS)
- Contributing: we aim to continue building these guidelines collaboratively. If you would like to contribute with questions or writing content, please let us know: <a href="&#109;a&#105;l&#116;&#111;:&#115;&#116;&#114;&#117;&#99;&#116;&#117;&#114;&#101;&#100;&#45;&#100;&#97;&#116;&#97;&#64;&#100;&#105;&#46;&#104;&#117;&#99;&#46;&#107;&#110;&#97;&#119;&#46;&#110;&#108;">DI Structured Data Team</a> . 

The use cases for these guidelines are:

- **Concepts**. As a researcher, curator or data manager, I want to have a clear definition of the terminology related to FAIR vocabularies
- **Creation**. As a researcher or curator, I want to create a new vocabulary
- **Reuse**. As a researcher, I want to adapt existing vocabularies to use in my research
- **Publication**. As a researcher or curator, I want to publish a vocabulary in a FAIR way
- **Sharing**. As a curator, researcher, or data manager, I want to add a new vocabulary to a vocabulary registry
- **Finding**. As a curator, researcher, or data manager, I want to find or discover which vocabularies exist in a specific domain
- **Aligning**. As a researcher, curator, or data manager, I want to align a vocabulary with other vocabularies
- **Depositing**. As a researcher or data manager, I want to have clear guidelines about how to include information about the vocabularies I have used in the metadata or documentation as part of the research data deposited in a repository.

