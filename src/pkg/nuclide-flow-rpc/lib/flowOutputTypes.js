/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @format
 */

/* FLOW STATUS */

export type FlowStatusOutput = {
  passed: boolean,
  flowVersion: string,
  errors: Array<FlowStatusError>,
};

export type FlowStatusError = {
  level: 'error' | 'warning',
  // e.g. parse, infer, maybe others?
  kind: string,
  message: Array<FlowStatusErrorMessageComponent>,
  operation?: FlowStatusErrorMessageComponent,
  extra?: Array<{
    message: Array<FlowStatusErrorMessageComponent>,
  }>,
};

export type FlowStatusErrorMessageComponent = {
  descr: string,
  loc?: FlowLoc,
  // The old path, line, etc. fields also currently exist here, but they are deprecated in favor of
  // `loc`.
};

export type FlowLoc = {
  // file path
  source: string,
  start: FlowPoint,
  end: FlowPoint,
};

export type FlowLocNoSource = {
  start: FlowPoint,
  end: FlowPoint,
};

export type FlowPoint = {
  column: number,
  line: number,
};

/* AUTOCOMPLETE */

export type FlowAutocompleteItem = {
  name: string,
  type: string,
  func_details: ?{
    return_type: string,
    params: Array<{name: string, type: string}>,
  },
  path: string,
  line: number,
  endline: number,
  start: number,
  end: number,
};

export type FlowAutocompleteOutput = {
  result: Array<FlowAutocompleteItem>,
};

/* TYPE-AT-POS */

export type TypeAtPosOutput = {
  type: string,
  // If we use this property it's probably worth giving it a more precise type
  reasons: Array<mixed>,
  loc: FlowLoc,
};
