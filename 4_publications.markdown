---
layout: page
title: Publications
nav_title: Publications
permalink: /publications/
description: "Publications, patents and research software of Jacques Fattaccioli and the MesoBioLab team: droplet microfluidics, functional emulsions, biophysics and immunology."
lead: "Peer-reviewed articles, preprints, book chapters, patents and open-source software. The list is generated from a single data file (_data/publications.yml)."
---
{%- assign pubs = site.data.publications -%}
{%- assign arts = pubs | where: "type", "article" -%}
{%- assign pre = pubs | where: "type", "preprint" -%}
{%- assign chap = pubs | where: "type", "chapter" -%}
{%- assign pat = pubs | where: "type", "patent" -%}
{%- assign feat = arts | where: "featured", true -%}

<nav class="toc" markdown="0">
  <a href="#selected">Selected</a>
  <a href="#preprints">Preprints ({{ pre.size }})</a>
  <a href="#articles">Articles ({{ arts.size }})</a>
  <a href="#chapters">Chapters ({{ chap.size }})</a>
  <a href="#patents">Patents ({{ pat.size }})</a>
  <a href="#software">Software</a>
</nav>

<p class="muted" markdown="0">Profiles: <a href="{{ site.profiles.orcid }}">ORCID</a> · * corresponding author</p>

<h2 id="selected">Selected publications</h2>
<ul class="pubs" markdown="0">
{%- for p in feat %}{% include publication.html pub=p %}{% endfor %}
</ul>

<h2 id="preprints">Preprints and articles under review</h2>
<ul class="pubs" markdown="0">
{%- for p in pre %}{% include publication.html pub=p %}{% endfor %}
</ul>

<h2 id="articles">Articles and proceedings</h2>
{%- assign n = arts.size -%}
{%- assign years = arts | group_by: "year" -%}
{%- for y in years %}
<h3 class="year">{{ y.name }}</h3>
<ul class="pubs" markdown="0">
{%- for p in y.items %}{% include publication.html pub=p label=n %}{% assign n = n | minus: 1 %}{% endfor %}
</ul>
{%- endfor %}

<h2 id="chapters">Book chapters and methods</h2>
{%- assign n = chap.size -%}
<ul class="pubs" markdown="0">
{%- for p in chap %}{% assign l = n | prepend: "B" %}{% include publication.html pub=p label=l %}{% assign n = n | minus: 1 %}{% endfor %}
</ul>

<h2 id="patents">Patents</h2>
{%- assign n = pat.size -%}
<ul class="pubs" markdown="0">
{%- for p in pat %}{% assign l = n | prepend: "P" %}{% include publication.html pub=p label=l %}{% assign n = n | minus: 1 %}{% endfor %}
</ul>

<h2 id="software">Research software and open tools</h2>

We develop open-source tools for **image analysis, microfluidics and data science** in direct support of our experiments, to make analyses quantitative and reproducible. Most code used in our publications is on the lab's [GitHub organisation](https://github.com/fattacciolilab).

**Background removal from time-lapse image stacks** (ImageJ plugin) — A. Novikova, D. Sima, L. Laïmouche, J. Fattaccioli (2024). [Zenodo DOI](https://doi.org/10.5281/zenodo.10626975) · [GitHub](https://github.com/FattaccioliLab/Background-Removal-Plugin---ImageJ)
