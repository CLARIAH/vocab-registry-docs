---
title: Example workflow 1
layout: base.njk
permalink: /guidelines/example-workflow-1/
---
<nav class="localNav">
  {% for item in guidelinesNav %}
    <a href="{{ item.url }}" class="{% if page.url == item.url %}active{% endif %}">
      {{ item.title }}
    </a>
  {% endfor %}
</nav>

# Example workflow 1

Your content here...