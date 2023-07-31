export type UploadFormState = {
  image: any;
  name: string;
  price: number | null;
  weight: number | null;
  tags: string;
};

export type ModalProps = {
  open: boolean;
  onClose: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  children?: React.ReactNode;
};

export type ImageSliderProps = {
  onClick: MouseEventHandler<HTMLDivElement>;
  visibleEl: number;
};

export type UserType = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  address?: string;
  city?: string;
  state?: string;
  phone?: string;
  emailVeridied: boolean;
  accessToken: string;
};

export type LoginUserParams = {
  email: string;
  password: string;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  imgUrl: string;
  category: string;
};

export interface Subscription {
  _id?: string;
  type: string;
  plan:
    | {
        bagCount: number;
        regularity: string;
        total: number;
      }
    | string;
}

export type CartItem = Product & {
  _id?: string;
  quantity: number;
  total: number;
};

export type CartState = {
  cartItems: CartItem[];
  subscriptions: Subscription[];
  getCart: () => void;
  getSubscriptions: () => void;
  addSubscription: (item: Subscription) => void;
  removeSubscription: (itemId: string | undefined) => void;
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (id: string, action: "increase" | "decrease") => void;
  clearCart: () => void;
};
