https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#lists

# addf-vue-base-components-tailwind

## Project setup
```
yarn install addf-vue-base-components-tailwind
```

## Project global declaration

```

import baseComponents from 'addf-vue-base-components'

const app = createApp(App)
    .use(baseComponents)
```

# Components

## BaseButton

### - BaseButton:
> pros: tooltip, title, icon, linkTarget, color, isOutline, isRounded, isSoft, isElevated, size, scopedClasses, type, cursor, textColor
>
> slots: 
>


## BaseCard

### - BaseCard:
> pros: headerTitle
>
> slots: header, default, actions

### - BaseCardSection:
> pros: headerTitle
>
> slots:headerTitle

### - BaseSimpleCard:
> pros: title, name, borderedHeader, classes, buttonBackLeft, buttonBackLeftRoute,
>
> slots: header, cta, default



## BasePage
### - BasePageFull:
> pros : 
> 
> slots : title, cta, body
### - SettingsPageFull:
> pros :
>
> slots : title, cta, body
