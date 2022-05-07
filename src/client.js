import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "w5pit6e8",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skvB0FN4A4fm2nsG34m21hpuz5cjkcZ0lrzSHlKokhcxEXaVZzPr5ADJNBTHgrM9QyJs3vmRABOErXm6xXrQtLjmA8L5vS5bB8NSjTAA9YehxB13DI5JwORjQXekWRIbL1c6fzerFXQqmq1ay0hqM1xjPrSzSQK1iyV5W4bRKfU0mV5rmGmx",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
