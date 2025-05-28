---
title: Concepts
layout: base.njk
permalink: /guidelines/concepts/
---
<nav class="localNav">
  {% for item in guidelinesNav %}<a href="{{ item.url }}" class="{% if page.url == item.url %}active{% endif %}">{{ item.title }}</a>{% endfor %}
</nav>

# Concepts
## Controlled vocabularies: an introduction
“Vocabularies” are, in a broader sense, “words” used to guarantee consistency in the description of documents or objects, or ways to group or categorize phenomena. For example, when you fill in a registration form and are asked to fill in your dietary preferences, you may get a list of values to choose from (vegetarian / non-vegetarian). This binary classification is a way to simplify the complexity that may pop up if you ask people to write their dietary preferences are without controlling their input. 

In general terms, controlled vocabularies are devices created for representing or organizing knowledge in a way that helps overcoming the fuzziness of natural language. For that reason, vocabularies are also called “knowledge organization systems” (KOS). These are some of the most common types of vocabularies:

![Diagram](/static/zeng-2008-kos-types.png)

We offer here a summary of basic terminology with pointers to useful definitions and sources.
### Application profile
"An Application Profile is a data specification to facilitate the data exchange in a well-defined application context. It re-uses concepts from one or more semantic data specifications, while adding more specificity, by identifying mandatory, recommended, and optional elements, addressing particular application needs, and providing recommendations for controlled vocabularies to be used"

### Authority list
Also called "Authority files" are lists (see: List) produced by an authoritative entity (e.g., a government or cultural heritage institution), which are meant to be reliable and "permanent". "authority data is a community convention and an information infrastructure" (Romein et al., 2023)

### Controlled vocabularies
See also: Vocabularies

### Classification scheme
"In information sciences, classification schemes are used to organise information: You have a list of unequivocal terms and a rule prescribing, at least in a certain application context, to refer to phenomena of your domain of interest exclusively using the terms from your list (i.e. you have a controlled vocabulary), and you apply terms of your vocabulary to multiple pieces of your data and thus facilitate data profiling, and information retrieval." (Romein et al., 2023). As Romein et al., 2023 indicate all other types of knowledge organization system could express or be used as classification schemes.

(Forthcoming)