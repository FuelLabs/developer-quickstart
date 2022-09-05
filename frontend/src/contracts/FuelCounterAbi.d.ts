/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  BytesLike,
  BigNumberish,
  InvokeFunction,
} from "fuels";

interface FuelCounterAbiInterface extends Interface {
  functions: {
    count: FunctionFragment;
    increment: FunctionFragment;
  };

  encodeFunctionData(functionFragment: "count", values?: undefined): Uint8Array;
  encodeFunctionData(
    functionFragment: "increment",
    values?: undefined
  ): Uint8Array;

  decodeFunctionData(functionFragment: "count", data: BytesLike): DecodedValue;
  decodeFunctionData(
    functionFragment: "increment",
    data: BytesLike
  ): DecodedValue;
}

export class FuelCounterAbi extends Contract {
  interface: FuelCounterAbiInterface;
  functions: {
    count: InvokeFunction<[], bigint>;

    increment: InvokeFunction<[], void>;
  };
}