export interface UserResponse {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  emailVerified: boolean;
  phoneNumber: string | null;
  isAnonymous: boolean;
  tenantId: string | null;
  providerData?: ProviderDataEntity[];
  redirectEventId?: null;
  multiFactor: MultiFactor;
}
export interface ProviderDataEntity {
  uid: string;
  displayName: string;
  photoURL: string;
  email: string;
  phoneNumber: string | null;
  providerId: string;
}
export interface StsTokenManager {
  apiKey: string;
  refreshToken: string;
  accessToken: string;
  expirationTime: number;
}
export interface MultiFactor {
  enrolledFactors?: any;
}
