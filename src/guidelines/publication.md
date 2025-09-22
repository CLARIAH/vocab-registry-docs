---
title: Publication
layout: base.njk
permalink: /guidelines/publication/
---
<nav class="localNav">
  {% for item in guidelinesNav %}<a href="{{ item.url }}" class="{% if page.url == item.url %}active{% endif %}">{{ item.title }}</a>{% endfor %}
</nav>

# How to publish vocabularies

Note: the table below was made for discussion purposes by Menzo Windhouwer during the CLARIAH Summer School 2025. The procedures about how to publish vocabularies are under construction in the SSHOC-NL communities.

- Where?  -> Where is closely related to governance  
- Who? -> Who determines where the vocab goes: you as the benevolent dictator or …

<style>
  table.custom-table {
    border-collapse: collapse;
    width: 90%;
  }

  table.custom-table th, table.custom-table td {
    border: 1px solid #888;
    padding: 8px;
    text-align: left;
  }

  table.custom-table th {
    background-color: #f0f0f0;
  }
</style>

<table class="custom-table">
  <tr>
    <th>Option</th>
    <th>Example</th>
    <th>Namespace</th>
  </tr>
  <tr>
    <td>Your institute/university</td>
    <td>make it something that you will continue to work on together with your department/team/…</td>
    <td>https://huygens.knaw.nl/vegetables</td>
  </tr>
  <tr>
    <td>at your community</td>
    <td>examples PiCo, RDA SKG IF<br>core + extensions (concentric modelling)</td>
    <td>https://vegetables.vocab</td>
  </tr>
  <tr>
    <td>at your project</td>
    <td>but what will happen after the project phase?</td>
    <td>https://project.nl/vegetables</td>
  </tr>
  <tr>
    <td>at your infrastructure</td>
    <td>CLARIN, DARIAH, CLARIAH, ODISSEI</td>
    <td>https://vocabularies.clarin.eu/clavas/vegetables</td>
  </tr>
  <tr>
    <td>fallback to yourself</td>
    <td>e.g. git(hub | gitlab) pages<br>your own domain, e.g. PNV, ROAR</td>
    <td>https://johnsmith.github.io/vegetables</td>
  </tr>
  <tr>
    <td>at an archive? (discussion)</td>
    <td>DANS</td>
    <td></td>
  </tr>
  <tr>
    <td>at w3c?</td>
    <td>Community</td>
    <td></td>
  </tr>
</table>
