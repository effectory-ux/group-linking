# Group linking

Alle prototypes van de group-linking-flow: een vorige survey koppelen aan de nieuwe
structuur, zodat scores over de tijd vergeleken kunnen worden.

| Pagina | Wat het laat zien |
|---|---|
| [effectory.html](https://effectory-ux.github.io/group-linking/effectory.html) | de structuur van Effectory zelf |
| [deep.html](https://effectory-ux.github.io/group-linking/deep.html) | een diepe boom, als stresstest |

Tokens, componenten, iconen en illustraties komen rechtstreeks van het
[Engage design system](https://effectory-ux.github.io/Engage-Design-system-/), dus deze
repo bevat alleen de pagina's zelf. Een wijziging in het design system is hier meteen
zichtbaar. Keerzijde: verhuist die site, dan moeten deze links mee.

Toegevoegd aan de galerij op https://effectory-ux.github.io/prototypes/

## Prototype toolbar

Beide pagina's dragen de gedeelde [prototype toolbar](https://github.com/effectory-ux/prototype-toolbar)
(`toolbar/`, een kopie van de gepubliceerde release; `toolbar/update.sh` ververst hem): wissel tussen de Effectory-structuur en de diepe boom, en deel de
live link. Lokaal staat hij altijd aan. Live alleen via de collega-link
https://effectory-ux.github.io/group-linking/effectory.html?gl-9k4p-toolbar-active — zonder
`?gl-9k4p-toolbar-active` is het de schone versie voor testers. Wat de toolbar toont staat in
`proto-config.js`; de toolbar zelf verandert alleen via `toolbar/` (zie `CLAUDE.md`).
