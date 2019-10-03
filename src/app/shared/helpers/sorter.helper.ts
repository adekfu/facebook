import {map} from 'rxjs/operators';

export function sortBy(collection, mapTo) {
  return collection.sort((item1, item2) => mapTo(item2).getTime() - mapTo(item1).getTime());
}

export function sortByOperator(key) {
  return map((list) => {
    return sortBy(list, (item) => {
      return new Date(item[key]);
    });
  });
}
