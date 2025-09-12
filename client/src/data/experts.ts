export type Expert = { 
  id: string; 
  nameKey: string; 
  roleKey: string; 
  credentialsKey: string; 
  city: string; 
  reviewedKeys: string[]; 
  bioKey: string 
};

export const experts: Expert[] = [
  { 
    id: 'ananya-obgyn', 
    nameKey: 'expert_ananya_name', 
    roleKey: 'expert_ananya_role', 
    credentialsKey: 'expert_ananya_credentials', 
    city: 'Delhi', 
    reviewedKeys: ['review_pregnancy_care','review_safety'], 
    bioKey: 'expert_ananya_bio' 
  },
  { 
    id: 'raghav-repro', 
    nameKey: 'expert_raghav_name', 
    roleKey: 'expert_raghav_role', 
    credentialsKey: 'expert_raghav_credentials', 
    city: 'Bengaluru', 
    reviewedKeys: ['review_ivf','review_iui','review_preservation'], 
    bioKey: 'expert_raghav_bio' 
  },
  { 
    id: 'karan-psych', 
    nameKey: 'expert_karan_name', 
    roleKey: 'expert_karan_role', 
    credentialsKey: 'expert_karan_credentials', 
    city: 'Mumbai', 
    reviewedKeys: ['review_mental_health','review_support'], 
    bioKey: 'expert_karan_bio' 
  },
  { 
    id: 'ritu-nutrition', 
    nameKey: 'expert_ritu_name', 
    roleKey: 'expert_ritu_role', 
    credentialsKey: 'expert_ritu_credentials', 
    city: 'Chennai', 
    reviewedKeys: ['review_nutrition','review_supplements'], 
    bioKey: 'expert_ritu_bio' 
  },
  { 
    id: 'arjun-finance', 
    nameKey: 'expert_arjun_name', 
    roleKey: 'expert_arjun_role', 
    credentialsKey: 'expert_arjun_credentials', 
    city: 'Kochi', 
    reviewedKeys: ['review_costs','review_insurance','review_schemes'], 
    bioKey: 'expert_arjun_bio' 
  },
  { 
    id: 'meera-embryology', 
    nameKey: 'expert_meera_name', 
    roleKey: 'expert_meera_role', 
    credentialsKey: 'expert_meera_credentials', 
    city: 'Hyderabad', 
    reviewedKeys: ['review_lab_techniques'], 
    bioKey: 'expert_meera_bio'erabad', 
    reviewed: ['Lab procedures','Grading'], 
    bio: 'Advanced reproductive laboratory techniques.' 
  }
];
