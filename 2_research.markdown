---
layout: page
title: Research
permalink: /research/
description: "Research of Jacques Fattaccioli and the MesoBioLab team: functional droplets and particles, microfluidic platforms for quantitative cell biology, microfluidics for plant and environmental biology."
lead: "We build microfluidic platforms and engineered soft-matter objects to answer quantitative questions in biology, from single molecules to whole organisms."
---

Our work sits at the interface of **microfluidics, soft matter, biophysics and immunology**, with a strong emphasis on droplet-based systems. We generate, manipulate and functionalise **droplets, interfaces, particles and cells** to create controlled microscale environments, and combine microfabrication, interface chemistry, optical microscopy and quantitative image analysis to turn them into robust tools for biological questions.

<figure class="band" markdown="0">
  <img src="{{ '/assets/images/cropped-kalthoum_phagocytosis.webp' | relative_url }}" alt="Macrophages (actin in red, nuclei in blue) internalising green fluorescent emulsion droplets" loading="lazy">
  <figcaption>Macrophages phagocytosing functionalised emulsion droplets (green).</figcaption>
</figure>

<nav class="toc" markdown="0">
{%- for axis in site.data.research %}<a href="#{{ axis.id }}">{{ axis.title }}</a>{% endfor -%}
</nav>

{% for axis in site.data.research %}
<section class="axis" id="{{ axis.id }}" markdown="0">
  <p class="eyebrow">Axis {{ forloop.index }}</p>
  <h2>{{ axis.title }}</h2>
  <p class="axis-short">{{ axis.short }}</p>
  {%- for t in axis.topics %}
  <article class="topic{% unless t.image %} no-img{% endunless %}" id="{{ t.id }}">
    {%- if t.image %}<img class="topic-img" src="{{ t.image | relative_url }}" alt="" loading="lazy">{% endif %}
    <div class="topic-body">
      {%- if t.emerging %}<p class="eyebrow">Emerging direction</p>{% endif %}
      <h3>{{ t.title }}</h3>
      {%- if t.question %}<p class="question">{{ t.question }}</p>{% endif %}
      {{ t.text | markdownify }}
      {%- if t.highlight %}
      <p class="highlight"><span class="label">Key result</span> <a href="{{ t.highlight.url }}">{{ t.highlight.text }}</a></p>
      {%- endif %}
      {%- if t.funding %}
      {%- assign cur = t.funding | where_exp: "f", "f.status != 'past'" -%}
      {%- assign past = t.funding | where: "status", "past" -%}
      {%- if cur.size > 0 %}
      <p class="funding"><span class="label">Funding</span>
      {%- for f in cur %} <a href="{{ f.url }}">{{ f.name }}</a>{% if f.role %} {{ f.role }}{% endif %}{% unless forloop.last %};{% endunless %}{% endfor %}</p>
      {%- endif %}
      {%- if past.size > 0 %}
      <p class="funding muted"><span class="label">Past funding</span>
      {%- for f in past %} <a href="{{ f.url }}">{{ f.name }}</a>{% if f.role %} {{ f.role }}{% endif %}{% unless forloop.last %};{% endunless %}{% endfor %}</p>
      {%- endif %}
      {%- endif %}
      {%- assign rel = site.data.publications | where_exp: "p", "p.tags contains t.id" -%}
      {%- if rel.size > 0 %}
      <details class="related">
        <summary>Related publications ({{ rel.size }})</summary>
        <ul class="pubs">{% for p in rel %}{% include publication.html pub=p %}{% endfor %}</ul>
      </details>
      {%- endif %}
    </div>
  </article>
  {%- endfor %}
</section>
{% endfor %}

<div class="callout" markdown="1">
## Translation: Quintessence Biotech

<img src="{{ '/assets/images/quintessence_biotech_logo.jpeg' | relative_url }}" alt="Quintessence Biotech logo" class="logo-inline" width="72" height="72">
Part of our work is translated through **Quintessence Biotech**, a start-up co-founded from the laboratory's patent portfolio, which develops microfluidic and physico-chemical solutions for **cell and gene therapies**. This keeps a direct feedback loop between fundamental research, technology development and biomedical applications. [More on LinkedIn](https://www.linkedin.com/company/quintessence-biotech/).
</div>
