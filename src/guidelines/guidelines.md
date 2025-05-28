---
layout: base
title: Guidelines
permalink: /guidelines/
---
<nav class="localNav">
  {% for item in guidelinesNav %}<a href="{{ item.url }}" class="{% if page.url == item.url %}active{% endif %}">{{ item.title }}</a>{% endfor %}
</nav>

# SSH FAIR Vocabularies Guidelines
test May28

These guidelines aim to support the users of the SSH FAIR Vocabulary Registry, not only in using the registry, but also in finding their way in the world of creating, (re)using, publishing and working with vocabularies in a FAIR way. The construction of these guidelines is work in progress.
The initial content was created by Liliana Melgar, in collaboration with Angelica and Ricarda (DANS), but we aim that they continue to be built collaboratively. If you would like to contribute to these guidelines, please contact us via the Github contact page. 

The use cases for these guidelines are:

**Concepts**. As a researcher, curator or data manager, I want to have a clear definition of the terminology related to FAIR vocabularies
**Creation**. As a researcher or curator, I want to create a new vocabulary
**Reuse**. As a researcher, I want to adapt existing vocabularies to use in my research
**Publication**. As a researcher or curator, I want to publish a vocabulary in a FAIR way
**Sharing**. As a curator, researcher, or data manager, I want to add a new vocabulary to a vocabulary registry
**Finding**. As a curator, researcher, or data manager, I want to find or discover which vocabularies exist in a specific domain
**Aligning**. As a researcher, curator, or data manager, I want to align a vocabulary with other vocabularies
**Depositing**. As a researcher or data manager, I want to have clear guidelines about how to include information about the vocabularies I have used in the metadata or documentation as partof the research data deposited in a repository.