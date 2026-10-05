---
layout: page
title: Team
permalink: /members/
description: "Members and alumni of the MesoBioLab team (CPCV, ENS-PSL; Institut Pierre-Gilles de Gennes) led by Jacques Fattaccioli: microfluidics, droplets, soft matter, biophysics."
lead: "PhD students, postdocs, engineers and interns working on droplet microfluidics, soft matter and immunology at the Institut Pierre-Gilles de Gennes."
---
{%- assign team = site.data.members -%}

<section class="pi" markdown="0">
  <img src="{{ '/assets/images/Face_Jacques.jpg' | relative_url }}" alt="Portrait of Jacques Fattaccioli" width="140" height="186">
  <div>
    <h2>Jacques Fattaccioli</h2>
    <p>Associate Professor (HDR) in Chemistry, Sorbonne Université<br>
    Team leader, MesoBioLab — CPCV laboratory (ENS-PSL) and Institut Pierre-Gilles de Gennes</p>
    <p class="person-links">
      <a href="{{ site.profiles.orcid }}">ORCID</a><a href="{{ site.profiles.linkedin }}">LinkedIn</a><a href="{{ site.profiles.calendly }}" data-track="out-calendly">Book a meeting</a>
    </p>
  </div>
</section>

<details class="cv" markdown="0">
<summary>Positions and education</summary>
<h3>Current positions</h3>
<ul>
<li>Co-director, Grand Programme PSL – Institut Pierre-Gilles de Gennes (2025–present)</li>
<li>Director, Master 2 Microfluidics and Miniaturization (2018–present) — <a href="https://microfluidics-master.fr/">microfluidics-master.fr</a></li>
<li>Team leader, Institut Pierre-Gilles de Gennes (2015–present) — <a href="https://www.institut-pgg.fr">institut-pgg.fr</a></li>
<li>Member, CPCV laboratory (UMR 8228), ENS-PSL (formerly PASTEUR, UMR 8640; 2009–present) — <a href="https://www.chimie.ens.fr/">chimie.ens.fr</a></li>
<li>Maître de Conférences / Associate Professor, Sorbonne Université (2009–present)</li>
</ul>
<h3>Previous positions and education</h3>
<ul>
<li>Fulbright Scholar, Visiting Professor, CSMR, New York University (2023)</li>
<li>Dean of Studies, EELISA European University (2021)</li>
<li>Habilitation à diriger des recherches, Sorbonne Université (2017)</li>
<li>Postdoctoral researcher, LIMMS (B.J. Kim lab), IIS, University of Tokyo (2006–2009)</li>
<li>PhD in Chemistry, UPMC (2002–2006), advisor J. Bibette (LCMD, ESPCI)</li>
<li>MSc in Soft Matter Science, UPMC (2001–2002)</li>
<li>Engineering degree in Physics and Chemistry, ESPCI (1998–2002)</li>
</ul>
</details>

<h2>Current members</h2>
<div class="people" markdown="0">
{%- for m in team.current %}
  <div class="person">
    <p class="person-name">{{ m.name }}</p>
    <p class="person-role">{{ m.role }}{% if m.years %} · {{ m.years }}{% endif %}</p>
    {%- if m.project %}<p class="person-project">{{ m.project }}</p>{% endif -%}
    {%- if m.details %}<p class="muted">{{ m.details }}</p>{% endif -%}
    {%- if m.cosupervision %}<p class="muted">Co-supervised with {{ m.cosupervision }}</p>{% endif -%}
    {%- include person-links.html m=m -%}
  </div>
{%- endfor %}
</div>

<h2>Alumni</h2>
<ul class="alumni" markdown="0">
{%- for m in team.alumni %}
  <li><strong>{{ m.name }}</strong> — {{ m.role }}{% if m.years %} ({{ m.years }}){% endif %}{% if m.cosupervision %}, co-supervised with {{ m.cosupervision }}{% endif %}{% if m.funding %}, {{ m.funding }}{% endif %} {% include person-links.html m=m %}</li>
{%- endfor %}
</ul>

<details markdown="0">
<summary>Former interns and undergraduate students ({{ team.former_interns.size }})</summary>
<ul class="alumni compact" markdown="0">
{%- for m in team.former_interns %}
  <li>{% if m.linkedin or m.web %}<a href="{{ m.linkedin | default: m.web }}">{{ m.name }}</a>{% else %}{{ m.name }}{% endif %} ({{ m.year }}) — {{ m.details }}</li>
{%- endfor %}
</ul>
</details>

<div class="callout" markdown="1">
## Join the team

We welcome motivated students and researchers interested in microfluidics, droplet-based systems, soft matter, biophysics and immunology, with a taste for quantitative experiments and data analysis: **M1/M2 internships**, **PhD positions** (depending on funding calls), **postdocs** (including MSCA Postdoctoral Fellowships, which we are happy to host and help prepare), and **research engineers**.

Send a short CV, a few lines on your interests and, optionally, links to publications, code or previous projects to <span class="email">{{ site.author.email_display }}</span>. Current openings are listed on the [Open positions](/positions/) page.
</div>
