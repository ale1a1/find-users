import { Repository } from "./Repository";

export class LoginRepository {
  constructor() {
    this.repository = new Repository("FindUSerWebApp-CurrentUser");
  }

  save(user) {
    this.repository.add(user);
  }

  list() {
    return this.repository.list();
  }
}
