import type { CSSObject } from "@emotion/react"
import { keyframes } from "@emotion/css"

export const comboboxStyle: CSSObject = {
  '[role="listbox"]': {
    listStyleType: "none",
    padding: "0",
    margin: "0",
    border: "1px solid lightgray",
    maxWidth: "300px",
  },

  '[role="option"][aria-selected="true"], [role="option"][data-highlighted]': {
    backgroundColor: "red",
    color: "white",
  },
}

export const menuStyle: CSSObject = {
  '[role="menu"]': {
    maxWidth: "160px",
    backgroundColor: "white",
    borderRadius: "6px",
    padding: "5px",
    boxShadow: "rgb(22 23 24 / 35%) 0px 10px 38px -10px, rgb(22 23 24 / 20%) 0px 10px 20px -15px",
  },
  '[role="menu"]:focus': {
    outline: "2px dashed var(--ring-color)",
    outlineOffset: "-3px",
  },
  '[role="menuitem"]': {
    all: "unset",
    fontSize: "14px",
    lineHeight: 1,
    color: "rgb(87, 70, 175)",
    display: "flex",
    alignItems: "center",
    height: "25px",
    position: "relative",
    userSelect: "none",
    borderRadius: "3px",
    padding: "0px 5px 0px 25px",
    "&[data-selected]": {
      backgroundColor: "rgb(110, 86, 207)",
      color: "rgb(253, 252, 254)",
    },
    "&[data-disabled]": {
      opacity: 0.4,
    },
  },
  "button[aria-controls]:focus": {
    outline: "2px dashed var(--ring-color)",
    outlineOffset: "-3px",
  },
}

export const popoverStyle: CSSObject = {
  "*:focus": {
    outline: "2px dashed blue",
    outlineOffset: "2px",
  },
  ".popover": {
    display: "flex",
    gap: "24px",
  },
  ".popover__content": {
    background: "white",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "rgba(14,18,22,.35) 0 10px 38px -10px,rgba(14,18,22,.2) 0 10px 20px -15px",
    width: "260px",
    position: "absolute",
    top: "40px",
    left: "124px",
  },
  ".popover__content:focus": {
    boxShadow: "rgba(14,18,22,.35) 0 10px 38px -10px,rgba(14,18,22,.2) 0 10px 20px -15px, #c4b8f3 0 0 0 2px",
  },
  ".popover__title": {
    fontSize: "15px",
    lineHeight: "19px",
    fontWeight: "bold",
  },
  ".popover__body": {
    paddingTop: "12px",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    gap: "12px",
    position: "relative",
    fontSize: "14px",
  },
  ".popover__close-button": {
    position: "absolute",
    right: "0px",
    top: "-20px",
  },
  ".popover__arrow [data-part=arrow--inner]": {
    "--arrow-background": "white",
    "--arrow-shadow-color": "#ebebeb",
    boxShadow: "var(--box-shadow)",
  },
}

export const rangeSliderStyle: CSSObject = {
  ".slider": {
    "--slider-thumb-size": "20px",
    "--slider-track-height": "4px",
    height: "var(--slider-thumb-size)",
    display: "flex",
    alignItems: "center",
    margin: "45px",
    maxWidth: "200px",
    position: "relative",
  },
  ".slider__thumb": {
    all: "unset",
    width: "var(--slider-thumb-size)",
    height: "var(--slider-thumb-size)",
    borderRadius: ["9999px", "999px"],
    background: "white",
    boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 10px",
  },
  ".slider__thumb:focus-visible": {
    boxShadow: "rgb(0 0 0 / 22%) 0px 0px 0px 5px",
  },
  ".slider__thumb:hover": { backgroundColor: "rgb(245, 242, 255)" },
  ".slider__track": {
    height: "var(--slider-track-height)",
    background: "rgba(0, 0, 0, 0.2)",
    borderRadius: "9999px",
    flexGrow: 1,
  },
  ".slider__range": {
    background: "magenta",
    borderRadius: "inherit",
    height: "100%",
  },
}

export const ratingStyle: CSSObject = {
  ".rating": { display: "flex" },
  ".rating__rate": { margin: "0 3px", background: "salmon" },
  ".rating__rate:focus": { outline: "2px solid royalblue" },
  ".rating__rate[data-highlighted]": { background: "red" },
}

export const sliderStyle: CSSObject = {
  form: { margin: "45px" },
  ".slider": {
    marginTop: "12px",
    "--slider-thumb-size": "20px",
    "--slider-track-height": "4px",
    height: "var(--slider-thumb-size)",
    display: "flex",
    alignItems: "center",
    maxWidth: "200px",
    position: "relative",
  },
  ".slider__thumb": {
    all: "unset",
    width: "var(--slider-thumb-size)",
    height: "var(--slider-thumb-size)",
    borderRadius: ["9999px", "999px"],
    background: "white",
    boxShadow: "rgba(0, 0, 0, 0.14) 0px 2px 10px",
  },
  ".slider__thumb:focus-visible": {
    boxShadow: "rgb(0 0 0 / 22%) 0px 0px 0px 5px",
  },
  ".slider__thumb:hover": { backgroundColor: "rgb(245, 242, 255)" },
  ".slider__track": {
    height: "var(--slider-track-height)",
    background: "rgba(0, 0, 0, 0.2)",
    borderRadius: "9999px",
    flexGrow: 1,
  },
  ".slider__range": {
    background: "magenta",
    borderRadius: "inherit",
    height: "100%",
  },
  output: { marginInlineStart: "12px" },
}

export const splitViewStyle: CSSObject = {
  ".root": { height: "300px" },
  ".pane": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid lightgray",
    overflow: "auto",
  },
  ".splitter": {
    width: "8px",
    background: "#ebebeb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.2s ease-in-out",
    outline: "0",
  },
  ".splitter[data-focus]": { background: "#b0baf1" },
  ".splitter:active": { background: "#3f51b5", color: "white" },
  ".splitter-bar": {
    width: "2px",
    height: "40px",
    backgroundColor: "currentColor",
  },
}

export const tagsInputStyle: CSSObject = {
  ".tags-input": {
    display: "inline-block",
    padding: "0 2px",
    background: "#fff",
    border: "1px solid #ccc",
    width: "40em",
    borderRadius: "2px",
    boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
  },
  ".tag": {
    background: "#eee",
    color: "#444",
    padding: "0 4px",
    margin: "2px",
    border: "1px solid #ccc",
    borderRadius: "2px",
    font: "inherit",
    userSelect: "none",
    cursor: "pointer",
    transition: "all 100ms ease",
  },
  ".tag:not([hidden])": { display: "inline-block" },
  ".tag[hidden]": { display: "none !important" },
  ".tag[data-selected]": {
    backgroundColor: "#777",
    borderColor: "#777",
    color: "#eee",
  },
  input: {
    appearance: "none",
    padding: "3px",
    margin: "0",
    background: "none",
    border: "none",
    boxShadow: "none",
    font: "inherit",
    fontSize: "100%",
    outline: "none",
  },
  "input[hidden]": { display: "none !important" },
  "input:not([hidden])": { display: "inline-block !important" },
  ".tag-close": { border: "0", background: "inherit" },
}

export const pinInputStyle: CSSObject = {
  ".pin-input": {
    width: "300px",
    display: "flex",
    marginBottom: "12px",
    gap: "12px",

    input: {
      width: "48px",
      height: "48px",
      textAlign: "center",
      fontSize: "24px",
    },
  },
}

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
})

export const toastStyle: CSSObject = {
  ".toast": {
    background: "rgb(116, 116, 116)",
    borderRadius: "4px",
    color: "white",
    padding: "8px 8px 8px 16px",
    width: "400px",
    animation: `${fadeIn} 0.2s`,
    "&:not([data-open])": {
      animation: `${fadeOut} var(--toast-remove-delay)`,
    },
    "&[data-type=error]": {
      background: "rgb(201, 37, 45)",
    },
    "&[data-type=info]": {
      background: "rgb(13, 102, 208)",
    },
    "&[data-type=warning]": {
      background: "orange",
    },
    "&[data-type=success]": {
      background: "rgb(18, 128, 92)",
    },
    "&[data-type=loading]": {
      background: "purple",
    },
  },
}
