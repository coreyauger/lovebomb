import Instagram from "instagram-web-api";
import dotenv from "dotenv";
import { User, UserServiceClient } from "./proto/user-service";
import { credentials, ServiceError } from "@grpc/grpc-js";
import { google } from "./google/protobuf/empty";
import {
  LovebombServiceClient,
  Lovebomb,
  Lovebomb_MediaType,
} from "./proto/lovebomb-service";

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

const toLovebomb = (x: any) =>
  ({
    id: x.id,
    typeName:
      x.__typename == "GraphVideo"
        ? Lovebomb_MediaType.VIDEO
        : Lovebomb_MediaType.IMAGE,
    dimensions: {
      ...x.dimensions,
    },
    displayUrl: x.display_url,
    displayResource: x.display_resources.map((dr: any) => ({
      src: dr.src,
      config: {
        width: dr.config_width,
        height: dr.config_height,
      },
    })),
    accessibilityCaption: x.accessibility_caption || "",
    hasAudio: x.has_audio || false,
    videoUrl: x.video_url || "",
    shortcode: x.shortcode,
    videoDuration: x.video_duration || 0,
    title: x.title || "",
    thumbnailSrc: x.thumbnail_src || "",
    owner: {
      username: x.owner.username,
      id: x.owner.id,
      profilePicUrl: x.owner.profile_pic_url,
      fullName: x.owner.full_name,
    },
    videoViewCount: x.video_view_count || 0,
  } as Lovebomb);

const client = new Instagram({ username, password });

(async () => {
  const userClient = new UserServiceClient(
    "plain-feather-8545.us-east1.apps.akkaserverless.dev:443",
    credentials.createSsl()
  );
  const lovebombClient = new LovebombServiceClient(
    "wispy-sun-2887.us-east1.apps.akkaserverless.dev:443",
    credentials.createSsl()
  );

  await client.login();
  const profile = await client.getProfile();
  //console.log(profile);

  const lovebombs = await client.getPhotosByHashtag({ hashtag: "lovebomb" });
  lovebombs.hashtag.edge_hashtag_to_media.edges.map(async (post: any) => {
    console.log(post);
    console.log(post.node.owner);
    const media = await client.getMediaByShortcode({
      shortcode: post.node.shortcode,
    });

    console.log("**", media);
    console.log("##", toLovebomb(media));
    lovebombClient.saveLovebomb(
      toLovebomb(media),
      (err: ServiceError, respons: google.protobuf.Empty) => {
        console.log("ERROR?", err);
      }
    );
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
