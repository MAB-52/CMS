export interface UserSummary {
  id: number;
  fullName: string;
  email: string;
  role: string;
}

export interface JwtPayload {
  sub: string;
  userId: number;
  email: string;
  role: string;
  exp: number;
  iat: number;
}
