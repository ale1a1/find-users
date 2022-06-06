import { Repository } from "./Repository";

export class LogoutRepository {
  constructor() {
    this.repository = new Repository("FindUSerWebApp-CurrentUser");
  }

  remove() {
    this.repository.delete(this.repository.repositoryName);
  }
}
