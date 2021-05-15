import Instagram from "instagram-web-api";
import dotenv from "dotenv";
import { User, UserServiceClient } from "./proto/user-service";
import { credentials, ServiceError } from "@grpc/grpc-js";
import { google } from "./google/protobuf/empty";

dotenv.config();

const { username, password } = process.env;

console.log("username", username);

const toLoveBombUser = (x: any) =>
  ({
    username: x.username,
    /** IG fields */
    biography: x.biography,
    externalUrl: x.external_url || "",
    followedByCount: x.edge_followed_by.count,
    fbid: x.fbid,
    followCount: x.edge_follow.count,
    fullName: x.full_name,
    id: x.id,
    isBusinessAccount: x.is_business_account,
    isProfessionalAccount: x.is_professional_account,
    isJoinedRecently: x.is_joined_recently,
    categoryName: x.category_name || "",
    profilePicUrl: x.profile_pic_url || "",
    profilePicUrlHd: x.profile_pic_url_hd || "",
    shouldShowCategory: x.should_show_category,
    /** extended fields */
    bomberScore: 0,
  } as User);

const client = new Instagram({ username, password });

(async () => {
  const userClient = new UserServiceClient(
    "plain-feather-8545.us-east1.apps.akkaserverless.dev:443",
    credentials.createSsl()
  );

  userClient.saveUser(
    {
      username: "testing-123",
      /** IG fields */
      biography: "biography",
      externalUrl: "externalUrl",
      followedByCount: 10,
      fbid: "1234",
      followCount: 1,
      fullName: "Mr Test",
      id: "id",
      isBusinessAccount: false,
      isProfessionalAccount: false,
      isJoinedRecently: true,
      categoryName: "categoryName",
      profilePicUrl: "",
      profilePicUrlHd: "",
      shouldShowCategory: true,
      /** extended fields */
      bomberScore: 0,
    } as User,
    (err: ServiceError, respons: google.protobuf.Empty) => {
      console.log("ERROR?", err);
    }
  );

  await client.login();
  const profile = await client.getProfile();

  console.log(profile);

  const lovebombs = await client.getPhotosByHashtag({ hashtag: "lovebomb" });
  lovebombs.hashtag.edge_hashtag_to_media.edges.map(async (post: any) => {
    console.log(post);
    console.log(post.node.owner);
    const media = await client.getMediaByShortcode({
      shortcode: post.node.shortcode,
    });

    console.log("**", media);
    const owner = await client.getUserByUsername({
      username: media.owner.username,
    });

    console.log("~~", owner);
    userClient.saveUser(
      toLoveBombUser(owner),
      (err: ServiceError, respons: google.protobuf.Empty) => {
        console.log("ERROR?", err);
      }
    );
  });
})();
