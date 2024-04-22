export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      c_users_info: {
        Row: {
          chat_user_id: number
          created_at: string
          user_id: string | null
        }
        Insert: {
          chat_user_id?: number
          created_at?: string
          user_id?: string | null
        }
        Update: {
          chat_user_id?: number
          created_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "c_users_info_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      chat_messages: {
        Row: {
          chat_id: number | null
          chat_user_id: number | null
          created_at: string
          id: number
          message: string | null
        }
        Insert: {
          chat_id?: number | null
          chat_user_id?: number | null
          created_at?: string
          id?: number
          message?: string | null
        }
        Update: {
          chat_id?: number | null
          chat_user_id?: number | null
          created_at?: string
          id?: number
          message?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chat_summary"
            referencedColumns: ["chat_id"]
          },
          {
            foreignKeyName: "chat_messages_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_messages_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats_summary"
            referencedColumns: ["chat_id"]
          },
          {
            foreignKeyName: "chat_messages_chat_user_id_fkey"
            columns: ["chat_user_id"]
            isOneToOne: false
            referencedRelation: "c_users_info"
            referencedColumns: ["chat_user_id"]
          }
        ]
      }
      chat_users: {
        Row: {
          chat_id: number | null
          chat_user_id: number | null
          created_at: string
          id: number
          request_accepted: boolean | null
          user_id: string | null
        }
        Insert: {
          chat_id?: number | null
          chat_user_id?: number | null
          created_at?: string
          id?: number
          request_accepted?: boolean | null
          user_id?: string | null
        }
        Update: {
          chat_id?: number | null
          chat_user_id?: number | null
          created_at?: string
          id?: number
          request_accepted?: boolean | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_users_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chat_summary"
            referencedColumns: ["chat_id"]
          },
          {
            foreignKeyName: "chat_users_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_users_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats_summary"
            referencedColumns: ["chat_id"]
          },
          {
            foreignKeyName: "chat_users_user_id_fkey"
            columns: ["chat_user_id"]
            isOneToOne: false
            referencedRelation: "c_users_info"
            referencedColumns: ["chat_user_id"]
          }
        ]
      }
      chats: {
        Row: {
          created_at: string
          id: number
          last_message: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          last_message?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          last_message?: string | null
        }
        Relationships: []
      }
      email_senttable: {
        Row: {
          contents: string | null
          created_at: string
          email: string | null
          id: number
          subject: string | null
        }
        Insert: {
          contents?: string | null
          created_at?: string
          email?: string | null
          id?: number
          subject?: string | null
        }
        Update: {
          contents?: string | null
          created_at?: string
          email?: string | null
          id?: number
          subject?: string | null
        }
        Relationships: []
      }
      feedback_form: {
        Row: {
          comments: string | null
          created_at: string
          effective: number | null
          id: number
          satisfied: number | null
          user_friendly: number | null
        }
        Insert: {
          comments?: string | null
          created_at?: string
          effective?: number | null
          id?: number
          satisfied?: number | null
          user_friendly?: number | null
        }
        Update: {
          comments?: string | null
          created_at?: string
          effective?: number | null
          id?: number
          satisfied?: number | null
          user_friendly?: number | null
        }
        Relationships: []
      }
      posts: {
        Row: {
          created_at: string
          id: number
          post_description: string | null
          post_qualities: string | null
          post_title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          post_description?: string | null
          post_qualities?: string | null
          post_title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          post_description?: string | null
          post_qualities?: string | null
          post_title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      profile: {
        Row: {
          email: string | null
          has_idea: boolean | null
          id: string
          major: string | null
          name: string | null
          previous_experience: string | null
          profile_pic: string | null
          school: string | null
          skills: string | null
        }
        Insert: {
          email?: string | null
          has_idea?: boolean | null
          id: string
          major?: string | null
          name?: string | null
          previous_experience?: string | null
          profile_pic?: string | null
          school?: string | null
          skills?: string | null
        }
        Update: {
          email?: string | null
          has_idea?: boolean | null
          id?: string
          major?: string | null
          name?: string | null
          previous_experience?: string | null
          profile_pic?: string | null
          school?: string | null
          skills?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_user_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_profile_user_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      reported_bugs: {
        Row: {
          complaint: string | null
          created_at: string
          id: number
          resolved: boolean | null
          user_reported: string | null
        }
        Insert: {
          complaint?: string | null
          created_at?: string
          id?: number
          resolved?: boolean | null
          user_reported?: string | null
        }
        Update: {
          complaint?: string | null
          created_at?: string
          id?: number
          resolved?: boolean | null
          user_reported?: string | null
        }
        Relationships: []
      }
      schools: {
        Row: {
          schools: string
          user_id: string
        }
        Insert: {
          schools: string
          user_id: string
        }
        Update: {
          schools?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "schools_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      chat_messages_view: {
        Row: {
          chat_id: number | null
          created_at: string | null
          message: string | null
          name: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "c_users_info_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_messages_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_messages_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chat_summary"
            referencedColumns: ["chat_id"]
          },
          {
            foreignKeyName: "chat_messages_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats_summary"
            referencedColumns: ["chat_id"]
          }
        ]
      }
      chat_summary: {
        Row: {
          chat_id: number | null
          last_sent: string | null
          names: string[] | null
          user_ids: string[] | null
          waiting_to_accept: boolean | null
        }
        Relationships: []
      }
      chat_view: {
        Row: {
          chat_id: number | null
          last_message: string | null
          user_ids: number[] | null
          users: number[] | null
        }
        Relationships: [
          {
            foreignKeyName: "chat_users_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_users_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chat_summary"
            referencedColumns: ["chat_id"]
          },
          {
            foreignKeyName: "chat_users_chat_id_fkey"
            columns: ["chat_id"]
            isOneToOne: false
            referencedRelation: "chats_summary"
            referencedColumns: ["chat_id"]
          }
        ]
      }
      chats_summary: {
        Row: {
          chat_id: number | null
          last_sent: string | null
          names: string[] | null
          user_ids: string[] | null
        }
        Relationships: []
      }
      post_profile_view: {
        Row: {
          created_at: string | null
          id: number | null
          name: string | null
          post_description: string | null
          post_qualities: string | null
          post_title: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
      posts_schools_view: {
        Row: {
          created_at: string | null
          post_description: string | null
          post_qualities: string | null
          post_title: string | null
          school: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      get_posts_with_school: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          created_at: string
          post_title: string
          post_description: string
          user_id: string
          post_qualities: string
          user_school: string
        }[]
      }
      getallposts: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          created_at: string
          post_title: string
          post_description: string
          user_id: string
          post_qualities: string
          user_idd: string
          email: string
          school: string
          has_idea: boolean
          name: string
          major: string
          skills: string
          previous_experience: string
        }[]
      }
      gethelloworld: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      getnumbersandfruits: {
        Args: Record<PropertyKey, never>
        Returns: {
          number: number
          fruit: string
        }[]
      }
      getposts:
        | {
            Args: Record<PropertyKey, never>
            Returns: {
              id: number
              created_at: string
              post_title: string
              post_description: string
              user_id: string
              post_qualities: string
            }[]
          }
        | {
            Args: {
              table_name: string
            }
            Returns: {
              id: number
              post_title: string
              post_description: string
              post_qualities: string
              created_at: string
              user_id: string
            }[]
          }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
