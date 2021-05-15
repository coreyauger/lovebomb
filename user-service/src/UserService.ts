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
export const UserEntity = new as.ValueEntity(
  ["./proto/domain.proto"],
  "com.coreyauger.lovebomb.user.UserService",
  "user",
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
const user = UserEntity.lookupType("com.coreyauger.lovebomb.user.User");

UserEntity.setInitial((id) => user.create({ id }));

UserEntity.commandHandlers = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  SaveUser: saveUser,
};

/**
 * addPersonDetails is the entry point for the API to handle requests. In this case, the
 * code makes sure the person ID is always set to the entity ID so it can't be overwritten.
 * The state is an empty place holder.
 *
 * @param {*} userInfo The details of the person, coming from the request
 * @param {*} state An empty placeholder
 * @param {*} ctx The context object for Akka Serverless
 * @return {*} returns an empty message
 */
function saveUser(userInfo, state, ctx) {
  userInfo.id = ctx.entityId;
  console.log("com.coreyauger.lovebomb.user.UserService/SaveUser", userInfo);
  ctx.updateState(user.create(userInfo));
  return {};
}

export const GetUsersService = new as.View(
  ["./proto/domain.proto"],
  "com.coreyauger.lovebomb.user.GetUsersService",
  {
    viewId: "user",
  }
);

export const GetUserByScoreService = new as.View(
  ["./proto/domain.proto"],
  "com.coreyauger.lovebomb.user.GetUserByScoreService",
  {
    viewId: "scoreuser",
  }
);

export const AllUsersService = new as.View(
  ["./proto/domain.proto"],
  "com.coreyauger.lovebomb.user.AllUsersService",
  {
    viewId: "allusers",
  }
);
