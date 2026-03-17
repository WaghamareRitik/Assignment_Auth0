export interface AuthUser {
  sub: string;
  email?: string;
  name?: string;
}

export interface GraphContext {
  user?: AuthUser;
}
