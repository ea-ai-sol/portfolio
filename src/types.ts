export interface Experience {
  company: string;
  location: string;
  roles: Role[];
  logo?: string;
}

export interface Role {
  title: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  year: string;
  institution: string;
  details?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  logo?: string;
}
