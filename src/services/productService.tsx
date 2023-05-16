import { IBaseListQuery } from "@encacap-group/types/dist/base";
import { ACBUILDING_CATEGORY_CODE_ENUM } from "@encacap-group/types/dist/re";
import { ProductDataType } from "@interfaces/dataTypes";
import { sample } from "lodash";
import { getCategoryByCode } from "./categoryService";
import { getHeroImages, getSiteConfig } from "./configService";

const fakeData: Partial<ProductDataType>[] = [
  {
    id: 1,
    name: "B-12H POLYOLS tạo xốp PU FOAM cách nhiệt tường nhà, mái nhà, phòng kho lạnh",
  },
  {
    id: 2,
    name: "Bông thủy tinh Glasswool",
  },
  {
    id: 3,
    name: "Cao su biến tính Vinyl - Vật liệu cách âm mới nhất hiện nay",
  },
  {
    id: 4,
    name: "Đây là sản phẩm thứ tư",
  },
];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getProducts = async (query?: IBaseListQuery) => {
  const images = await getHeroImages();

  return fakeData.map((item) => ({
    ...item,
    avatar: sample(images),
  }));
};

const getProductById = async (id: number): Promise<ProductDataType> => {
  const fakeProduct = fakeData.find((item) => item.id === id);

  if (!fakeProduct) throw new Error("Product not found");

  const fakeRootCategory = await getCategoryByCode(ACBUILDING_CATEGORY_CODE_ENUM.PRODUCT);
  const fakeCategory = sample(fakeRootCategory.children);
  const images = await getHeroImages();
  const siteConfig = await getSiteConfig();

  return {
    ...(fakeProduct as Required<ProductDataType>),
    avatar: sample(images),
    category: {
      ...fakeCategory,
      parent: fakeRootCategory,
    },
    images,
    contact: {
      id: 1,
      avatar: sample(images),
      avatarId: "1",
      name: "Nguyễn Khắc Khánh",
      phone: siteConfig.site_phone_number,
      zalo: siteConfig.site_zalo || siteConfig.site_phone_number,
      email: siteConfig.site_facebook || "hello@encacap.com",
    },
  };
};

export { getProductById, getProducts };
