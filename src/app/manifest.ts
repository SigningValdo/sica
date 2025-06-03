import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SCA | Soudurechaudière-appalaches Inc.",
    short_name: "SCA",
    description:
      "Chez SCA Soudure Chaudière-Appalaches, nous offrons des services de soudure mobile de haute qualité adaptés à vos besoins spécifiques. Notre équipe expérimentée se déplace directement chez vous ou sur votre site pour réaliser des travaux de soudure avec précision et efficacité.",
    start_url: "/",
    display: "standalone",
    background_color: "#EDE2D8",
    theme_color: "#A66C3E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
