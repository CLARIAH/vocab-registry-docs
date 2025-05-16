# ssh-vocabulary-docs
# SSH Vocab Registry Documentation

This repository includes all the documentation and references to the different components (sub-projects) of the SSH FAIR vocabulary registry (LINK) developed in the context of SSHOC.nl (LINK).
# Context
The SSH Vocab Registry (LINK) is built in the context of the "Social Sciences and Humanities Open Cloud" project (SSHOC.nl), which develops state of the art infrastructure for social science and humanities research. This registry is a one-stop reference service for vocabularies that are relevant to researchers, developers, data managers or curators in the humanities and social sciences (SSH) communities.

The SSH Vocabulary Registry is made of different "websites" and repositories:

![alt text](https://github.com/lilimelgar/fair-vocabs-project/blob/main/assets/vocabulary-architecture-diagram.png?raw=true)

- The vocabulary metadata editor:
    - is a service for adding descriptive metadata to the vocabularies
    - the code and documentation are in a Github repository: https://github.com/CLARIAH/vocab-registry-editor
- The vocabulary workers:
    - python-based applications that perform each of the tasks that build the registry, i.e.,: downloading/caching the vocabulary, summarizing, storing in a SPARQL store (if it is an RDF-based vocabulary), uploading to Skosmos (if it is a SKOS vocabulary), and documenting.
    - the code and documentation are in a Github repository: https://github.com/CLARIAH/vocab-workers
- The interface
    - this is the browser/interface of the vocabulary registry, which has two components:
        - a) A python layer for the API
        - b) A public interface built in ReactJs' Java Script library
    - the code and documentation are in a Github repository: https://github.com/CLARIAH/vocab-registry)
- The vocabulary recommender
    - the code and documentation are in a Github repository: (currently in development in a private repository)
- The vocabulary registry documentation (this repository)

# Credits

# Target users

# Contents

# Status
At the time of writing this (summer 2024) this documentation and set up is in ongoing development.

# Usage
- This repository contains read-only files in plain text. There is no code to install or execute.

# Change history
- t.b.d.

# Roadmap and support
- A list of forthcoming content is here:
- If you have tips, suggestions, question, please submit them via Github issues.

# Contributing
- This documentation is manually curated, if you would like to contribute or review (some) of the contents, please contact:

# License


# References
(Source: Meijer & Windhower, 2024)

# Acknowledgements