export interface User {
  id: string;
  email: string;
  name: string;
  notificationTime?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
}

export interface NotificationTime {
  time: string;
}