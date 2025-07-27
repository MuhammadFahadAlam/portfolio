export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      about: {
        Row: {
          id: string
          user_id: string
          description: string | null
          phone: string | null
          address: string | null
          linkedin: string | null
          github: string | null
        }
        Insert: {
          id?: string
          user_id: string
          description?: string | null
          phone?: string | null
          address?: string | null
          linkedin?: string | null
          github?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          description?: string | null
          phone?: string | null
          address?: string | null
          linkedin?: string | null
          github?: string | null
        }
      }
      accomplishment: {
        Row: {
          id: string
          user_id: string
          title: string
          description: string | null
          issuer: string | null
          issue_date: string | null
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          description?: string | null
          issuer?: string | null
          issue_date?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          description?: string | null
          issuer?: string | null
          issue_date?: string | null
        }
      }
      certification: {
        Row: {
          id: string
          user_id: string
          name: string
          issuer: string | null
          issue_date: string | null
          expiry_date: string | null
          credential_url: string | null
          credential_id: string | null
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          issuer?: string | null
          issue_date?: string | null
          expiry_date?: string | null
          credential_url?: string | null
          credential_id?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          issuer?: string | null
          issue_date?: string | null
          expiry_date?: string | null
          credential_url?: string | null
          credential_id?: string | null
        }
      }
      certification_skill: {
        Row: {
          id: string
          certificate_id: string
          skill_id: string
        }
        Insert: {
          id?: string
          certificate_id: string
          skill_id: string
        }
        Update: {
          id?: string
          certificate_id?: string
          skill_id?: string
        }
      }
      education: {
        Row: {
          id: string
          user_id: string
          school: string
          degree: string | null
          field_of_study: string | null
          start_date: string | null
          end_date: string | null
          grade: string | null
          description: string | null
        }
        Insert: {
          id?: string
          user_id: string
          school: string
          degree?: string | null
          field_of_study?: string | null
          start_date?: string | null
          end_date?: string | null
          grade?: string | null
          description?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          school?: string
          degree?: string | null
          field_of_study?: string | null
          start_date?: string | null
          end_date?: string | null
          grade?: string | null
          description?: string | null
        }
      }
      education_skill: {
        Row: {
          id: string
          education_id: string
          skill_id: string
        }
        Insert: {
          id?: string
          education_id: string
          skill_id: string
        }
        Update: {
          id?: string
          education_id?: string
          skill_id?: string
        }
      }
      experience: {
        Row: {
          id: string
          user_id: string
          title: string
          type: string | null
          company: string | null
          start_date: string | null
          end_date: string | null
          location: string | null
          description: string | null
        }
        Insert: {
          id?: string
          user_id: string
          title: string
          type?: string | null
          company?: string | null
          start_date?: string | null
          end_date?: string | null
          location?: string | null
          description?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          title?: string
          type?: string | null
          company?: string | null
          start_date?: string | null
          end_date?: string | null
          location?: string | null
          description?: string | null
        }
      }
      experience_skill: {
        Row: {
          id: string
          experience_id: string
          skill_id: string
        }
        Insert: {
          id?: string
          experience_id: string
          skill_id: string
        }
        Update: {
          id?: string
          experience_id?: string
          skill_id?: string
        }
      }
      project_skill: {
        Row: {
          id: string
          project_id: string
          skill_id: string
        }
        Insert: {
          id?: string
          project_id: string
          skill_id: string
        }
        Update: {
          id?: string
          project_id?: string
          skill_id?: string
        }
      }
      projects: {
        Row: {
          id: string
          user_id: string
          name: string
          description: string | null
          start_date: string | null
          end_date: string | null
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          description?: string | null
          start_date?: string | null
          end_date?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          description?: string | null
          start_date?: string | null
          end_date?: string | null
        }
      }
      skills: {
        Row: {
          id: string
          name: string
          description: string | null
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
        }
      }
      user_skill: {
        Row: {
          id: string
          user_id: string
          skill_id: string
        }
        Insert: {
          id?: string
          user_id: string
          skill_id: string
        }
        Update: {
          id?: string
          user_id?: string
          skill_id?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
} 