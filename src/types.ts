export interface Student {
  id: string;
  name: string;
  email: string;
  branch: string;
  batch: string;
  cgpa: number;
  resume: string;
  skills: string[];
  phone: string;
  rollNumber: string;
  semester: number;
  profileImage?: string;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  description: string;
  industry: string;
  website: string;
  contactEmail: string;
  contactPhone: string;
}

export interface Job {
  id: string;
  company: string;
  role: string;
  package: string;
  location: string;
  description: string;
  requirements: string[];
  deadline: string;
  status: 'open' | 'closed';
  jobType: 'fulltime' | 'intern';
  workMode: 'remote' | 'hybrid' | 'onsite';
  eligibilityCriteria: {
    minimumCGPA: number;
    allowedBranches: string[];
    allowedBatches: string[];
  };
}

export interface Application {
  id: string;
  studentId: string;
  jobId: string;
  status: 'pending' | 'shortlisted' | 'rejected' | 'selected';
  appliedAt: string;
  resumeVersion: string;
  coverLetter?: string;
}

export interface PlacementStats {
  year: number;
  totalStudents: number;
  totalPlaced: number;
  averagePackage: number;
  highestPackage: number;
  topRecruiters: string[];
  branchWiseStats: {
    branch: string;
    placed: number;
    total: number;
    averagePackage: number;
  }[];
}
