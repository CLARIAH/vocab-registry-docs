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

![Diagram](/static/Screenshot%202025-05-10%20at%2016.05.21.png)
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