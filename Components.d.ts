// Components.d.ts — the complete catalog of the 36 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.Bell03) and usable directly in JSX.
import * as React from 'react';

// figma layer: "bell-03" (node 0:31)
export interface Bell03Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "card" (node 0:81)
export interface CardProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "welcome-bonus" | "check-list" | "variant3" | "variant4" | "variant5";
  /** Text content; defaults to "Set up, earn €10". */
  text1?: string;
  /** Text content; defaults to "Three steps left to unlock the\nwelcome bonus.". */
  text2?: string;
  /** Text content; defaults to "2/5". */
  text3?: string;
  /** Text content; defaults to "Processing". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "category-icon/coin" (node 0:66)
export interface CategoryIconCoinProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "category-icon/desktop" (node 0:333)
export interface CategoryIconDesktopProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "category-icon/drinks" (node 0:194)
export interface CategoryIconDrinksProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "category-icon/electronics" (node 0:198)
export interface CategoryIconElectronicsProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "category-icon/food" (node 0:183)
export interface CategoryIconFoodProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "category-icon/living" (node 0:196)
export interface CategoryIconLivingProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "category-icon/placeholder" (node 0:185)
export interface CategoryIconPlaceholderProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "category-icon/running" (node 0:345)
export interface CategoryIconRunningProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "category-icon//travel" (node 0:192)
export interface CategoryIconTravelProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "container" (node 0:274)
export interface ContainerProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "delivery" (node 0:64)
export interface DeliveryProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Discover-tab" (node 0:391)
export interface DiscoverTabProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Food". */
  text1?: string;
  /** Text content; defaults to "Travel". */
  text2?: string;
  /** Text content; defaults to "Drinks". */
  text3?: string;
  /** Text content; defaults to "Living". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}

// figma layer: "entry-point-category" (node 0:187)
export interface EntryPointCategoryProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "Hero-1-card/1" (node 0:240)
export interface Hero1Card1Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "14 %". */
  text1?: string;
  /** Text content; defaults to "until midnight\ntonight". */
  text2?: string;
  /** Text content; defaults to "Double the usual rate, sales included.\nNo code required.". */
  text3?: string;
  /** Text content; defaults to "Boost". */
  text4?: string;
}

// figma layer: "Hero-2-card/1" (node 0:323)
export interface Hero2Card1Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Comfort food, delivered.". */
  text1?: string;
}

// figma layer: "Hero-2-card/2" (node 0:335)
export interface Hero2Card2Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Upgrade \nyour desk". */
  text1?: string;
}

// figma layer: "Hero-2-card/3" (node 0:347)
export interface Hero2Card3Props {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Start \nRunning". */
  text1?: string;
}

// figma layer: "iPhone 17 - 18" (node 0:596)
export interface IPhone1718Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Merchant" (node 0:365)
export interface MerchantProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Zalando". */
  text1?: string;
  /** Text content; defaults to "4%". */
  text2?: string;
  /** Text content; defaults to "8%". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}

// figma layer: "merchant/Airbnb 2" (node 0:79)
export interface MerchantAirbnb2Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "merchant/edeka" (node 0:381)
export interface MerchantEdekaProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "merchant/Liferando 1" (node 0:377)
export interface MerchantLiferando1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "merchant/Netto" (node 0:383)
export interface MerchantNettoProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "merchant/Rewe 1" (node 0:385)
export interface MerchantRewe1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "merchant/Uber Eats 1" (node 0:379)
export interface MerchantUberEats1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "merchant/Uniclo 1" (node 0:387)
export interface MerchantUniclo1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "merchant/wolt" (node 0:356)
export interface MerchantWoltProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "merchant/Zalando 1" (node 0:358)
export interface MerchantZalando1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "merchant/Zara 1" (node 0:389)
export interface MerchantZara1Props {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "pagination" (node 0:168)
export interface PaginationProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "Play" (node 0:292)
export interface PlayProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "1" | "2" | "3";
  /** Text content; defaults to "Jelly Busters". */
  text1?: string;
  /** Text content; defaults to "4,6 ★ (1,1 K)". */
  text2?: string;
}

// figma layer: "Search" (node 0:205)
export interface SearchProps {
  className?: string;
  style?: React.CSSProperties;
  property1?: "white" | "gray";
  /** Text content; defaults to "Search for 2.200 brands". */
  text1?: string;
}

// figma layer: "sections" (node 0:258)
export interface SectionsProps {
  className?: string;
  style?: React.CSSProperties;
  /** Text content; defaults to "Title". */
  text1?: string;
  /** Text content; defaults to "See all". */
  text2?: string;
  /** Text content; defaults to "Description". */
  text3?: string;
}

// figma layer: "users-plus" (node 0:22)
export interface UsersPlusProps {
  className?: string;
  style?: React.CSSProperties;
}

declare const Bell03: React.FC<Bell03Props>;
declare const Card: React.FC<CardProps>;
declare const CategoryIconCoin: React.FC<CategoryIconCoinProps>;
declare const CategoryIconDesktop: React.FC<CategoryIconDesktopProps>;
declare const CategoryIconDrinks: React.FC<CategoryIconDrinksProps>;
declare const CategoryIconElectronics: React.FC<CategoryIconElectronicsProps>;
declare const CategoryIconFood: React.FC<CategoryIconFoodProps>;
declare const CategoryIconLiving: React.FC<CategoryIconLivingProps>;
declare const CategoryIconPlaceholder: React.FC<CategoryIconPlaceholderProps>;
declare const CategoryIconRunning: React.FC<CategoryIconRunningProps>;
declare const CategoryIconTravel: React.FC<CategoryIconTravelProps>;
declare const Container: React.FC<ContainerProps>;
declare const Delivery: React.FC<DeliveryProps>;
declare const DiscoverTab: React.FC<DiscoverTabProps>;
declare const EntryPointCategory: React.FC<EntryPointCategoryProps>;
declare const Hero1Card1: React.FC<Hero1Card1Props>;
declare const Hero2Card1: React.FC<Hero2Card1Props>;
declare const Hero2Card2: React.FC<Hero2Card2Props>;
declare const Hero2Card3: React.FC<Hero2Card3Props>;
declare const IPhone1718: React.FC<IPhone1718Props>;
declare const Merchant: React.FC<MerchantProps>;
declare const MerchantAirbnb2: React.FC<MerchantAirbnb2Props>;
declare const MerchantEdeka: React.FC<MerchantEdekaProps>;
declare const MerchantLiferando1: React.FC<MerchantLiferando1Props>;
declare const MerchantNetto: React.FC<MerchantNettoProps>;
declare const MerchantRewe1: React.FC<MerchantRewe1Props>;
declare const MerchantUberEats1: React.FC<MerchantUberEats1Props>;
declare const MerchantUniclo1: React.FC<MerchantUniclo1Props>;
declare const MerchantWolt: React.FC<MerchantWoltProps>;
declare const MerchantZalando1: React.FC<MerchantZalando1Props>;
declare const MerchantZara1: React.FC<MerchantZara1Props>;
declare const Pagination: React.FC<PaginationProps>;
declare const Play: React.FC<PlayProps>;
declare const Search: React.FC<SearchProps>;
declare const Sections: React.FC<SectionsProps>;
declare const UsersPlus: React.FC<UsersPlusProps>;
declare global {
  interface Window {
    Bell03: React.FC<Bell03Props>;
    Card: React.FC<CardProps>;
    CategoryIconCoin: React.FC<CategoryIconCoinProps>;
    CategoryIconDesktop: React.FC<CategoryIconDesktopProps>;
    CategoryIconDrinks: React.FC<CategoryIconDrinksProps>;
    CategoryIconElectronics: React.FC<CategoryIconElectronicsProps>;
    CategoryIconFood: React.FC<CategoryIconFoodProps>;
    CategoryIconLiving: React.FC<CategoryIconLivingProps>;
    CategoryIconPlaceholder: React.FC<CategoryIconPlaceholderProps>;
    CategoryIconRunning: React.FC<CategoryIconRunningProps>;
    CategoryIconTravel: React.FC<CategoryIconTravelProps>;
    Container: React.FC<ContainerProps>;
    Delivery: React.FC<DeliveryProps>;
    DiscoverTab: React.FC<DiscoverTabProps>;
    EntryPointCategory: React.FC<EntryPointCategoryProps>;
    Hero1Card1: React.FC<Hero1Card1Props>;
    Hero2Card1: React.FC<Hero2Card1Props>;
    Hero2Card2: React.FC<Hero2Card2Props>;
    Hero2Card3: React.FC<Hero2Card3Props>;
    IPhone1718: React.FC<IPhone1718Props>;
    Merchant: React.FC<MerchantProps>;
    MerchantAirbnb2: React.FC<MerchantAirbnb2Props>;
    MerchantEdeka: React.FC<MerchantEdekaProps>;
    MerchantLiferando1: React.FC<MerchantLiferando1Props>;
    MerchantNetto: React.FC<MerchantNettoProps>;
    MerchantRewe1: React.FC<MerchantRewe1Props>;
    MerchantUberEats1: React.FC<MerchantUberEats1Props>;
    MerchantUniclo1: React.FC<MerchantUniclo1Props>;
    MerchantWolt: React.FC<MerchantWoltProps>;
    MerchantZalando1: React.FC<MerchantZalando1Props>;
    MerchantZara1: React.FC<MerchantZara1Props>;
    Pagination: React.FC<PaginationProps>;
    Play: React.FC<PlayProps>;
    Search: React.FC<SearchProps>;
    Sections: React.FC<SectionsProps>;
    UsersPlus: React.FC<UsersPlusProps>;
  }
}
