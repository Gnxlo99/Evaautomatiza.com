
export interface Tool {
  name: string;
  affiliateUrl: string;
}

export interface Profile {
  id: string;
  name: string;
  description: string;
  mainBusinessModel: string;
  detailedGuide: string;
  recommendedTools: Tool[];
  imageUrl?: string;
  headerImageUrl?: string;
}