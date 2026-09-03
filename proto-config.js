// proto-config.js — what THIS prototype puts in the shared prototype toolbar
// (toolbar/prototype-bar.js, a git subtree of effectory-ux/prototype-toolbar).
// Host-specific by design; the toolbar itself knows nothing about group linking.
window.PROTO_TOOLBAR = {
  key: "gl-9k4p",              // the ?<key>-toolbar-active gate of the live site
  prefix: "gl",                // localStorage namespace
  name: "Group linking",
  live: "https://effectory-ux.github.io/group-linking/",
  versions: [
    { key: "effectory", label: "Effectory", desc: "Effectory's own organisation structure.", match: "effectory.html", go: "effectory.html" },
    { key: "deep", label: "Deep tree", desc: "A deep structure, as a stress test.", match: "deep.html", go: "deep.html" }
  ]
};
