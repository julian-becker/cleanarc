import { TurboModuleRegistry } from 'react-native-tscodegen-types';
// tslint:disable-next-line
export default TurboModuleRegistry.getEnforcing('SampleTurboModule');
/*
C++ Code Generation Configuration:
  SampleTurboModule (turboModule.ts) -> NativeSampleTurboModuleCxxSpecJSI
  PlaygroundModule  (build.ts)       -> #include <react/modules/PlaygroundModule/NativeModules.h> in NativeModules.cpp
*/
