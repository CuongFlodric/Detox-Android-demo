# React Native E2E Testing with Detox

A blank canvas React Native project for running end-to-end tests on Android with Detox. This was forked from [Dane Grant's repo here](https://github.com/danecando/JSM-Detox/tree/tests).


## Setup

```bash
git clone https://github.com/charliewhu/React-Detox-Base.git
cd React-Detox-Base
yarn
```

## Running

### Android

Run this command (and keep it running):

```bash
yarn start
```

Then, in a new terminal window:

```bash
yarn build
yarn detox
```
These are custom commands which will build a debug .apk and then run detox test on the build.

## Resources

- [Detox docs](https://wix.github.io/Detox/docs/introduction/getting-started/)
- [React Native TDD (CodingItWrong)](https://www.youtube.com/playlist?list=PLXXnezSEtvNPZroRdvjhEVzOhURl572Lf)
- [LearnTDDIn React Native](https://learntdd.in/react-native/)
- [OutsideIn Frontend Development](https://outsidein.dev/)
- [TestDrivenReact Resources](https://testdrivenreact.com/docs/resources/)
- [ReactNativeTesting.io](https://reactnativetesting.io/)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [https://github.com/wix/Detox](https://github.com/wix/Detox)
- [https://medium.com/wix-engineering/detox-writing-stable-test-suites-372c9d537184](https://medium.com/wix-engineering/detox-writing-stable-test-suites-372c9d537184)
- [React Testing Library Tutorial (NetNinja)](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ)
