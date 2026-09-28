export type Language = 'fr' | 'ar' | 'en';

export interface MultiLangText {
  fr: string;
  ar: string;
  en: string;
}

export interface ProfileData {
  public_name: string;
  professional_name: string;
  tagline: MultiLangText;
  short_bio: MultiLangText;
  long_bio: MultiLangText;
  disciplines: {
    id: string;
    number: string;
    title: MultiLangText;
    description: MultiLangText;
    image: string;
  }[];
  education: MultiLangText[];
  location: MultiLangText;
  officialDomain: string;
  heroBadge: MultiLangText;
}

export interface SocialAccount {
  id: string;
  platform: 'instagram' | 'tiktok' | 'youtube' | 'facebook' | 'other';
  label: string;
  handle: string;
  url: string;
  is_verified: boolean;
  is_public: boolean;
  sort_order: number;
}

export interface StatItem {
  id: string;
  platform: string;
  metric: string;
  numeric_value: number;
  display_value: string;
  source: 'verified_by_owner' | 'manual' | 'official_api';
  verified_at: string;
  visible_publicly: boolean;
}

export interface TVProject {
  id: string;
  slug: string;
  title: MultiLangText;
  role: MultiLangText;
  year: string;
  description: MultiLangText;
  details: MultiLangText;
  coverImage: string;
  backdropImage: string;
  gallery: string[];
  featured: boolean;
  published: boolean;
  sort_order: number;
  externalUrl?: string;
}

export interface BeautyArticle {
  id: string;
  slug: string;
  category: 'skin' | 'makeup' | 'hair' | 'fragrance' | 'beauty' | 'lifestyle';
  title: MultiLangText;
  excerpt: MultiLangText;
  content: MultiLangText;
  coverImage: string;
  readTime: MultiLangText;
  publishedAt: string;
  isSponsored: boolean;
  sponsorName?: string;
  status: 'published' | 'draft';
  tags: string[];
}

export interface GalleryItem {
  id: string;
  title: MultiLangText;
  category: 'editorial' | 'beauty' | 'fashion' | 'television' | 'events' | 'backstage' | 'portraits';
  imageUrl: string;
  altText: MultiLangText;
  credit: string;
  copyright: string;
  date: string;
  featured: boolean;
  sort_order: number;
}

export type CollaborationStatus =
  | 'NEW'
  | 'REVIEWING'
  | 'CONTACTED'
  | 'PROPOSAL'
  | 'ACCEPTED'
  | 'DECLINED'
  | 'COMPLETED'
  | 'ARCHIVED';

export interface CollaborationRequest {
  id: string;
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  country: string;
  projectType: string;
  description: string;
  deliverables: string;
  desiredDate: string;
  budgetRange: string;
  website?: string;
  socialUrl?: string;
  attachmentName?: string;
  status: CollaborationStatus;
  createdAt: string;
  internalNotes?: string;
}

export interface ContactRequest {
  id: string;
  type: 'general' | 'professional';
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'NEW' | 'READ' | 'ARCHIVED';
}

export interface PressRequest {
  id: string;
  name: string;
  media: string;
  email: string;
  country: string;
  topic: string;
  deadline: string;
  message: string;
  createdAt: string;
  status: 'NEW' | 'REPLIED' | 'ARCHIVED';
}

export interface SiteSettings {
  siteTitle: string;
  tagline: string;
  generalEmail: string;
  collabEmail: string;
  pressEmail: string;
  maintenanceMode: boolean;
  maintenanceMessage: string;
  defaultOgImage: string;
}

export interface AuditLogItem {
  id: string;
  user: string;
  action: string;
  entity: string;
  entityId: string;
  timestamp: string;
}
