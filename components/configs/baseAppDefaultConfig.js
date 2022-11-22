import _ from "lodash";

export const defaultSettings = {
  customBaseScrollbars: true,
  theme: {
    main: "default",
    navbar: "mainThemeDark",
    toolbar: "mainThemeLight",
    footer: "mainThemeDark",
  },
};

export function getParsedQuerySettings() {
  return {};
}

export const defaultThemeOptions = {};

export const mustHaveThemeOptions = {};

export const defaultThemes = {};

export function extendThemeWithMixins(obj) {
  const theme = createMuiTheme(obj);
  return {};
}

export function mainThemeVariations(theme) {
  return {};
}
