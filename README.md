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


## BaseDatePicker

### - BaseSimpleDatePicker:
> pros: defaultValue,
label,
name,
required,
disabled,
canTypeDateManually,
clearButtonVisible,
viewType,
monthFormat,
weekFormat,
startingDayOfTheWeek,
format,
groupClass,
labelClass,
errors
>
> slots:


## BasePage
### - BasePageFull:
> pros : 
> 
> slots : title, cta, body## BasePage
### - SettingsPageFull:
> pros :
>
> slots : title, cta, body
> ### - BasePageFull:
> pros : name
value
disabled
required
type
parseType
placeholder
label
groupClass
labelClass
inputClass
errors
min
max
>
> slots : title, cta, body

## - BaseForm
### - BaseInput:
> pros : 
name,
value,
disabled,
required,
type,
parseType,
placeholder,
label,
groupClass,
labelClass,
inputClass,
errors,
min,
max,
>
> slots : 

## - BaseShowEditForm
### - BaseShowEditInput:
> pros :
name,
editionMode,
id,
label,
modelValue,
type,
errors,
groupClass,
inputClass,
required,
placeholder,
disabled,
min,
max,
parseType,
>
> slots : 
## - BaseShowEditForm
### - BaseShowEditTextArea:
> pros :
editionMode,
id,
label,
modelValue,
errors,
groupClass,
required,
placeholder,
disabled,
>
> slots : 
## - BaseShowEditForm
### - BaseShowEditDateInput:
> pros :
editionMode,
name,
required,
placeholder,
label,
groupClass,
labelClass,
mask,
inputClass,
errors,
modelValue,
>
> slots : 
## - BaseShowEditForm
### - BaseShowEditTimeInput:
> pros :
editionMode,
name,
required,
placeholder,
label,
groupClass,
mask,
inputClass,
errors,
modelValue,
>
> slots : 
## - BaseShowEditForm
### - BaseShowEditSelectSimple:
> pros :
editionMode,
modelValue,
trackBy,
attributeLabel,
label,
name,
placeholder,
groupClass,
labelClass,
selectClass,
errors,
options,
disabled,
required,
searchable
>
> slots : 
## - BaseLabel
### - BaseEditLabel:
> pros :
label,
required,
labelClass
>
> slots : 
## - BaseLabel
### - BaseShowLabel:
> pros :
label,
modelValue,
labelClass,
isVertical
>
> slots :
## - BaseFormSelect
### - BaseSelectSimple:
> pros :
name,
label,
placeholder,
groupClass,
labelClass,
selectClass,
errors,
options,
defaultValue,
trackBy,
attributeLabel,
disabled,
required,
searchable,
>
> slots : 
## - BaseFormSelect
### - BaseSelectMultiple:
> pros :
name,
label,
placeholder,
errors,
options,
defaultValue,
trackBy,
attributeLabel,
disabled,
required,
searchable,
>
> slots : 
## - BaseFormSelect
### - BaseSelectSimpleAjax:
> pros :
trackBy
attributeLabel
modelValue
defaultAjax
url
selectLabel
name
isRequired
isDisabled
label
selectedValue
groupClass
labelClass
fullModelResponse
>
> slots : 
## - BaseShowEditFormSelect
### - BaseSelectSimpleAjax:
> pros :
editionMode,
trackBy,
attributeLabel,
modelValue,
defaultAjax,
url,
selectLabel,
name,
isRequired,
isDisabled,
label,
selectedValue,
groupClass,
labelClass,
fullModelResponse,
>
> slots : 
## - BaseShowEditFormSelect
### - BaseShowEditSelectMultiple:
> pros :
name,
label,
placeholder,
modelValue,
errors,
metadata,
defaultValue,
trackBy,
attributeLabel,
disabled,
required,
searchable,
groupClass,
labelClass,
selectClass,
editionMode
>
> slots : 
