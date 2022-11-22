const config = {
  title: "",
  defaults: {
    mode: "container",
    scroll: "content",
    navbar: {
      display: true,
      position: "left",
    },
    toolbar: {
      display: true,
      position: "above",
    },
    footer: {
      display: true,
      style: "static",

      position: "below",
    },
    leftSidePanel: {
      display: false,
    },
    rightSidePanel: {
      display: false,
    },
  },
  form: {
    mode: {
      title: "Mode",
      type: "radio",
      options: [
        {
          name: "Boxed",
          value: "boxed",
        },
        {
          name: "Full Width",
          value: "fullwidth",
        },
      ],
    },
    scroll: {
      title: "Scrollable Area",
      type: "radio",
      options: [
        {
          name: "Body",
          value: "body",
        },
        {
          name: "Content",
          value: "content",
        },
      ],
    },
    navbar: {
      type: "group",
      title: "Navbar",
      children: {
        display: {
          title: "Display",
          type: "switch",
        },
      },
    },
    toolbar: {
      type: "group",
      title: "Toolbar",
      children: {
        display: {
          title: "Display",
          type: "switch",
        },
        position: {
          title: "Position",
          type: "radio",
          options: [
            {
              name: "Above",
              value: "above",
            },
            {
              name: "Below",
              value: "below",
            },
          ],
        },
      },
    },
    footer: {
      type: "group",
      title: "Footer",
      children: {
        display: {
          title: "Display",
          type: "switch",
        },
        style: {
          title: "Style",
          type: "radio",
          options: [
            {
              name: "Fixed",
              value: "fixed",
            },
            {
              name: "Static",
              value: "static",
            },
          ],
        },
        position: {
          title: "Position",
          type: "radio",
          options: [
            {
              name: "Above",
              value: "above",
            },
            {
              name: "Below",
              value: "below",
            },
          ],
        },
      },
    },
  },
};

export default config;
