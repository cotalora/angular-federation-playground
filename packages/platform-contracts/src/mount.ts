import type { AuthCapability } from "./auth";

export interface HomeDependencies {
  auth: AuthCapability;
}

export interface MfeBootstrapModule<TDependencies = unknown> {
  mount(hostElement: HTMLElement, dependencies: TDependencies): Promise<void>;
  destroy(): void;
}
