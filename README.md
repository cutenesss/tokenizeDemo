# Tokenize API Demo
## This base uses typescript, redux, redux sagas with theme react-native-ui-kitten!

## Features

- common component like Text, Button has been added to common folder
- roboto-regular fonts
- react-native-tab-view
- apisauce, axios (token handle, error handle)
- react-native-root-toast
- validate using only regex
- translation with i18next and react-i18next

## Folder
- assets: Contains image icons for each screen, with a common folder for icon with various places to be used
- src: main source code
    + apis: Contains URL constant, network instance and error handle
    + common: Contains common component to use
    + helpers: Contains various utilities functions like scale handler, asyncStorage, colors, constants,...
    + navigation: Create navigation instance
    + redux: Create store configuration, action, reducers, sagas
    + screen: Having screens of the application
    + translations: Configuration for i18next
