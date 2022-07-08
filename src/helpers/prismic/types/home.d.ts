import { prismicText, prismicImage } from "./generals";

export interface prismicCard {
  card_title?: prismicText[];
  card_content?: prismicText[];
  card_publish_date?: string;
  card_image?: prismicImage;
}

export interface homeDocument {
  display_title?: prismicText[];
  display_description?: prismicText[];

  body?: [
    {
      items?: prismicCard[];
      primary: {
        card_container_title?: prismicText[];
        card_container_description?: prismicText[]; card_container_is_carousel: boolean;
      };
      slice_label?: null;
      slice_type?: string;
    }
  ];
}