https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#lists

# addf-vue-base-components ++gt2

## Project setup
```
yarn add @addf/addf-vue-base-components
```

## Project global declaration

```
import '@addf/addf-vue-base-components/dist/index.css'
import baseComponents from '@addf/addf-vue-base-components'

const app = createApp(App)
    .use(baseComponents)
```

# Components

## BasePage
### - BasePageFull:
> pros :
>
> slots : title, cta, body## BasePage
### - SettingsPageFull:
> pros :
>
> slots : title, cta, body
### - BasePageFull:
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

## BaseTable

### - BaseTable:
> pros: titles
rows,
isBordered,
isHoverable,
isSmallTable,
isResponsive,
isStriped,
theadRowClasses,
>
> slots:

### - BaseContentTable:
> pros: 
columns,
rowClick,
redirect_to_field,
search,
rows,
modelList,
isBordered,
isHoverable,
isSmallTable,
isResponsive,
isStriped,
theadRowClasses
>
> slots:

### - BaseThComponent:
> pros: column, thClasses, currentSort, width,
>
> slots:
### - BaseTableCell:
> pros: model, column
>
> slots:
### - ColumnVisibilityDropDownComponent:
> pros:
modelValue,
>
> slots:
## BaseActivityTable

### - LogTableRow:
> pros: values,
>
> slots:
### - LogTable:
> pros: model,
>
> slots:
### - ActivityTableRow:
> pros: indexValue, activity
>
> slots:
### - ActivityTable:
> pros: activities,
>
> slots:

## BaseTabs

### - BaseSimpleTab:
> pros:
tabs
>
> slots:

## DropDownFiles
### - DropdownStatus:
> pros:
options,
current,
displayChevron,
label,
with_label,
icon,
trackBy,
color,
btnStyle
>
> slots:
### - DropDownColoredStatus:
> pros:
options,
current,
color_attribute,
icon,
with_label,
displayChevron,
btnStyle
>
> slots:
### - DropdownTaskStatusSquare:
> pros:
options,
current,
label,
icon,
trackBy,
color,
btnStyle
>
> slots:
### - DropdownWorkStatus:
> pros:
options,
current
>
> slots:

## BaseToast
### - ToastUndoComponent:
> pros: text,
>
> slots:

## FileDrop
### - BaseFileDropComponent:
```
 !!! dépendance avec axios via apiClient. 
 
import apiClient from '@u/apiClient'
'@u': path.resolve(__dirname, 'src/utils')
```
> pros: url,
>
> slots:

## BaseIFramePDF
### - IFramePdf:
> pros: src,
>
> slots:

## BaseSwitch
### - BaseSwitch:
> pros: modelValue, label, name
>
> slots:

## - BaseLabel
### - BaseEditLabel:
> pros :
label,
required,
labelClass
>
> slots :
### - BaseShowPhoneLabel:
> pros :
label,
modelValue,
labelClass,
isVertical,
countryValue,
>
> slots :
### - BaseShowLabel:
> pros :
label,
modelValue,
labelClass,
isVertical
>
> slots :
### - BaseLabel:
> pros :
content,
color,
icon,
big,
>
> slots :
> 
## BaseButton
### - BaseButton:
> pros: tooltip, title, icon, linkTarget, color, isOutline, isRounded, isSoft, isElevated, size, scopedClasses, type, cursor, textColor

## BaseDatePicker

### - BaseSimpleDatePicker:
> pros: defaultValue, label, name, required, disabled, canTypeDateManually, clearButtonVisible, viewType, monthFormat, weekFormat, startingDayOfTheWeek, format, groupClass, labelClass, errors
>
> slots:

## - BaseInput
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
### - BaseInputMasked:
> pros :
name,
value,
disabled,
required,
type,
placeholder,
label,
groupClass,
labelClass,
mask,
token,
inputClass,
errors
>
> slots :
### - BaseDateInput:
> pros :
errors,
event,
format,
required,
getInputValue,
placeholder,
label,
name,
index,
disabled,
value,
errors
>
> slots : 
### - BaseTimeInput:
> pros :
errors
event
getInputValue
placeholder
label
name
index
value
>
> slots : 
### - BaseButtonInput:
> pros :
isClickable,
buttonFunction,
icon,
name,
value,
disabled,
required,
placeholder,
label,
errors,
type,
parseType,
inputClass,
min,
max
>
> slots :
### - BasePhoneInput:
> pros :
name,
label,
model,
countryPlaceholder,
numberPlaceholder,
errors,
countries,
disabled,
>
> slots : 
### - BaseSearchInput:
> pros :
groupClass
>
> slots : 
### - BaseTextArea:
> pros :
name
value
disabled
required
placeholder
label
errors
>
> slots : 
## - BaseCheckbox
### - BaseCheckbox
> pros :
label,
name,
errors,
disabled,
required,
value,
>
> slots : 
### - BaseSimpleCheckBoxGroup
> pros :
options,
name,
label,
defaultValue,
translationExtention,
translatable,
attributeLabel,
errors,
trackBy,
>
> slots : 
##BaseRadio
### - BaseRadioGroup
> pros :
options,
value,
name,
groupClass,
disabled,
>
> slots:
### - BaseBooleanRadioGroup
> pros :
name,
label,
defaultValue,
disabled,
required,
extra_id,
errors,
isVertical
>
> slots:
### - BaseSimpleRadioGroup
> pros :
options,
name,
label,
defaultValue,
translationExtention,
isReturningKey,
isShowingKey,
attributeLabel,
trackBy,
translatable,
disabled,
required,
extra_id,
errors,
isVertical
>
> slots:
## - BaseSelect
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
### - BaseSelectSimpleAjax:

```
 !!! dépendance avec axios via apiClient. 
 
import apiClient from '@u/apiClient'
'@u': path.resolve(__dirname, 'src/utils')
```
> pros :
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
fullModelResponse
>
> slots :
### - SelectCompanySimple:
> pros :
errors,
getInputValue,
metadata,
model,
permission
>
> slots :
### - SelectCompanieMultiple:
> pros :
errors,
getInputValue,
metadata,
defaultValue,
permission
>
> slots :
### - SelectCustomer:
> pros :
errors,
model,
permission,
getInputValue,
metadata,
name
>
> slots :
### - SelectLanguage:
> pros :
errors,
getInputValue,
metadata,
model,
permission
>
> slots :
### - SelectUserSimple:
> pros :
errors,
getInputValue,
metadata,
permission,
model,
label,
name
>
> slots :
### - SelectEventType:
> pros :
errors,
model,
getInputValue,
metadata,
permission
>
> slots :

## - DynamicForm
### - DynamicFormInput:
> pros :
question,
questionIndex,
radioTrackBy,
classLabel,
vertical_align,
typeInput,
defaultValue,
classes,
>
> slots :
### - SelectSettingsDefaultMessage:
> pros :
errors,
getInputValue,
options,
label,
placeholder,
required,
model
>
> slots :
## - BaseShowEditFormInput
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
### - BaseShowEditInputButton:
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
buttonLabel,
buttonColor,
isOutline,
isRounded,
isSoft,
isElevated,
size,
buttonIcon,
buttonFunction
>
> slots :
### - BaseShowEditTreeInput:
> pros :
firstName,
secondName,
thirdName,
firstLabel,
secondLabel,
thirdLabel,
legend,
firstValue,
secondValue,
thirdValue,
editionMode
>
> slots :
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
### - BaseShowEditPhoneInput:
> pros :
countryValue,
numberValue,
editionMode,
name,
label,
countryPlaceholder,
numberPlaceholder,
errors,
metadata,
required
>
> slots :
## - BaseShowEditFormSelect
### - BaseShowEditSelectAjax:
```
 !!! dépendance avec axios via apiClient. 
 
import apiClient from '@u/apiClient'
'@u': path.resolve(__dirname, 'src/utils')
```
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
### - BaseBankShowEditSelectSimple:
> pros :
editionMode,
modelValue,
trackBy,
attributeLabel,
label,
name,
errors,
metadata,
required,
searchable
>
> slots : 
### - BaseCompanyShowEditSelectSimple:
> pros :
editionMode,
modelValue,
trackBy,
attributeLabel,
label,
name,
errors,
metadata,
required,
searchable
>
> slots : 
### - BaseCountryShowEditSelectSimple:
> pros :
editionMode,
modelValue,
trackBy,
attributeLabel,
label,
name,
errors,
metadata,
required,
searchable
>
> slots : 
### - BaseCustomerShowEditSelectSimple:
> pros :
editionMode,
modelValue,
trackBy,
attributeLabel,
label,
name,
errors,
metadata,
required,
searchable
>
> slots : 
### - BaseLanguageShowEditSelectSimple:
> pros :
editionMode,
modelValue,
trackBy,
attributeLabel,
label,
name,
errors,
metadata,
required,
searchable,
>
> slots : 
### - BaseUserShowEditSelectSimple:
> pros :
editionMode,
modelValue,
trackBy,
attributeLabel,
label,
name,
errors,
metadata,
required,
searchable,
data
>
> slots :
### - BaseEventTypeShowEditSelectSimple:
> pros :
editionMode,
modelValue,
trackBy,
attributeLabel,
label,
name,
errors,
metadata,
required,
searchable,
>
> slots : 
### - BaseCompanyShowEditSelectMultiple:
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
### - BaseLanguageShowEditSelectMultiple:
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
### - BaseDocShowEditSelectMultiple:
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
## - BaseShowEditCheckbox
### - BaseSimpleShowEditCheckboxGroup:
> pros :
options,
name,
label,
translationExtention,
translatable,
attributeLabel,
trackBy,
editionMode,
modelValue,
required,
errors,
>
> slots : 
## - BaseShowEditRadioGroup
### - BaseTrueFalseShowEditRadioGroup:
> pros :
name,
label,
editionMode,
defaultValue,
modelValue,
required,
extra_id,
errors,
groupClass,
labelClass,
>
> slots : 
## - BaseShowEditDatePicker
### - BaseShowEditDatePicker:
> pros :
editionMode,
modelValue,
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
errors,
>
> slots : 
