import { NativeModules } from 'react-native';

type CppModule1Type = {
  multiply(a: number, b: number): Promise<number>;
};

const { CppModule1 } = NativeModules;

export default CppModule1 as CppModule1Type;
