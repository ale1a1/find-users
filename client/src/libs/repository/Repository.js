export class Repository {
  constructor(repositoryName) {
    this.repositoryName = repositoryName;
  }

  list() {
    const storedValues = localStorage.getItem(this.repositoryName);
    const stored = JSON.parse(storedValues);
    return stored === null ? [] : stored;
  }

  add(object) {
    const objects = this.list();
    objects.push(object);
    localStorage.setItem(this.repositoryName, JSON.stringify(objects));
  }

  delete(item) {
    localStorage.removeItem(item);
  }
}
