import { Injectable, signal } from "@angular/core";
import { VERSION } from "@angular/core";

async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

@Injectable({ providedIn: "root" })
export class TestService {
  readonly greetCount = signal(0);

  async greet(name: string): Promise<string> {
    await sleep(1000);

    this.greetCount.update((n) => n + 1);

    return `Hello from MFE-3 (Angular ${VERSION.full}) processed by ${name} ${this.greetCount()}`;
  }

  writeToStore(key: string, value: unknown): void {
    console.log("asdas");
  }
}

const __service = new TestService();
export const greet = (name: string) => __service.greet(name);
export const writeToStore = (key: string, value: unknown) =>
  __service.writeToStore(key, value);
