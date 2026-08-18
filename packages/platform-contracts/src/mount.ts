export interface MfeBootstrapModule {
  mount(hostElement: HTMLElement): Promise<void>;
  destroy(): void;
}
