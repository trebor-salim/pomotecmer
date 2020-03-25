
export class Storage {
  static read(name: string, defaultValue: any): any {
    const storage: null | string = localStorage.getItem(name);
    if (storage !== null) {
      return JSON.parse(storage);
    } else {
      return defaultValue;
    }
  }

  static write(name: string, value: any): void {
    localStorage.setItem(name, JSON.stringify(value));
  }
}
