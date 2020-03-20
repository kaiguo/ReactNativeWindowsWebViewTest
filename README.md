# ReactNative for Windows WebView Test (deprecated)

## Use the example app in [react-native-webview](https://github.com/react-native-community/react-native-webview) repo instead.

## 1. Clone repo
```
git clone https://github.com/kaiguo/react-native-windows-webview-test.git
```

## 2. Restore node modules
```
yarn install
```

## 3. Copy windows files to test project
Clone `react-native-webview` fork
```
git clone https://github.com/kaiguo/react-native-webview.git
```
Checkout the working branch
```
git checkout webview-windows
```
Build
```
yarn install
yarn build
```
Copy `lib` and `windows` folder into `react-native-windows-webview-test\node_modules\react-native-webview`.

## 4. Run test app
- Run `yarn start` at `react-native-windows-webview-test` root.
- Open `react-native-windows-webview-test\windows\WebViewTest.sln` with Visual Studio and click run button.


## Known issues
- Alert with user feedback, like confirm or prompt, don't work at the moment.
- Scrolling events and enable/disable scrolling functionalities don't work.