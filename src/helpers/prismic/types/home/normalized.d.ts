interface CardType {
  title: string;
  content: string;
  image?: {
    url: string;
    alt: string;
  };
  publishDate?: string;
}

export interface CardContainerType {
  type?: string;
  title?: string;
  description?: string;
  showAsCarousel?: boolean;
  cards?: CardType[];
}