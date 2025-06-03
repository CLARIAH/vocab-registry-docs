---
title: Software
layout: base.njk
permalink: /guidelines/software/
---
<nav class="localNav">
  {% for item in guidelinesNav %}<a href="{{ item.url }}" class="{% if page.url == item.url %}active{% endif %}">{{ item.title }}</a>{% endfor %}
</nav>

# Software for vocabularies

> **Note:** The construction of these guidelines is still work in progress.
{: .callout-note }

> **Note:** The citations in this page have their correspondent reference in the [Zotero library online](https://www.zotero.org/groups/5970044/fair_vocabularies_learn/library) which contains our recommended readings.
{: .callout-note }


We collect here links to reference pages for vocabulary-related software, and a selection of tips.

- When creating a vocabulary from scratch (see "[Creation](https://registry.vocabs.clariah.nl/guidelines/creation/)"), it may not be necessary to use dedicated software:
	- "At this stage, the software that you are using to collect and arrange the classes of your classification scheme does not really matter. You can use a word processor (taking advantage of different levels of headings and perhaps automatic numbering to reflect different levels of the classes hierarchy), or you may use a mindmapping or other diagramming software, or you can even use a spreadsheet software with one concept per row and columns for concept identifier, preferred and alternative labels, optionally “parent” concept, definition etc. Maybe you want to be able to collapse/expand parts of the hierarchy, but many word processors and mindmapping tools are capable of doing so, and spreadsheet tools usually can filter rows as well." (Romein et al., 2023)

- This is a selection of important packages that can be useful when creating/editing and/or publishing vocabularies:

## Free and open source

- [Skohub](https://skohub.io/)
	- For management and publication of SKOS vocabularies
	- Uses git-based workflows
	- A very detailed guide on how to use it is in (Romein et al, 2023)
- [Protégé](https://protege.stanford.edu/)
	- Dedicated ontology software (full support for OWL 2 ontologies); not ready to use with taxonomies/thesauri in SKOS (needs a plugin)
		- The [SKOSed](https://code.google.com/archive/p/skoseditor/) plug-in for the Protégé ontology editor lets you edit thesauri represented in SKOS. Both SKOSed and Protégé are open source.
	- Installation: there is a desktop version (all features) and a [web-based version](https://webprotege.stanford.edu/) (some features)
- [TemaTres vocabulary server](https://github.com/tematres/TemaTres-Vocabulary-Server)
	- Free and open source
	- Developed at the Library and Information Science program of the University of Buenos Aires
	- Compliant with thesaurus standards
	- Installation: On-Premise on a web server; Software as a Service, or On-Demand
- [VocBench](https://vocbench.uniroma2.it/)
	- Supports: OWL ontologies, SKOS(/XL) thesauri
	- Installation: on a web server or on a single desktop
- [iQvoc](https://iqvoc.net/) 
	- open source tool for managing vocabularies that can import and export SKOS.
- [Skosmos](https://skosmos.org/):
	- Open source web-based SKOS browser and publishing tool
	- For publication only (not for creating or editing)
- [Onto.me](https://ontome.net/)
	- Especially for ontologies
	- It is open source but it is not clear if you can run it yourself.

## Commercial tools

- [Poolparty thesaurus manager](https://www.poolparty.biz/poolparty-thesaurus-manager)
	- First public release: 2009
	- KOS types support: taxonomies, faceted taxonomies, thesauri, classification schemes, controlled metadata term lists, and terminologies
	- Standards support: [ISO-25964-1](https://help.poolparty.biz/8.1/en/poolparty-reference-and-glossary/iso-25964-1-guidelines-for-thesaurus-management-software-and-how-poolparty-maps-to-them.html)
	- Web standards: SKOS, RDF, OWL, SPARQL
	- Import/export formats: Excel, N3, N-Quads, Trix, Binary-RDF, MultiTes, RDF/XML, Turtle, N-Triples, RDF/JSON, Trig, JSON-LD, and Zthes
	- Note: The PoolParty Semantic Suite is a commercial product; it offers free trial options. Cultural heritage institutions in The Netherlands can consult the [Rijksdienst voor het Cultureel Erfgoed](https://www.cultureelerfgoed.nl/actueel/nieuws/2023/09/26/verbinden-van-collecties-met-het-termennetwerk) or [NDE](https://netwerkdigitaalerfgoed.nl/) for using the RCE instance.
- Other important commercial options are: 
	- MondecaITM ([https://mondeca.com/intelligent-taxonomy-manager/](https://mondeca.com/intelligent-taxonomy-manager/))
	- MultiTes ([https://multites.net](https://multites.net))

## Software list compilations
- The Bartoc vocabulary registry has curated a list of recommended software: [https://gbv.github.io/bartoc-vocabulary-software/](https://gbv.github.io/bartoc-vocabulary-software/)