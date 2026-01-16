export interface FeatureItem {
    id: number;
    title: string;
    description: string;
    icon: string;
    gradient: string;
    shadow: string;
    largeIcon: string;
}

export interface SocialLink {
    name: string;
    icon?: string;
    svgPath?: string;
    href: string;
    colorClass: string;
    isLarge?: boolean;
}