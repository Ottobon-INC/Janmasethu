
export type DoctorCard = {
  id: number;
  source_site: string;
  slug: string;
  name: string;
  designation?: string | null;
  image_url?: string | null;
};

export type DoctorDetail = DoctorCard & {
  specialties?: string[] | null;
  qualifications?: string | null;
  experience_years?: number | null;
  languages?: string[] | null;
  location?: string | null;
  profile_url: string;
  about_html?: string | null;
};

async function j<T>(res: Response): Promise<T> {
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json() as Promise<T>;
}

export async function fetchDoctors(): Promise<DoctorCard[]> {
  const data = await j<{ ok: boolean; results: DoctorCard[] }>(
    await fetch("/api/doctors", { credentials: "include" })
  );
  return data.results || [];
}

export async function fetchDoctor(slug: string): Promise<DoctorDetail> {
  const data = await j<{ ok: boolean; doctor: DoctorDetail }>(
    await fetch(`/api/doctors/${encodeURIComponent(slug)}`, { credentials: "include" })
  );
  return data.doctor;
}
