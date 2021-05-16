/**
 * Copyright 2021 Lightbend Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as as from "@lightbend/akkaserverless-javascript-sdk";

/**
 * The PersonEntity uses the ValueEntity state model in Akka Serverless.
 * This function creates a new Value Entity state model for the contact entity.
 */
export const LovebombEntity = new as.ValueEntity(
  ["./proto/lovebomb-service.proto"],
  "com.coreyauger.lovebomb.lovebomb.LovebombService",
  "lovebomb",
  {
    // A snapshot will be persisted every time this many events are emitted.
    snapshotEvery: 100,

    // The directories to include when looking up imported protobuf files.
    includeDirs: ["./"],

    // Whether serialization of primitives should be supported when serializing events
    // and snapshots.
    serializeAllowPrimitives: true,

    // Whether serialization should fallback to using JSON if the state can't be serialized
    // as a protobuf.
    serializeFallbackToJson: true,
  }
);

/**
 * Create types to work with events
 */
const lovebomb = LovebombEntity.lookupType(
  "com.coreyauger.lovebomb.lovebomb.Lovebomb"
);

LovebombEntity.setInitial((id) => lovebomb.create({ id }));

LovebombEntity.commandHandlers = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  SaveLovebomb: saveLovebomb,
};

/**
 * add a lovebomb
 *
 * @param {*} userInfo The details of the lovebomb, coming from the request
 * @param {*} state An empty placeholder
 * @param {*} ctx The context object for Akka Serverless
 * @return {*} returns an empty message
 */
function saveLovebomb(lbInfo, state, ctx) {
  lbInfo.id = ctx.entityId;
  console.log("com.coreyauger.lovebomb.user.UserService/SaveUser", lbInfo);
  ctx.updateState(lovebomb.create(lbInfo));
  return {};
}

export const GetLovebombService = new as.View(
  ["./proto/lovebomb-service.proto"],
  "com.coreyauger.lovebomb.lovebomb.GetLovebombService",
  {
    viewId: "lovebomb",
  }
);

export const GetLovebombByUsernameService = new as.View(
  ["./proto/lovebomb-service.proto"],
  "com.coreyauger.lovebomb.lovebomb.GetLovebombByUsernameService",
  {
    viewId: "usernamelovebomb",
  }
);

export const AllLovebombService = new as.View(
  ["./proto/lovebomb-service.proto"],
  "com.coreyauger.lovebomb.lovebomb.AllLovebombService",
  {
    viewId: "alllovebomb",
  }
);
