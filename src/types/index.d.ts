interface Job {
  id?: string;
  title: string;
  salary: number;
  office: string;
  profile: string;
  location: string;
  worktime: string;
  created_at?: Date;
  description: string;
  technologies?: string[];
}
