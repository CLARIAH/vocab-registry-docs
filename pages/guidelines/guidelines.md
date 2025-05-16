---
layout: default
title: guidelines-titleinyaml
permalink: /guidelines/
---

# SSH FAIR Vocabularies Guidelines

These guidelines aim to support the users of the SSH FAIR Vocabulary Registry, not only in using the registry, but also in finding their way in the world of creating, (re)using, publishing and working with vocabularies in a FAIR way.
The use cases for these guidelines are:

UC-01. As a researcher, curator or data manager, I want to have a clear definition of the terminology related to FAIR vocabularies
UC-02. As a researcher or curator, I want to create a new vocabulary
UC-03. As a researcher, I want to adapt existing vocabularies to use in my research
UC-04. As a researcher or curator, I want to publish a vocabulary in a FAIR way
UC-05. As a curator, researcher, or data manager, I want to add a new vocabulary to the registry
UC-06. As a curator, researcher, or data manager, I want to find or discover which vocabularies exist in a specific domain
UC-07. As a researcher, curator, or data manager, I want to align a vocabulary with other vocabularies
UC-08. As a researcher or data manager, I want to have clear guidelines about how to include information about the vocabularies I have used in the metadata or documentation as partof the research data deposited in a repository.

# Concepts
## Controlled vocabularies: an introduction
“Vocabularies” are, in a broader sense, “words” used to guarantee consistency in the description of documents or objects, or ways to group or categorize phenomena. For example, when you fill in a registration form and are asked to fill in your dietary preferences, you may get a list of values to choose from (vegetarian / non-vegetarian). This binary classification is a way to simplify the complexity that may pop up if you ask people to write their dietary preferences are without controlling their input. In general terms, controlled vocabularies are devices created for representing or organizing knowledge in a way that helps overcoming the fuzziness of natural language. For that reason, vocabularies are also called “knowledge organization systems” (KOS). These are some of the most common types of vocabularies:

![](file:////Users/lilianam/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image001.png)

(Zeng, 2008)

the Knowledge Organization Systems (KOS).

Knowledge Organization System (KOS) are conceptual structures used to categorize or describe, in a controlled manner, any document or concept. KOS include, for example, authority lists, taxonomies, thesauri, classification schemes, or abstract models such as ontologies (Zeng, 2008). (See also: https://www.isko.org/cyclo/kos).


![](file:////Users/lilianam/Library/Group%20Containers/UBF8T346G9.Office/TemporaryItems/msohtmlclip/clip_image002.png)

See if useful: (Hedden, 2019)

- Zeng, M.L. (2008). Knowledge Organization Systems (KOS). Knowledge Organization, 35, 160-182.
  here the bibtext to import: https://www.semanticscholar.org/paper/Knowledge-Organization-Systems-%28KOS%29-Zeng/be8b479541ab5ff54c1415d027f6126fc58ec048

### Application profile
"An Application Profile is a data specification to facilitate the data exchange in a well-defined application context. It re-uses concepts from one or more semantic data specifications, while adding more specificity, by identifying mandatory, recommended, and optional elements, addressing particular application needs, and providing recommendations for controlled vocabularies to be used"

### Authority list
Also called "Authority files" are lists (see: List) produced by an authoritative entity (e.g., a government or cultural heritage institution), which are meant to be reliable and "permanent". "authority data is a community convention and an information infrastructure" (Romein et al., 2023)

### Controlled vocabularies
See also: Vocabularies
- Codata (shared by Angelica): https://vocabs.ardc.edu.au/repository/api/lda/codata/codata-research-data-management-terminology/v001/resource?uri=https://terms.codata.org/rdmt/controlled-vocabulary

### Classification scheme
"In information sciences, classification schemes are used to organise information: You have a list of unequivocal terms and a rule prescribing, at least in a certain application context, to refer to phenomena of your domain of interest exclusively using the terms from your list (i.e. you have a controlled vocabulary), and you apply terms of your vocabulary to multiple pieces of your data and thus facilitate data profiling, and information retrieval." (Romein et al., 2023). As Romein et al., 2023 indicate all other types of knowledge organization system could express or be used as classification schemes.

### Gazetteer

### Knowledge graph
- See also: Ontology
- "The diversity of knowledge graph use extends from mostly attribute characterizations of instances (such as the Google Knowledge Graph) to mostly conceptual frameworks akin to upper-level ontologies. Attempts to provide a “precise” definition of KGs appear likely doomed to failure [...] Given the diversity of use, I also agree with the advice of Hogan _et al._ [[11]](https://www.mkbergman.com/2244/a-common-sense-view-of-knowledge-graphs/#kg11) who “strongly encourage researchers who wish to refer to ‘Knowledge Graphs’ as their object of study to rigorously define how they instantiate the term as appropriate to their investigation.” While we may not find a precise definition across all uses of knowledge graphs, we should strive to define how they are used in specific contexts." (Bergman, 2019)
- "We tend to define knowledge graphs as complete knowledge bases of concepts and instances and their attributes, coherently organized into types and a logical and computable graph, and written in RDF, [SKOS](https://en.wikipedia.org/wiki/Simple_Knowledge_Organization_System), and OWL 2." (Bergman, 2019)

### Knowledge Organization Systems (KOS)
See also: vocabularies; semantic artefact
“Knowledge organization system” (KOS) “has been adopted as a general term to encompass all schemes used to organise information and promote knowledge management, such as classification schemes, gazetteers, lexical databases, taxonomies, thesauri, and ontologies. These KOSs aim to underline the semantic structure of a domain” ()

![Diagram](/assets/images/Screenshot 2025-05-10 at 16.05.21.png)
(Blumauer, 2015)

### List
Lists "provide information about individuals (‘particulars’) of a certain kind" (Romein et al., 2023)

### Ontology
See also: Knowledge graph, Controlled vocabularies
There is not a single, agreed-upon definition of ontology. It is important to make explicit what are you referring to when you use this term. These are some of the most common definitions:

- "An **ontology** consists of a **_schema_** along with a **_taxonomy_**." (Kagle, 2025)
- "Some form of conceptual schema governs every knowledge structure used for knowledge representation (KR). In the semantic Web, such schemata are known as ontologies, since they attempt to capture the nature or being (Greek ὄντως, or ontós) of the knowledge domain at hand. Because the word ‘ontology’ is a bit intimidating, a better variant is the knowledge graph (because all semantic ontologies take the structural form of a graph). In general knowledge domains, we call such schemata upper ontologies." ()
- "An ontology is a ‘formal, explicit specification of a shared conceptionalization’ (Guarino et al. 2009) of a domain of the world. It describes what type of entities can exist in this domain and what relationships they may have. (On the distinction between ontologies and thesauri, cf. Kless et al. 2015.)" (Romein et al., 2023)
- "" (CoData, shared by Angelica: https://vocabs.ardc.edu.au/repository/api/lda/codata/codata-research-data-management-terminology/v001/resource?uri=https%3A%2F%2Fterms.codata.org%2Frdmt%2Fontology)

### URIs (dereference)
•What is URL Dereference?

•URL Dereferencing is the process of accessing the resource identified by a URL, typically through an HTTP request.
•🔍 How It Works:
•1. You have a URL → Example: http://dbpedia.org/resource/Albert_Einstein
•2. You access (dereference) it → A browser or tool makes an HTTP request

### Semantic artifact
"Semantic artefacts (SA) –a broad term to include ontologies, terminologies, taxonomies, thesauri, vocabularies, metadata schemas and semantic standards– are key for the description of data and for making data FAIR." (Wilson & Jonquet, 2024)
“In the context of this article, we define a semantic artefact as a machine-actionable formalisation (represented using appropriate formats and serialisations, including RDF and non-RDF standards) of a conceptualisation, enabling sharing and reuse by humans and machines.”

### Schema

### Scheme: see "Classification scheme"

### Semantic network

### Subject heading

### Taxonomy
- "In the context of knowledge systems, taxonomy is the hierarchical classification of **entities** of interest of an enterprise, organization or administration, used to classify documents, digital assets and other information. Taxonomies can cover virtually any type of physical or conceptual entities (products, processes, knowledge fields, human groups, etc.) at any level of granularity." ()

### Term list
See List.

### Thesaurus

In other cases, you may want to capture more nuances and represent knowledge in a more accurate way, that can be, for example, if you are a researcher studying gender. In that case, your list will need to include more options, or even show dependencies between them.

are everywhere, is often used to refer to “controlled vocabularies”. A controlled vocabulary can be a list of terms

“An ontology is defined as a model of a domain of knowledge, which comprises classes (sets of things), attributes (types of characteristics of things) and relationships between classes. According to this definition, an ontology is a somewhat generic model of a domain, and it does not include all of the individual members or instances of each class (such as the names of individual companies in the class called Company) nor the specific attributes of each attribute type (such as the address of each specific company for the attribute type called Address).

However, the W3C recommendation for ontologies, OWL (Web Ontology Language) includes the designation “individuals,” and ontology software tools, such as Protégé, support the inclusion of individuals and their specific attributes. Thus, it is easy to think that an ontology, by definition, includes all specific individuals. But just because OWL covers the recommendation for how to include instances of a class, and software supports the inclusion of instances of classes does not necessarily mean that the instances or individuals are actually a _component_ of an ontology. The ontology experts on this CDL conference panel confirmed that an ontology is the upper-level semantic model.

### Vocabularies
See also: Controlled vocabularies; Knowledge organization system

## FAIR concepts

# Standards for vocabularies

Guidelines for the Construction, Format, and Management of Monolingual Thesauri, Z39.19-1993 (NISO 1993)

(from Hedden, 2019)

Standards for thesaurus design and best practices

▪ ISO 25964-1

▪ ANSI/NISO Z39.19-2005 (R2010)

Standard for taxonomy or thesaurus modeling and interoperability

▪ SKOS (Simple Knowledge Organization System), RDF

![Diagram](/assets/images/Screenshot 2025-05-10 at 15.55.17.png)
(SKOS main components, from Fernandes, 2015)

Standards for ontology modeling and interoperability

▪ OWL, RDF, RDF Schema (RDFS)

Standards for interoperability (import/export formats)

▪ RDF serialization formats (RDF/XML, Turtle, N-Triples, N-Quads, JSON-LD, RDF/JSON, N3)

▪ CSV (comma separate values)

▪ ZThes

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


# How to publish vocabularies

- In a FAIR way in 10 steps: Cox SJD, Gonzalez-Beltran AN, Magagna B, Marinescu M-C (2021) Ten simple rules for making a vocabulary FAIR. PLoS Comput Biol 17(6): e1009041. https://doi.org/10.1371/journal.pcbi.1009041

Option1: If you are a researcher and have created a vocabulary as part of your research project (e.g., a code book, a list, a taxonomy, a thesaurus):

1)        Deposit your vocabulary together with your data at DANS or…

a.        You should make your vocabulary a separate file, preferably a csv, ttl…

2)        Register it at the SSH FAIR vocabulary registry as “new vocabulary”

3)         

 If your vocabulary is already available on the Web, you can suggest it using the button "Register a new vocabulary". This form will be received by the curators of the project, and you will be notified when the vocabulary is made available or, if not, why.
- If your vocabulary doesn't exist on the Web (e.g., you or your institution has created a vocabulary and you don't know how to publish it): you can get advise ... TODO

# How to reuse vocabularies
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