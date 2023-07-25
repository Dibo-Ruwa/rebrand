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
  id: number;
  title: string;
  price: number;
  imgUrl: string;
  category: string;
};

interface Subscription {
  id: string | undefined;
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
  quantity: number;
  total: number;
};

export type CartState = {
  cartItems: CartItem[];
  subscriptions: Subscription[];
  addSubscription: (item: Subscription) => void;
  removeSubscription: (itemId: string) => void;
  addToCart: (item: Product) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (id: number, action: "increase" | "decrease") => void;
  clearCart: () => void;
};
