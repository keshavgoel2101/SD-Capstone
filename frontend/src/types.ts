export interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

export interface MedicalRecord {
  _id: string;
  originalName: string;
  fileUrl: string;
  size: number;
  createdAt: string;
  user?: { name: string };
  fileName?: string;
}

export interface Appointment {
  _id: string;
  patientId: any;
  doctorId: any;
  date: string;
  time: string;
  reason: string;
  status: string;
  notes?: string;
}

export interface MedicalDocument {
  _id: string;
  title: string;
  documentType: string;
  description?: string;
  fileUrl: string;
  createdAt: string;
}

export interface Doctor {
  _id: string;
  name: string;
  email: string;
  role: string;
}

export interface ShareDocument {
  shareId: string;
  document: MedicalDocument;
  patient: { name: string; email: string };
  permission: string;
  expiresAt?: string;
  sharedAt: string;
}
