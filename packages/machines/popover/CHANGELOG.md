# @zag-js/popover

## 0.27.1

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.27.1
  - @zag-js/core@0.27.1
  - @zag-js/types@0.27.1
  - @zag-js/aria-hidden@0.27.1
  - @zag-js/utils@0.27.1
  - @zag-js/dismissable@0.27.1
  - @zag-js/dom-query@0.27.1
  - @zag-js/popper@0.27.1
  - @zag-js/remove-scroll@0.27.1
  - @zag-js/tabbable@0.27.1

## 0.27.0

### Patch Changes

- Updated dependencies [[`152b0a78`](https://github.com/chakra-ui/zag/commit/152b0a78b6ba18442f38164ce90789bc243f6e00)]:
  - @zag-js/core@0.27.0
  - @zag-js/anatomy@0.27.0
  - @zag-js/types@0.27.0
  - @zag-js/aria-hidden@0.27.0
  - @zag-js/utils@0.27.0
  - @zag-js/dismissable@0.27.0
  - @zag-js/dom-query@0.27.0
  - @zag-js/popper@0.27.0
  - @zag-js/remove-scroll@0.27.0
  - @zag-js/tabbable@0.27.0

## 0.26.0

### Patch Changes

- [`041a9e00`](https://github.com/chakra-ui/zag/commit/041a9e00e503ce62a198db45ea7b757de7c39263) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Fix issue where `dir` attribute was not applied to all element
  parts

- Updated dependencies []:
  - @zag-js/anatomy@0.26.0
  - @zag-js/core@0.26.0
  - @zag-js/types@0.26.0
  - @zag-js/aria-hidden@0.26.0
  - @zag-js/utils@0.26.0
  - @zag-js/dismissable@0.26.0
  - @zag-js/dom-query@0.26.0
  - @zag-js/popper@0.26.0
  - @zag-js/remove-scroll@0.26.0
  - @zag-js/tabbable@0.26.0

## 0.25.0

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.25.0
  - @zag-js/core@0.25.0
  - @zag-js/types@0.25.0
  - @zag-js/aria-hidden@0.25.0
  - @zag-js/utils@0.25.0
  - @zag-js/dismissable@0.25.0
  - @zag-js/dom-query@0.25.0
  - @zag-js/popper@0.25.0
  - @zag-js/remove-scroll@0.25.0
  - @zag-js/tabbable@0.25.0

## 0.24.0

### Minor Changes

- [`51712f4b`](https://github.com/chakra-ui/zag/commit/51712f4b22fe977bc02dabeda0350cdce5772619) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Rename `api.setPositioning` to `api.reposition`

### Patch Changes

- Updated dependencies [[`51712f4b`](https://github.com/chakra-ui/zag/commit/51712f4b22fe977bc02dabeda0350cdce5772619)]:
  - @zag-js/popper@0.24.0
  - @zag-js/anatomy@0.24.0
  - @zag-js/core@0.24.0
  - @zag-js/types@0.24.0
  - @zag-js/aria-hidden@0.24.0
  - @zag-js/utils@0.24.0
  - @zag-js/dismissable@0.24.0
  - @zag-js/dom-query@0.24.0
  - @zag-js/remove-scroll@0.24.0
  - @zag-js/tabbable@0.24.0

## 0.23.0

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.23.0
  - @zag-js/core@0.23.0
  - @zag-js/types@0.23.0
  - @zag-js/aria-hidden@0.23.0
  - @zag-js/utils@0.23.0
  - @zag-js/dismissable@0.23.0
  - @zag-js/dom-query@0.23.0
  - @zag-js/popper@0.23.0
  - @zag-js/remove-scroll@0.23.0
  - @zag-js/tabbable@0.23.0

## 0.22.0

### Patch Changes

- Updated dependencies [[`6d439ac2`](https://github.com/chakra-ui/zag/commit/6d439ac2171d3158e8ba43dcc35f84e52707dae6)]:
  - @zag-js/dismissable@0.22.0
  - @zag-js/anatomy@0.22.0
  - @zag-js/core@0.22.0
  - @zag-js/types@0.22.0
  - @zag-js/aria-hidden@0.22.0
  - @zag-js/utils@0.22.0
  - @zag-js/dom-query@0.22.0
  - @zag-js/popper@0.22.0
  - @zag-js/remove-scroll@0.22.0
  - @zag-js/tabbable@0.22.0

## 0.21.0

### Minor Changes

- [#882](https://github.com/chakra-ui/zag/pull/882)
  [`fd71ad98`](https://github.com/chakra-ui/zag/commit/fd71ad98660fce3dd06c6dc2fa01e913ae7c3992) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - - Refactor component anatomy to use consistent naming convention
  across all machines.

  - **Accordion**

    - `getTriggerProps` => `getItemTriggerProps`
    - `getContentProps` => `getItemContentProps`

  - **Radio**

    - `getRadioProps` => `getItemProps`
    - `getRadioControlProps` => `getItemControlProps`
    - `getRadioLabelProps` => `getItemTextProps`
    - `getRatingState` => `getItemState`
    - `getRatingProps` => `getItemProps`

  - **TagsInput**

    - `getTagProps` => `getItemProps`
    - `getTagDeleteTriggerProps` => `getItemDeleteTriggerProps`
    - `getTagInputProps` => `getItemInputProps`

  - **Toggle Group**
    - `getToggleProps` => `getItemProps`
  - **ToggleGroup**: Allow deselecting item when `multiple` is `false`.
  - Add indicator part to some components for ease of styling. Added `AccordionItemIndicator`, `SelectIndicator`,
    `MenuIndicator`, `PopoverIndicator`

### Patch Changes

- Updated dependencies [[`e9d425c4`](https://github.com/chakra-ui/zag/commit/e9d425c427e0b9386680c8e7906f71a8c9a45978)]:
  - @zag-js/popper@0.21.0
  - @zag-js/anatomy@0.21.0
  - @zag-js/core@0.21.0
  - @zag-js/types@0.21.0
  - @zag-js/aria-hidden@0.21.0
  - @zag-js/utils@0.21.0
  - @zag-js/dismissable@0.21.0
  - @zag-js/dom-query@0.21.0
  - @zag-js/remove-scroll@0.21.0
  - @zag-js/tabbable@0.21.0

## 0.20.0

### Minor Changes

- [#862](https://github.com/chakra-ui/zag/pull/862)
  [`9a3a82f0`](https://github.com/chakra-ui/zag/commit/9a3a82f0b3738beda59c313fafd51360e6b0322f) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - BREAKING: Unify all callbacks to follow a consistent naming
  convention

### Patch Changes

- [`942db6ca`](https://github.com/chakra-ui/zag/commit/942db6caf9f699d6af56929c835b10ae80cfbc85) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Remove toggle machine

- Updated dependencies [[`9a3a82f0`](https://github.com/chakra-ui/zag/commit/9a3a82f0b3738beda59c313fafd51360e6b0322f),
  [`942db6ca`](https://github.com/chakra-ui/zag/commit/942db6caf9f699d6af56929c835b10ae80cfbc85)]:
  - @zag-js/types@0.20.0
  - @zag-js/anatomy@0.20.0
  - @zag-js/core@0.20.0
  - @zag-js/aria-hidden@0.20.0
  - @zag-js/utils@0.20.0
  - @zag-js/dismissable@0.20.0
  - @zag-js/dom-query@0.20.0
  - @zag-js/popper@0.20.0
  - @zag-js/remove-scroll@0.20.0
  - @zag-js/tabbable@0.20.0

## 0.19.1

### Patch Changes

- Updated dependencies [[`f5dff3f4`](https://github.com/chakra-ui/zag/commit/f5dff3f4e1a13d5315d3bcfcc1295952b46e4016),
  [`3f0b6a19`](https://github.com/chakra-ui/zag/commit/3f0b6a19dcf9779846efb2bc093235299301bbdb)]:
  - @zag-js/utils@0.19.1
  - @zag-js/core@0.19.1
  - @zag-js/dismissable@0.19.1
  - @zag-js/popper@0.19.1
  - @zag-js/anatomy@0.19.1
  - @zag-js/types@0.19.1
  - @zag-js/aria-hidden@0.19.1
  - @zag-js/dom-query@0.19.1
  - @zag-js/remove-scroll@0.19.1
  - @zag-js/tabbable@0.19.1

## 0.19.0

### Patch Changes

- Updated dependencies [[`8845d75a`](https://github.com/chakra-ui/zag/commit/8845d75a72f6d082e1566fe7e65e76e343b60971)]:
  - @zag-js/popper@0.19.0
  - @zag-js/anatomy@0.19.0
  - @zag-js/core@0.19.0
  - @zag-js/types@0.19.0
  - @zag-js/aria-hidden@0.19.0
  - @zag-js/utils@0.19.0
  - @zag-js/dismissable@0.19.0
  - @zag-js/dom-query@0.19.0
  - @zag-js/remove-scroll@0.19.0
  - @zag-js/tabbable@0.19.0

## 0.18.0

### Patch Changes

- Updated dependencies [[`224cbbb0`](https://github.com/chakra-ui/zag/commit/224cbbb02eef713d81acbee627dd9a0ed745c7fa)]:
  - @zag-js/utils@0.18.0
  - @zag-js/core@0.18.0
  - @zag-js/dismissable@0.18.0
  - @zag-js/popper@0.18.0
  - @zag-js/anatomy@0.18.0
  - @zag-js/types@0.18.0
  - @zag-js/aria-hidden@0.18.0
  - @zag-js/dom-query@0.18.0
  - @zag-js/remove-scroll@0.18.0
  - @zag-js/tabbable@0.18.0

## 0.17.0

### Minor Changes

- [#789](https://github.com/chakra-ui/zag/pull/789)
  [`db81eaab`](https://github.com/chakra-ui/zag/commit/db81eaab8c8b06d74cf81d46fa145f4b480b7e82) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Refactor machine event handling and rename `PublicApi` to `Api`

### Patch Changes

- Updated dependencies [[`db81eaab`](https://github.com/chakra-ui/zag/commit/db81eaab8c8b06d74cf81d46fa145f4b480b7e82)]:
  - @zag-js/dom-query@0.17.0
  - @zag-js/aria-hidden@0.17.0
  - @zag-js/dismissable@0.17.0
  - @zag-js/popper@0.17.0
  - @zag-js/remove-scroll@0.17.0
  - @zag-js/tabbable@0.17.0
  - @zag-js/anatomy@0.17.0
  - @zag-js/core@0.17.0
  - @zag-js/types@0.17.0
  - @zag-js/utils@0.17.0

## 0.16.0

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.16.0
  - @zag-js/core@0.16.0
  - @zag-js/types@0.16.0
  - @zag-js/aria-hidden@0.16.0
  - @zag-js/utils@0.16.0
  - @zag-js/dismissable@0.16.0
  - @zag-js/dom-query@0.16.0
  - @zag-js/popper@0.16.0
  - @zag-js/remove-scroll@0.16.0
  - @zag-js/tabbable@0.16.0

## 0.15.0

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.15.0
  - @zag-js/core@0.15.0
  - @zag-js/types@0.15.0
  - @zag-js/aria-hidden@0.15.0
  - @zag-js/utils@0.15.0
  - @zag-js/dismissable@0.15.0
  - @zag-js/dom-query@0.15.0
  - @zag-js/popper@0.15.0
  - @zag-js/remove-scroll@0.15.0
  - @zag-js/tabbable@0.15.0

## 0.14.0

### Patch Changes

- Updated dependencies [[`7cf380b0`](https://github.com/chakra-ui/zag/commit/7cf380b0d3019507181b79e0fe99e894d9e83030)]:
  - @zag-js/dom-query@0.14.0
  - @zag-js/aria-hidden@0.14.0
  - @zag-js/dismissable@0.14.0
  - @zag-js/popper@0.14.0
  - @zag-js/remove-scroll@0.14.0
  - @zag-js/tabbable@0.14.0
  - @zag-js/anatomy@0.14.0
  - @zag-js/core@0.14.0
  - @zag-js/types@0.14.0
  - @zag-js/utils@0.14.0

## 0.13.0

### Patch Changes

- [`2e9746f4`](https://github.com/chakra-ui/zag/commit/2e9746f4e81524ea5fe80beff82924c8a0b8176b) Thanks
  [@cschroeter](https://github.com/cschroeter)! - Set popover to be portalled by default

- [`e2cb53c7`](https://github.com/chakra-ui/zag/commit/e2cb53c7c7a9dc2b1d462ad4e85d25f7e718d848) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Fix issue where `sameWidth` doesn't work consistently in Vue.js
  and Solid.js during re-render.

- Updated dependencies [[`4a2d8b77`](https://github.com/chakra-ui/zag/commit/4a2d8b77d1e71ad6b6c10134bc4186db6e6c0414),
  [`e2cb53c7`](https://github.com/chakra-ui/zag/commit/e2cb53c7c7a9dc2b1d462ad4e85d25f7e718d848)]:
  - @zag-js/core@0.13.0
  - @zag-js/popper@0.13.0
  - @zag-js/anatomy@0.13.0
  - @zag-js/types@0.13.0
  - @zag-js/aria-hidden@0.13.0
  - @zag-js/utils@0.13.0
  - @zag-js/dismissable@0.13.0
  - @zag-js/dom-query@0.13.0
  - @zag-js/remove-scroll@0.13.0
  - @zag-js/tabbable@0.13.0

## 0.12.0

### Minor Changes

- [`72946ada`](https://github.com/chakra-ui/zag/commit/72946ada6d247fcd3442ca3b76b9f3db2d985e38) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Add `data-state` attribute to allow styling the open/closed state
  or checked/unchecked states

  **Potential breaking change:**

  We replaced `data-expanded` or `data-checked` to `data-state` attribute

  - `data-expanded` maps to `data-state="open"` or `data-state="closed"`
  - `data-checked` maps to `data-state="checked"` or `data-state="unchecked"`
  - `data-indeterminate` maps to `data-state="indeterminate"`
  - `data-open` maps to `data-state="open"`

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.12.0
  - @zag-js/core@0.12.0
  - @zag-js/types@0.12.0
  - @zag-js/aria-hidden@0.12.0
  - @zag-js/utils@0.12.0
  - @zag-js/dismissable@0.12.0
  - @zag-js/dom-query@0.12.0
  - @zag-js/popper@0.12.0
  - @zag-js/remove-scroll@0.12.0
  - @zag-js/tabbable@0.12.0

## 0.11.2

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.11.2
  - @zag-js/core@0.11.2
  - @zag-js/types@0.11.2
  - @zag-js/aria-hidden@0.11.2
  - @zag-js/utils@0.11.2
  - @zag-js/dismissable@0.11.2
  - @zag-js/dom-query@0.11.2
  - @zag-js/popper@0.11.2
  - @zag-js/remove-scroll@0.11.2
  - @zag-js/tabbable@0.11.2

## 0.11.1

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.11.1
  - @zag-js/core@0.11.1
  - @zag-js/types@0.11.1
  - @zag-js/aria-hidden@0.11.1
  - @zag-js/utils@0.11.1
  - @zag-js/dismissable@0.11.1
  - @zag-js/dom-query@0.11.1
  - @zag-js/popper@0.11.1
  - @zag-js/remove-scroll@0.11.1
  - @zag-js/tabbable@0.11.1

## 0.11.0

### Patch Changes

- [`4f371874`](https://github.com/chakra-ui/zag/commit/4f3718742dc88a2cd8726bdd889c9bbde94f5bce) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Rebuild all packages using tsup

- Updated dependencies [[`4f371874`](https://github.com/chakra-ui/zag/commit/4f3718742dc88a2cd8726bdd889c9bbde94f5bce)]:
  - @zag-js/remove-scroll@0.11.0
  - @zag-js/aria-hidden@0.11.0
  - @zag-js/dismissable@0.11.0
  - @zag-js/dom-query@0.11.0
  - @zag-js/tabbable@0.11.0
  - @zag-js/popper@0.11.0
  - @zag-js/utils@0.11.0
  - @zag-js/anatomy@0.11.0
  - @zag-js/types@0.11.0
  - @zag-js/core@0.11.0

## 0.10.5

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.10.5
  - @zag-js/core@0.10.5
  - @zag-js/types@0.10.5
  - @zag-js/aria-hidden@0.10.5
  - @zag-js/utils@0.10.5
  - @zag-js/dismissable@0.10.5
  - @zag-js/dom-query@0.10.5
  - @zag-js/popper@0.10.5
  - @zag-js/remove-scroll@0.10.5
  - @zag-js/tabbable@0.10.5

## 0.10.4

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.10.4
  - @zag-js/core@0.10.4
  - @zag-js/types@0.10.4
  - @zag-js/aria-hidden@0.10.4
  - @zag-js/utils@0.10.4
  - @zag-js/dismissable@0.10.4
  - @zag-js/dom-query@0.10.4
  - @zag-js/popper@0.10.4
  - @zag-js/remove-scroll@0.10.4
  - @zag-js/tabbable@0.10.4

## 0.10.3

### Patch Changes

- [`c59a8dec`](https://github.com/chakra-ui/zag/commit/c59a8dec15ab57d218823bfe7af6d723972be6c7) Thanks
  [@cschroeter](https://github.com/cschroeter)! - Use vite to build packages

- Updated dependencies [[`6344f8a1`](https://github.com/chakra-ui/zag/commit/6344f8a11aa0f6d5f633431ce47519d74e35b62b),
  [`c59a8dec`](https://github.com/chakra-ui/zag/commit/c59a8dec15ab57d218823bfe7af6d723972be6c7),
  [`775f11c9`](https://github.com/chakra-ui/zag/commit/775f11c96759197fcbad14b5b8a0fbde095efc55)]:
  - @zag-js/popper@0.10.3
  - @zag-js/anatomy@0.10.3
  - @zag-js/core@0.10.3
  - @zag-js/types@0.10.3
  - @zag-js/aria-hidden@0.10.3
  - @zag-js/utils@0.10.3
  - @zag-js/dismissable@0.10.3
  - @zag-js/dom-query@0.10.3
  - @zag-js/remove-scroll@0.10.3
  - @zag-js/tabbable@0.10.3

## 0.10.2

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.10.2
  - @zag-js/core@0.10.2
  - @zag-js/types@0.10.2
  - @zag-js/aria-hidden@0.10.2
  - @zag-js/utils@0.10.2
  - @zag-js/dismissable@0.10.2
  - @zag-js/dom-query@0.10.2
  - @zag-js/popper@0.10.2
  - @zag-js/remove-scroll@0.10.2
  - @zag-js/tabbable@0.10.2

## 0.10.1

### Patch Changes

- Updated dependencies []:
  - @zag-js/anatomy@0.10.1
  - @zag-js/core@0.10.1
  - @zag-js/types@0.10.1
  - @zag-js/aria-hidden@0.10.1
  - @zag-js/utils@0.10.1
  - @zag-js/dismissable@0.10.1
  - @zag-js/dom-query@0.10.1
  - @zag-js/popper@0.10.1
  - @zag-js/remove-scroll@0.10.1
  - @zag-js/tabbable@0.10.1

## 0.10.0

### Patch Changes

- [`cca48d7a`](https://github.com/chakra-ui/zag/commit/cca48d7a9e0d87e85669fc2c2788b4b630d62774) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Upgrade `focus-trap` package to ensure that trap works when the
  active element within the content is removed

- [`b54e658d`](https://github.com/chakra-ui/zag/commit/b54e658d1eb007479deb8a34b48672b92507d0ba) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Fix scroll hijacking issue during initial and return focus

- Updated dependencies [[`e8ac03ef`](https://github.com/chakra-ui/zag/commit/e8ac03ef4b820773a5875db861735e2aac8f29da),
  [`d2838286`](https://github.com/chakra-ui/zag/commit/d2838286fc13acae3f0818653d5feee982703f23),
  [`2a1fb4a0`](https://github.com/chakra-ui/zag/commit/2a1fb4a0740e6ad8e2902265e14597f087007675),
  [`a30258e8`](https://github.com/chakra-ui/zag/commit/a30258e8137bfba5811471919e463b79039848b6)]:
  - @zag-js/dom-query@0.10.0
  - @zag-js/anatomy@0.10.0
  - @zag-js/types@0.10.0
  - @zag-js/dismissable@0.10.0
  - @zag-js/aria-hidden@0.10.0
  - @zag-js/popper@0.10.0
  - @zag-js/remove-scroll@0.10.0
  - @zag-js/tabbable@0.10.0
  - @zag-js/core@0.10.0
  - @zag-js/utils@0.10.0

## 0.9.2

### Patch Changes

- Updated dependencies []:
  - @zag-js/dismissable@0.9.2
  - @zag-js/anatomy@0.9.2
  - @zag-js/core@0.9.2
  - @zag-js/types@0.9.2
  - @zag-js/aria-hidden@0.9.2
  - @zag-js/utils@0.9.2
  - @zag-js/dom-query@0.9.2
  - @zag-js/popper@0.9.2
  - @zag-js/remove-scroll@0.9.2
  - @zag-js/tabbable@0.9.2

## 0.9.1

### Patch Changes

- [`8469daa1`](https://github.com/chakra-ui/zag/commit/8469daa15fd7f2c0a80869a8715b0342bd3c355f) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Force release every package to fix regression

- Updated dependencies [[`8469daa1`](https://github.com/chakra-ui/zag/commit/8469daa15fd7f2c0a80869a8715b0342bd3c355f)]:
  - @zag-js/anatomy@0.9.1
  - @zag-js/core@0.9.1
  - @zag-js/types@0.9.1
  - @zag-js/aria-hidden@0.9.1
  - @zag-js/utils@0.9.1
  - @zag-js/dismissable@0.9.1
  - @zag-js/dom-query@0.9.1
  - @zag-js/popper@0.9.1
  - @zag-js/remove-scroll@0.9.1
  - @zag-js/tabbable@0.9.1

## 0.9.0

### Patch Changes

- Updated dependencies [[`6274ed5e`](https://github.com/chakra-ui/zag/commit/6274ed5e460400ef7038d2b3b6c1f0ce679ca649)]:
  - @zag-js/anatomy@0.9.0

## 0.8.0

### Patch Changes

- [`8e317083`](https://github.com/chakra-ui/zag/commit/8e3170830a54a7e51854b08c319325598c7bb566) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Refactor machines to use new defer option

- Updated dependencies [[`fb4fb42d`](https://github.com/chakra-ui/zag/commit/fb4fb42d8aacc5844945dd7b1bd27b94c978ca4e)]:
  - @zag-js/aria-hidden@0.8.0
  - @zag-js/dismissable@0.8.0
  - @zag-js/tabbable@0.8.0
  - @zag-js/popper@0.8.0

## 0.7.0

### Patch Changes

- [`b912582c`](https://github.com/chakra-ui/zag/commit/b912582c0198c6fdd9362709ba943c145c4e3719) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Update the `setPositioning` api method to allow empty arguments

- [`d3c11c51`](https://github.com/chakra-ui/zag/commit/d3c11c510dedda6d86159ed7e5736d9e7083c028) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Ensure ids of underlying elements can customized based on `ids`
  context property.

- Updated dependencies [[`413cdf18`](https://github.com/chakra-ui/zag/commit/413cdf180f718469c9c8b879a43aa4501d1ae59c)]:
  - @zag-js/core@0.7.0

## 0.6.0

### Patch Changes

- [`ba2a631b`](https://github.com/chakra-ui/zag/commit/ba2a631b062a607ab66f6ff498140f5e5294cd89) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - [BREAKING] Rename `onOpenChange` to `onOpen` and `onClose`

- Updated dependencies []:
  - @zag-js/dismissable@0.6.0

## 0.5.0

### Minor Changes

- [`4603295e`](https://github.com/chakra-ui/zag/commit/4603295e9e57115240cdd97de04e105836908c54) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Remove the `defaultOpen` property in favor of the `open` property
  that can now be controlled.

  ```jsx
  // this is will open the dialog initially
  const [state, send] = useMachine(dialog.machine({ id: "1", open: true }))

  // this will open the dialog when the `open` value changes
  const [state, send] = useMachine(dialog.machine({ id: "1" }), {
    context: {
      // when this value changes, the dialog will open/close
      open: true,
    },
  })
  ```

### Patch Changes

- Updated dependencies [[`ec07ff35`](https://github.com/chakra-ui/zag/commit/ec07ff3590916ebcb4450b64207370ee2af9d3d1),
  [`54377b1c`](https://github.com/chakra-ui/zag/commit/54377b1c4ed85deb06453a00648b7c2c1f0c72df)]:
  - @zag-js/core@0.5.0
  - @zag-js/types@0.5.0
  - @zag-js/dismissable@0.5.0

## 0.2.15

### Patch Changes

- [`fa2ecc8e`](https://github.com/chakra-ui/zag/commit/fa2ecc8ea235b824f45deda10070c321f896886c) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - - Refactor machine to use the `proxyTabFocus` helper for better
  keyboard accessibility when portalled.

  - Add `api.setPositioning` to allow for programmatic re-positioning of the popover. This API supports all the
    positioning options.

  ```js
  api.setPositioning({ placement: "top" })
  ```

- Updated dependencies [[`fa2ecc8e`](https://github.com/chakra-ui/zag/commit/fa2ecc8ea235b824f45deda10070c321f896886c),
  [`33d96b0d`](https://github.com/chakra-ui/zag/commit/33d96b0d927868a17d0e8e0298d5b34e82eed540),
  [`30dbeb28`](https://github.com/chakra-ui/zag/commit/30dbeb282f7901c33518097a0e1dd9a857f7efb0)]:
  - @zag-js/popper@0.2.7
  - @zag-js/tabbable@0.1.1
  - @zag-js/utils@0.3.4
  - @zag-js/core@0.2.12
  - @zag-js/dismissable@0.2.6

## 0.2.14

### Patch Changes

- [`5fbb3e80`](https://github.com/chakra-ui/zag/commit/5fbb3e8048280537da1ffdc822753f6bcb01d292) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Bump `focus-trap` package to latest

- Updated dependencies [[`316eea98`](https://github.com/chakra-ui/zag/commit/316eea980af3a276ec3b0bd900b9e705f59f7c35),
  [`1e10b1f4`](https://github.com/chakra-ui/zag/commit/1e10b1f40016f5c9bdf0924a3470b9383c0dbce2),
  [`fefa5098`](https://github.com/chakra-ui/zag/commit/fefa5098f400ee6b04e5636c8b0b016dca5b2360),
  [`9d4db09e`](https://github.com/chakra-ui/zag/commit/9d4db09e1b31b4f5bd85a04622359b3312171741)]:
  - @zag-js/tabbable@0.1.0
  - @zag-js/core@0.2.11
  - @zag-js/popper@0.2.6
  - @zag-js/dismissable@0.2.5

## 0.2.13

### Patch Changes

- Updated dependencies [[`1446d88b`](https://github.com/chakra-ui/zag/commit/1446d88bff3848f2a2ec0a793ee83281cda966e8)]:
  - @zag-js/dom-query@0.1.4
  - @zag-js/dismissable@0.2.4
  - @zag-js/popper@0.2.5
  - @zag-js/remove-scroll@0.2.4

## 0.2.12

### Patch Changes

- [#536](https://github.com/chakra-ui/zag/pull/536)
  [`aabc9aed`](https://github.com/chakra-ui/zag/commit/aabc9aed93ae3f49e2cec8d8b28edd23a337ce99) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Refactor all packages to have proper dependency structure and
  bundle size.

- Updated dependencies [[`aabc9aed`](https://github.com/chakra-ui/zag/commit/aabc9aed93ae3f49e2cec8d8b28edd23a337ce99),
  [`5277f653`](https://github.com/chakra-ui/zag/commit/5277f65311c46e5792f605021d58b3b7e7dc3eaa)]:
  - @zag-js/remove-scroll@0.2.3
  - @zag-js/dismissable@0.2.3
  - @zag-js/dom-event@0.0.1
  - @zag-js/dom-query@0.1.3
  - @zag-js/tabbable@0.0.1
  - @zag-js/popper@0.2.4
  - @zag-js/core@0.2.10

## 0.2.11

### Patch Changes

- Updated dependencies [[`df27f257`](https://github.com/chakra-ui/zag/commit/df27f257f53d194013b528342d3d9aef994d0d5c)]:
  - @zag-js/core@0.2.9

## 0.2.10

### Patch Changes

- Updated dependencies []:
  - @zag-js/core@0.2.8

## 0.2.9

### Patch Changes

- [`6957678d`](https://github.com/chakra-ui/zag/commit/6957678d2f00f4d219e791dffed91446e64211e7) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Switch to `es2020` to support `import.meta.env`

- Updated dependencies [[`f7bb988a`](https://github.com/chakra-ui/zag/commit/f7bb988aaeda6c6caebe95823f4cd44baa0d5e78),
  [`6957678d`](https://github.com/chakra-ui/zag/commit/6957678d2f00f4d219e791dffed91446e64211e7),
  [`fef822b9`](https://github.com/chakra-ui/zag/commit/fef822b91a4a9dbfc3c1e8f88a89727a3231326a)]:
  - @zag-js/core@0.2.7
  - @zag-js/anatomy@0.1.4
  - @zag-js/types@0.3.4
  - @zag-js/aria-hidden@0.2.2
  - @zag-js/dismissable@0.2.2
  - @zag-js/popper@0.2.3
  - @zag-js/remove-scroll@0.2.2

## 0.2.8

### Patch Changes

- Updated dependencies [[`80de0b7c`](https://github.com/chakra-ui/zag/commit/80de0b7c7f888a254a3e1fec2da5338e235bc699)]:
  - @zag-js/core@0.2.6

## 0.2.7

### Patch Changes

- Updated dependencies [[`c1f609df`](https://github.com/chakra-ui/zag/commit/c1f609dfabbc31c296ebdc1e89480313130f832b),
  [`c7e85e20`](https://github.com/chakra-ui/zag/commit/c7e85e20d4d08b56852768becf2fc5f7f4275dcc)]:
  - @zag-js/types@0.3.3
  - @zag-js/core@0.2.5
  - @zag-js/dismissable@0.2.1
  - @zag-js/popper@0.2.2
  - @zag-js/remove-scroll@0.2.1

## 0.2.6

### Patch Changes

- [#462](https://github.com/chakra-ui/zag/pull/462)
  [`f8c47a2b`](https://github.com/chakra-ui/zag/commit/f8c47a2b4442bfadc4d98315a8c1ac4aa4020822) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Update packages to use explicit `exports` field in `package.json`

- Updated dependencies [[`4c98f016`](https://github.com/chakra-ui/zag/commit/4c98f016ae3d48b1b74f4dc8c302ef9a1c664260),
  [`ec776276`](https://github.com/chakra-ui/zag/commit/ec77627603f310ca34a659bc250cdcf819a17b91),
  [`f8c47a2b`](https://github.com/chakra-ui/zag/commit/f8c47a2b4442bfadc4d98315a8c1ac4aa4020822),
  [`5799fcb5`](https://github.com/chakra-ui/zag/commit/5799fcb520a7956dc7ef1a9bc7aaa8dff85fa592)]:
  - @zag-js/core@0.2.4
  - @zag-js/anatomy@0.1.3
  - @zag-js/types@0.3.2
  - @zag-js/aria-hidden@0.2.1
  - @zag-js/dismissable@0.2.1
  - @zag-js/popper@0.2.2
  - @zag-js/remove-scroll@0.2.1

## 0.2.5

### Patch Changes

- Updated dependencies [[`5bd24f02`](https://github.com/chakra-ui/zag/commit/5bd24f02fcab355f7df8a2d5cea3b155155380f8)]:
  - @zag-js/anatomy@0.1.2

## 0.2.4

### Patch Changes

- [`af4ab9bb`](https://github.com/chakra-ui/zag/commit/af4ab9bb7cd599c53e47ca7ed2ea90a4ff742499) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Update anatomy of components

- Updated dependencies [[`9d936614`](https://github.com/chakra-ui/zag/commit/9d93661439f10a550c154e9f290905d32e8f509b),
  [`9332f1ca`](https://github.com/chakra-ui/zag/commit/9332f1caf5122c16a3edb48e20664b04714d226c)]:
  - @zag-js/core@0.2.3
  - @zag-js/popper@0.2.1

## 0.2.3

### Patch Changes

- [#416](https://github.com/chakra-ui/zag/pull/416)
  [`5e0e0ff5`](https://github.com/chakra-ui/zag/commit/5e0e0ff57c15c173bbf5f38e4e0dac117b47739b) Thanks
  [@cschroeter](https://github.com/cschroeter)! - Describe the anatomy of a machine and use it to generate data-scope
  and data-part

- Updated dependencies [[`5e0e0ff5`](https://github.com/chakra-ui/zag/commit/5e0e0ff57c15c173bbf5f38e4e0dac117b47739b)]:
  - @zag-js/anatomy@0.1.1

## 0.2.2

### Patch Changes

- Updated dependencies [[`44feef0b`](https://github.com/chakra-ui/zag/commit/44feef0bdf312e27d6faf1aa8ab0ecff0281108c),
  [`810e7d85`](https://github.com/chakra-ui/zag/commit/810e7d85274a26e0fe76dbdb2829fd7ab7f982a6),
  [`e328b306`](https://github.com/chakra-ui/zag/commit/e328b306bf06d151fff4907a7e8e1160f07af855),
  [`65976dd5`](https://github.com/chakra-ui/zag/commit/65976dd51902b1c4a4460cd196467156a705a999)]:
  - @zag-js/core@0.2.2
  - @zag-js/types@0.3.1
  - @zag-js/dismissable@0.2.0
  - @zag-js/popper@0.2.0
  - @zag-js/remove-scroll@0.2.0

## 0.2.1

### Patch Changes

- [#381](https://github.com/chakra-ui/zag/pull/381)
  [`21775db5`](https://github.com/chakra-ui/zag/commit/21775db5ac318b095f603e7030ec7645e104f663) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Omit undefined values passed in machine's context

- Updated dependencies [[`4aa6955f`](https://github.com/chakra-ui/zag/commit/4aa6955fab7ff6fee8545dcf491576640c69c64e)]:
  - @zag-js/core@0.2.1
  - @zag-js/dismissable@0.2.0
  - @zag-js/popper@0.2.0

## 0.2.0

### Minor Changes

- [#375](https://github.com/chakra-ui/zag/pull/375)
  [`9cb4e9de`](https://github.com/chakra-ui/zag/commit/9cb4e9de28a3c6666860bc068c86be67a3b1a2ca) Thanks
  [@darrylblake](https://github.com/darrylblake)! - Ensures code is transpiled with `es2019` target for environments
  that don't support `es2020` and up, i.e. Cypress.

### Patch Changes

- Updated dependencies [[`9cb4e9de`](https://github.com/chakra-ui/zag/commit/9cb4e9de28a3c6666860bc068c86be67a3b1a2ca),
  [`f70dd580`](https://github.com/chakra-ui/zag/commit/f70dd5808ab576d33649e4497e0553c9eef12868)]:
  - @zag-js/core@0.2.0
  - @zag-js/types@0.3.0
  - @zag-js/aria-hidden@0.2.0
  - @zag-js/dismissable@0.2.0
  - @zag-js/popper@0.2.0
  - @zag-js/remove-scroll@0.2.0

## 0.1.16

### Patch Changes

- [`52552156`](https://github.com/chakra-ui/zag/commit/52552156ded1b00f873576f52b11d0414f5dfee7) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Force new release

- Updated dependencies [[`52552156`](https://github.com/chakra-ui/zag/commit/52552156ded1b00f873576f52b11d0414f5dfee7)]:
  - @zag-js/core@0.1.12
  - @zag-js/types@0.2.7
  - @zag-js/aria-hidden@0.1.4
  - @zag-js/dismissable@0.1.6
  - @zag-js/popper@0.1.13
  - @zag-js/remove-scroll@0.1.6

## 0.1.15

### Patch Changes

- [#325](https://github.com/chakra-ui/zag/pull/325)
  [`c0cc303e`](https://github.com/chakra-ui/zag/commit/c0cc303e9824ea395c06d9faa699d23e19ef6538) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Switch packages to use ESM and `type=module`

- Updated dependencies [[`61c11646`](https://github.com/chakra-ui/zag/commit/61c116467c1758bdda7efe1f27d4ed26e7d44624),
  [`c0cc303e`](https://github.com/chakra-ui/zag/commit/c0cc303e9824ea395c06d9faa699d23e19ef6538)]:
  - @zag-js/core@0.1.11
  - @zag-js/types@0.2.6
  - @zag-js/aria-hidden@0.1.3
  - @zag-js/dismissable@0.1.5
  - @zag-js/popper@0.1.12
  - @zag-js/remove-scroll@0.1.5

## 0.1.14

### Patch Changes

- [`55e6a55c`](https://github.com/chakra-ui/zag/commit/55e6a55c37a60eea5caa446270cd1f6012d7363d) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Bump all packages

- Updated dependencies [[`ce97956c`](https://github.com/chakra-ui/zag/commit/ce97956c0586ce842f7b082dd71cc6d68909ad58),
  [`55e6a55c`](https://github.com/chakra-ui/zag/commit/55e6a55c37a60eea5caa446270cd1f6012d7363d)]:
  - @zag-js/core@0.1.10
  - @zag-js/types@0.2.5
  - @zag-js/aria-hidden@0.1.2
  - @zag-js/dismissable@0.1.4
  - @zag-js/popper@0.1.11
  - @zag-js/remove-scroll@0.1.4

## 0.1.13

### Patch Changes

- Updated dependencies [[`1d30333e`](https://github.com/chakra-ui/zag/commit/1d30333e0d3011707950adab26878cde9ed1c242)]:
  - @zag-js/types@0.2.4
  - @zag-js/dismissable@0.1.3
  - @zag-js/popper@0.1.10
  - @zag-js/remove-scroll@0.1.3

## 0.1.12

### Patch Changes

- Updated dependencies [[`33258f92`](https://github.com/chakra-ui/zag/commit/33258f92e3e1c9943a7507f252b40af2fd085788)]:
  - @zag-js/popper@0.1.10
  - @zag-js/dismissable@0.1.3
  - @zag-js/remove-scroll@0.1.3

## 0.1.11

### Patch Changes

- [`2a2566b8`](https://github.com/chakra-ui/zag/commit/2a2566b8be1441ae98215bec594e4c996f3b8aaf) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Trigger new version due to changes in build chain

- Updated dependencies [[`2a2566b8`](https://github.com/chakra-ui/zag/commit/2a2566b8be1441ae98215bec594e4c996f3b8aaf)]:
  - @zag-js/core@0.1.9
  - @zag-js/types@0.2.3
  - @zag-js/aria-hidden@0.1.1
  - @zag-js/dismissable@0.1.3
  - @zag-js/popper@0.1.9
  - @zag-js/remove-scroll@0.1.3

## 0.1.10

### Patch Changes

- [#202](https://github.com/chakra-ui/zag/pull/202)
  [`ef8a7386`](https://github.com/chakra-ui/zag/commit/ef8a7386ccf4de3431c785b310670da105788597) Thanks
  [@anubra266](https://github.com/anubra266)! - Refactor machine dom to use `getById`

* [#191](https://github.com/chakra-ui/zag/pull/191)
  [`66cb9c99`](https://github.com/chakra-ui/zag/commit/66cb9c998662fd049590d51cfdcd79f03e2f582b) Thanks
  [@anubra266](https://github.com/anubra266)! - Improve SSR by omitting the setup step.

* Updated dependencies [[`0e750fa1`](https://github.com/chakra-ui/zag/commit/0e750fa1e8d17f495f7d9fda10385819ac762c7b),
  [`569d98e1`](https://github.com/chakra-ui/zag/commit/569d98e186dc95c97b1b897b6cc0183065646031),
  [`66cb9c99`](https://github.com/chakra-ui/zag/commit/66cb9c998662fd049590d51cfdcd79f03e2f582b),
  [`c5872be2`](https://github.com/chakra-ui/zag/commit/c5872be2fe057675fb8c7c64ed2c10b99daf697e)]:
  - @zag-js/types@0.2.2
  - @zag-js/dismissable@0.1.2
  - @zag-js/core@0.1.8
  - @zag-js/popper@0.1.8
  - @zag-js/remove-scroll@0.1.2

## 0.1.9

### Patch Changes

- [#181](https://github.com/chakra-ui/zag/pull/181)
  [`b91a3a5c`](https://github.com/chakra-ui/zag/commit/b91a3a5cb56f4e25c46fdfcf8ff0fe0a41d75e66) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Add support for nested popovers by leveraging the layer stack
  approach

* [#178](https://github.com/chakra-ui/zag/pull/178)
  [`1abed11b`](https://github.com/chakra-ui/zag/commit/1abed11bda7fc56fd3f77c3b842e89a934ee3253) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - BREAKING 💥: Refactor connect function in favor of uniform APIs
  across frameworks

  Due to the fact that we tried to make "React" the baseline, there was a lot of inherent complexity in how we managed
  types in the codebase.

  We've now removed the `PropTypes` export in favor of passing `normalizeProps` in the `api.connect` function. This is
  now required for React as well.

  You can remove the `<PropTypes>` generic and Zag will auto-infer the types from `normalizeProps`.

  **For Vue and Solid**

  ```diff
  -api.connect<PropTypes>(state, send, normalizeProps)
  +api.connect(state, send, normalizeProps)
  ```

  **For React**

  ```diff
  -api.connect(state, send)
  +api.connect(state, send, normalizeProps)
  ```

- [`dd547f51`](https://github.com/chakra-ui/zag/commit/dd547f512f503c8e68e178aca91ed27fd9c82b46) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Update naming convention for initial state property

* [`664e61f9`](https://github.com/chakra-ui/zag/commit/664e61f94844f0405b7e646e4a30b8f0f737f21c) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Pin dependency versions

* Updated dependencies [[`1abed11b`](https://github.com/chakra-ui/zag/commit/1abed11bda7fc56fd3f77c3b842e89a934ee3253),
  [`ef0c29cf`](https://github.com/chakra-ui/zag/commit/ef0c29cfa874f2fc990872f319affae023bb7cd4),
  [`86155fc0`](https://github.com/chakra-ui/zag/commit/86155fc039cc90fc05c9ce024f8c799e03fde11d),
  [`664e61f9`](https://github.com/chakra-ui/zag/commit/664e61f94844f0405b7e646e4a30b8f0f737f21c),
  [`3a53a1e9`](https://github.com/chakra-ui/zag/commit/3a53a1e97306a9fedf1706b95f8e38b03750c2f3),
  [`664e61f9`](https://github.com/chakra-ui/zag/commit/664e61f94844f0405b7e646e4a30b8f0f737f21c),
  [`b91a3a5c`](https://github.com/chakra-ui/zag/commit/b91a3a5cb56f4e25c46fdfcf8ff0fe0a41d75e66)]:
  - @zag-js/core@0.1.7
  - @zag-js/types@0.2.1
  - @zag-js/dom-utils@0.1.6
  - @zag-js/popper@0.1.7
  - @zag-js/remove-scroll@0.1.1

## 0.1.8

### Patch Changes

- Updated dependencies [[`2cc4185f`](https://github.com/chakra-ui/zag/commit/2cc4185f25fffc2d20a2376e5b905ace80aa585a),
  [`01a4a520`](https://github.com/chakra-ui/zag/commit/01a4a520abdc2ec88b205acee6d1b25265d5fd3f),
  [`0d2911af`](https://github.com/chakra-ui/zag/commit/0d2911af381bacc9151845e5312f62a5aa2999b2)]:
  - @zag-js/popper@0.1.6
  - @zag-js/dom-utils@0.1.5
  - @zag-js/types@0.2.0

## 0.1.7

### Patch Changes

- [`e2f62c7a`](https://github.com/chakra-ui/zag/commit/e2f62c7a30266e7e2c8b1b10b55a22fb979199ed) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Update to use local remove scroll package

* [`dfae8e35`](https://github.com/chakra-ui/zag/commit/dfae8e351f1851d91a2d5508bd1a875be180c73d) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Cleanup types

- [`f0fb09f9`](https://github.com/chakra-ui/zag/commit/f0fb09f9bfa6a7919d078c66cf14930acab6bdfd) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Fix issue where focus doesn't get set on the content when the
  popover includes non-focusable descendants

* [#114](https://github.com/chakra-ui/zag/pull/114)
  [`86b8600e`](https://github.com/chakra-ui/zag/commit/86b8600e4996386a21700deb5b04d9b82e8525eb) Thanks
  [@alexluong](https://github.com/alexluong)! - Add `open` to dialog context to allow user open dialog initially

* Updated dependencies [[`f0fb09f9`](https://github.com/chakra-ui/zag/commit/f0fb09f9bfa6a7919d078c66cf14930acab6bdfd),
  [`5982d826`](https://github.com/chakra-ui/zag/commit/5982d826126a7b83252fcd0b0479079fccb62189),
  [`e2f62c7a`](https://github.com/chakra-ui/zag/commit/e2f62c7a30266e7e2c8b1b10b55a22fb979199ed),
  [`ef2872d7`](https://github.com/chakra-ui/zag/commit/ef2872d7b291fa39c6b6293ae12f522d811a2190),
  [`63c1e3a9`](https://github.com/chakra-ui/zag/commit/63c1e3a996832ccf55e9a3cc1015d05b6ba927e2),
  [`e2f62c7a`](https://github.com/chakra-ui/zag/commit/e2f62c7a30266e7e2c8b1b10b55a22fb979199ed)]:
  - @zag-js/dom-utils@0.1.4
  - @zag-js/core@0.1.6
  - @zag-js/utils@0.1.2
  - @zag-js/remove-scroll@0.1.0
  - @zag-js/popper@0.1.5

## 0.1.6

### Patch Changes

- Updated dependencies [[`cf14f6e9`](https://github.com/chakra-ui/zag/commit/cf14f6e971460bed8a65ae061492446cd47d41c0),
  [`0d3065e9`](https://github.com/chakra-ui/zag/commit/0d3065e94d707d3161d901576421beae66c32aba),
  [`eafec246`](https://github.com/chakra-ui/zag/commit/eafec246b5dfb0c9f4cc421974a8bfa651fe81f0),
  [`587cbec9`](https://github.com/chakra-ui/zag/commit/587cbec9b32ee9e8faef5ceeefb779231b152018)]:
  - @zag-js/types@0.1.2
  - @zag-js/core@0.1.5
  - @zag-js/dom-utils@0.1.3
  - @zag-js/popper@0.1.4

## 0.1.5

### Patch Changes

- [#100](https://github.com/chakra-ui/zag/pull/100)
  [`3fe2db54`](https://github.com/chakra-ui/zag/commit/3fe2db5482de26cfa0406e32f9a1c768f56b0002) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Add `data-expanded` to popover content props

- Updated dependencies [[`3fe2db54`](https://github.com/chakra-ui/zag/commit/3fe2db5482de26cfa0406e32f9a1c768f56b0002),
  [`1274891d`](https://github.com/chakra-ui/zag/commit/1274891dc06ea869dd2db78685aab252b7baec91)]:
  - @zag-js/popper@0.1.3
  - @zag-js/dom-utils@0.1.2

## 0.1.4

### Patch Changes

- [#88](https://github.com/chakra-ui/zag/pull/88)
  [`f19a0f0b`](https://github.com/chakra-ui/zag/commit/f19a0f0b2917525f114d305a8e83196a2fc56003) Thanks
  [@xylophonehero](https://github.com/xylophonehero)! - Improve popper arrow rotation based on placement

* [#89](https://github.com/chakra-ui/zag/pull/89)
  [`a71d5d2a`](https://github.com/chakra-ui/zag/commit/a71d5d2a984e4293ebeb55944e27df20492ad1c0) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Add incremental support for shadow root in machines

* Updated dependencies [[`f19a0f0b`](https://github.com/chakra-ui/zag/commit/f19a0f0b2917525f114d305a8e83196a2fc56003),
  [`bcf247f1`](https://github.com/chakra-ui/zag/commit/bcf247f18afa5413a7b008f5ab5cbd3665350cb9),
  [`a71d5d2a`](https://github.com/chakra-ui/zag/commit/a71d5d2a984e4293ebeb55944e27df20492ad1c0)]:
  - @zag-js/popper@0.1.2
  - @zag-js/core@0.1.4
  - @zag-js/types@0.1.1

## 0.1.3

### Patch Changes

- Updated dependencies [[`c1a1d41`](https://github.com/chakra-ui/zag/commit/c1a1d4121b5add1b0195633261e9f6b1aca0ff2f),
  [`6e175c6`](https://github.com/chakra-ui/zag/commit/6e175c6a69bb70fb78ccdd77a25d83a164298888),
  [`46ef565`](https://github.com/chakra-ui/zag/commit/46ef5659a855a382af1e5b0e24d35d03466cfb22)]:
  - @zag-js/dom-utils@0.1.1
  - @zag-js/utils@0.1.1
  - @zag-js/core@0.1.3
  - @zag-js/popper@0.1.1

## 0.1.2

### Patch Changes

- [#70](https://github.com/chakra-ui/zag/pull/70)
  [`29691a7`](https://github.com/chakra-ui/zag/commit/29691a7151047bf4a62474c2be64acfc18d827ce) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Prefer `raf` over `nextTick` for focus management

- Updated dependencies [[`3f715bd`](https://github.com/chakra-ui/zag/commit/3f715bdc4f52cdbf71ce9a22a3fc20d31c5fea89)]:
  - @zag-js/core@0.1.2

## 0.1.1

### Patch Changes

- Updated dependencies [[`8ef855e`](https://github.com/chakra-ui/zag/commit/8ef855efdf8aaca4355c816cc446bc745e34ec54)]:
  - @zag-js/core@0.1.1

## 0.1.0

### Minor Changes

- [`157aadc`](https://github.com/chakra-ui/zag/commit/157aadc3ac572d2289432efe32ae3f15a2be4ad1) Thanks
  [@segunadebayo](https://github.com/segunadebayo)! - Initial release

### Patch Changes

- Updated dependencies [[`157aadc`](https://github.com/chakra-ui/zag/commit/157aadc3ac572d2289432efe32ae3f15a2be4ad1)]:
  - @zag-js/core@0.1.0
  - @zag-js/types@0.1.0
  - @zag-js/aria-hidden@0.1.0
  - @zag-js/utils@0.1.0
  - @zag-js/dom-utils@0.1.0
  - @zag-js/popper@0.1.0
