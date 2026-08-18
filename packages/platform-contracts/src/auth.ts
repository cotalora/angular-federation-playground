export interface Session {
  userId: string;
  displayName: string;
}

export type SessionListener = (session: Session | null) => void;

export interface AuthSessionCapability {
  getSession(): Session | null;
  logout(): Promise<void>;
  subscribe(listener: SessionListener): () => void;
}

export interface AuthNavigationCapability {
  openLogin(): Promise<boolean>;
  openRegistration(): Promise<boolean>;
}

export type AuthCapability = AuthSessionCapability & AuthNavigationCapability;

export type Navigate = (path: string) => Promise<boolean>;

export interface AuthCapabilityModule {
  createAuthCapability(navigate: Navigate): AuthCapability;
}
