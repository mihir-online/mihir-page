export interface ContactInfo {
  email: string;
  github: {
    username: string;
    url: string;
  };
  linkedin: {
    username: string;
    url: string;
  };
  twitter?: {
    username: string;
    url: string;
  };
  instagram?: {
    username: string;
    url: string;
  };
} 