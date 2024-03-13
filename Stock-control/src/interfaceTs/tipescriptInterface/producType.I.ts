interface ProductType {
    getLongDescription(): string;
    getImages(): { [key: string]: { ThumbImg: string } };
  }