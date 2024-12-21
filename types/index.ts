export type User = {
  fullName: string;
  email: string;
  password: string;
};

export type Brand = {
  brandName: string;
  brandID: string;
};

export type BrandResult = {
  result: [{ brandName: string; brandId: string }];
};

export type Cateogry = {
  categoryName: string;
  categoryImage: string;
};
