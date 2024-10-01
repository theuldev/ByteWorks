import { inject, Injectable } from '@angular/core';
import { finalize, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { getStorage, ref, listAll } from "firebase/storage";

const storage = getStorage();
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  listAllFiles(path: string): any {
    const listRef = ref(storage, path);
    listAll(listRef)
      .then((res) => {
        console.log(res)
        res.prefixes.forEach((folderRef) => {
        });
        res.items.forEach((itemRef) => {
          return itemRef.name;
        });
      }).catch((error) => {
      });

  }
}
