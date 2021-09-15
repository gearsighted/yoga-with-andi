import sanityClient from "@sanity/client";

export default sanityClient({
    projectId: "51y4m6hf",
    dataset: "production",
    useCdn: true,
});