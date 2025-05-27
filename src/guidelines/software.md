---
title: Software
layout: base.njk
permalink: /guidelines/software/
---
<nav class="localNav">
  {% for item in guidelinesNav %}
    <a href="{{ item.url }}" class="{% if page.url == item.url %}active{% endif %}">
      {{ item.title }}
    </a>
  {% endfor %}
</nav>

# Software for vocabularies

When creating a vocabulary from scratch (see section), it may not be necessary to use dedicated software:
"At this stage, the software that you are using to collect and arrange the classes of your classification scheme does not really matter. You can use a word processor (taking advantage of different levels of headings and perhaps automatic numbering to reflect different levels of the classes hierarchy), or you may use a mindmapping or other diagramming software, or you can even use a spreadsheet software with one concept per row and columns for concept identifier, preferred and alternative labels, optionally “parent” conept, definition etc. Maybe you want to be able to collapse/expand parts of the hierarchy, but many word processors and mindmapping tools are capable of doing so, and spreadsheet tools usually can filter rows as well." (Romein et al., 2023)

These are types of software for vocabulary management (adapted from Hedden, 2019):

1.        Spreadsheet software (e.g., Excel)

2.        Dedicated thesaurus/ontology management software (e.g., Poolparty)

3.        Software, of which taxonomy management is a feature, module or component (e.g., Drupal)

4.        Generic “editors” (e.g., CLARIN CMDI component registry)

5.        Proprietary programs developed in-house in organizations

There is also software for publishing vocabularies (i.e., not for editing or managing the vocabulary, but only to publish it once it has been created). These are some examples:

6.        Dedicated vocabulary software: e.g., SKOSMOS

7.        Generic data publishing platform: e.g., Dataverse

In this section we compare the most common dedicated thesaurus/ontology management software (group 2), i.e., it’s made especially for authoring and editing vocabularies. We only chose free and open source software.

|   |   |   |   |   |
|---|---|---|---|---|
||Poolparty*|Protégé|TemaTres|VocBench|
|Link|[Poolparty thesaurus manager](https://www.poolparty.biz/poolparty-thesaurus-manager)||||
|First public release|2009|||2010|
|Last stable release (date, version)|||||
|Developer||Center for Biomedical Informatics Research at Stanford<br><br>University School of Medicine|Library and Information Science program of the<br><br>University of Buenos Aires / Diego Ferreyra|Artificial Intelligence Research group at University of Tor<br><br>Vergata, Rome|
|KOS types support|taxonomies, faceted taxonomies, thesauri, classification schemes, controlled metadata term lists, and terminologies|Dedicated ontology software; not so suitable for taxonomies/thesauri||OWL ontologies, SKOS(/XL) thesauri|
|Vocabulary standards|[ISO-25964-1](https://help.poolparty.biz/8.1/en/poolparty-reference-and-glossary/iso-25964-1-guidelines-for-thesaurus-management-software-and-how-poolparty-maps-to-them.html)||ISO thesaurus standards||
|Web Standards|SKOS, RDF, OWL, SPARQL||||
|Import/export formats|Excel, N3, N-Quads, Trix, Binary-RDF, MultiTes, RDF/XML,<br><br>Turtle, N-Triples, RDF/JSON, Trig, JSON-LD, and Zthes||||
|Installation|||On-Premise on a web server; Software as a Service, or On-Demand|on a web server or on a single desktop|
||||||

(*) Poolparty is not free and open source software, but we include it in this comparison bcause it has been chosen and [offered for free to cultural organizations by Rijksdienst voor het Cultureel Erfgoed (RCE)](https://www.cultureelerfgoed.nl/actueel/nieuws/2023/09/26/verbinden-van-collecties-met-het-termennetwerk) and Netwerk Digitaal Erfgoed (NDE).

Other important commercial options are: MondecaITM ([https://mondeca.com/intelligent-taxonomy-manager/](https://mondeca.com/intelligent-taxonomy-manager/)), MultiTes ([https://multites.net](https://multites.net))

- [ ] ToDo: Include the one recommended by Zundert et al.: https://hub.docker.com/r/skohub/skohub-vocabs-docker
- [ ] check: creation of ontologies: LODE and Graffoo