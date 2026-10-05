---
layout: page
title: Join the team
nav_title: Positions
permalink: /positions/
description: "Open positions, internships, PhD and postdoctoral opportunities (including MSCA fellowships) in Jacques Fattaccioli's MesoBioLab team at the Institut Pierre-Gilles de Gennes, Paris."
lead: "Internships, PhD and postdoctoral projects at the crossroads of microfluidics, soft matter and biology. Spontaneous applications are welcome at all levels."
---

## Open now

### Postdoctoral fellowships (MSCA)

We host Marie Skłodowska-Curie Postdoctoral Fellowships through the [Sorbonne Université MSCA programme](https://www.sorbonne-universite.fr/en/news/msca-postdoctoral-fellowships-2026) and help candidates build their proposal. Two projects are proposed:

- [Unraveling the mechanisms of microbial lipolysis in fat malabsorption via spatiotemporal microfluidics and single-cell omics](https://www.sorbonne-universite.fr/sites/default/files/media/2026-02/FATTACCIOLI_SU_S1.pdf), with T. Le Roy and F. Carrière.
- [Spatio-temporal quantification of intraphagosomal lipid lipolysis via advanced bio-imaging](https://www.sorbonne-universite.fr/sites/default/files/media/2026-02/FATTACCIOLI_SU_S2.pdf).

Other projects are possible if they fit our expertise: contact us early, ideally several months before the call deadline.

### Internships (M1, M2, engineering schools)

We host interns every year on projects drawn from our [current research](/research/): droplet functionalisation and biophysics of phagocytosis, microfluidic device design and trapping arrays, microalgae selection, and quantitative image analysis in Python. M2 internships can lead to a PhD when funding allows.

### PhD and engineer positions

PhD positions open through doctoral school calls (ED388, PSL, Sorbonne Université), ANR projects and industrial CIFRE partnerships. Funded positions are announced here; if none is listed, you can still write to discuss upcoming calls.

## Working in the team

The team is based at the [Institut Pierre-Gilles de Gennes](https://www.institut-pgg.fr) in the heart of Paris (5th arrondissement), a building dedicated to microfluidics with its own clean room and technology platform, shared with physics, chemistry and biology groups from ENS, ESPCI, Institut Curie and Chimie ParisTech. We belong to the [CPCV laboratory](https://cpcv-beta.vercel.app/) of the ENS chemistry department.

Projects are interdisciplinary by design: many PhD theses are co-supervised with biologists or physicists (Institut Cochin, Institut Curie, ESPCI…), and students learn microfabrication, interface chemistry, fluorescence microscopy and quantitative image analysis along the way. The team is also connected to the [Microfluidics and Miniaturization Master](https://microfluidics-master.fr/), which I direct.

{%- assign placed = site.data.members.alumni | where_exp: "m", "m.now" -%}
{%- if placed.size > 0 %}

## Where our alumni went

<ul class="alumni" markdown="0">
{%- for m in placed %}
  <li><strong>{{ m.name }}</strong> ({{ m.role }}, {{ m.years }}) → {{ m.now }}</li>
{%- endfor %}
</ul>
{%- endif %}

## How to apply

Send a short CV, a few lines on what interests you in our work, and (optionally) links to publications, code or previous projects to <span class="email">{{ site.author.email_display }}</span>. For a first conversation, you can also [book a 30-minute meeting]({{ site.profiles.calendly }}){: data-track="out-calendly"}. See also the [team page](/members/).
