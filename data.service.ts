import { Injectable } from '@angular/core';

@Injectable()

export class DataService {

  private dataMap: Map<string, any> = new Map<string, any>();

  constructor() { }

  getItem(key: string): any{
    return this.dataMap.get(key);
  }

  setItem(key:string, value:any):void{
    this.dataMap.set(key, value);
  }

  clear(): void{
    this.dataMap.clear();
  }

}
